from fastapi import APIRouter, HTTPException, status, UploadFile, File, Form
from typing import Optional
from ydata_profiling import ProfileReport
import polars as pl
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
import json

load_dotenv()
router = APIRouter()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
chart_instruction_path = os.path.join(BASE_DIR, "../config/finance_chart.txt")
with open(chart_instruction_path, "r", encoding="utf-8") as f:
    CHART_INSTRUCTION = f.read()

# Report instructions
report_instruction_path = os.path.join(BASE_DIR, "../config/finance_report.txt")
with open(report_instruction_path, "r", encoding="utf-8") as f:
    REPORT_INSTRUCTION = f.read()

@router.post("/api/finance/preview")
async def finance_preview(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No file uploaded"
        )
    if not file.filename.endswith(".csv"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only csv files are allowed"
        )
    try:
        df = pl.read_csv(file.file, infer_schema_length=100)
        preview = df.head(15).to_dicts()
        return {
            "columns": df.columns,
            "preview": preview
        }
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Error reading csv"
        )

@router.post("/api/finance/chart")
async def finance_analyze(file: UploadFile = File(...), x: str = Form(...), y: str = Form(...), group: Optional[str] = Form(None)):
    if not file:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No file uploaded"
        )
    if not file.filename.endswith(".csv"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only csv files are allowed"
        )
    try:
        df = pl.read_csv(file.file)
        cols = [x, y] + ([group] if group else [])
        for col in cols:
            if col and col not in df.columns:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Column {col} not found"
                )
        data_preview = df.select(cols).head(20).to_dicts()
        full_data = df.select(cols).to_dicts()
        print(full_data)
        client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=CHART_INSTRUCTION.format(
                x=x,
                y=y,
                group=group or "None",
                x_unique = df[x].n_unique(),
                y_unique = df[y].n_unique(),
                group_unique = df[group].n_unique() if group and group in df.columns else 0,
                row_count = df.height,
                x_type="numeric" if df[x].dtype.is_numeric() else "categorical",
                y_type="numeric" if df[y].dtype.is_numeric() else "categorical",
                preview=json.dumps(data_preview, default=str)
            ),
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=1500)
            )
        )
        return {
            "data": full_data,
            "chart_suggestion": response.text
        }
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Error reading csv {e}"
        )

@router.post("/api/finance/report")
async def finance_report(file: UploadFile = File(...), x: str = Form(...), y: str = Form(...), group: Optional[str] = Form(None)):
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only csv files are allowed")
    try:
        df = pl.read_csv(file.file)
        cols = [x, y] + ([group] if group else [])
        for col in cols:
            if col not in df.columns:
                raise HTTPException(status_code=400, detail=f"Column {col} not found")
        df_selected = df.select(cols)
        df_pandas = df_selected.to_pandas()
        if df_pandas.empty:
            raise HTTPException(status_code=400, detail="CSV contains no data in selected columns")
        profile = ProfileReport(df_pandas, minimal=True, explorative=True)
        profile_summary = profile.get_description()
        preview_dict = profile_summary.variables
        preview_str = json.dumps(preview_dict, default=str)
        client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        response = client.models.generate_content(
            model="gemini-2.5-pro",
            contents=REPORT_INSTRUCTION.format(
                x=x,
                y=y,
                group=group or "None",
                x_type="numeric" if df[x].dtype.is_numeric() else "categorical",
                y_type="numeric" if df[y].dtype.is_numeric() else "categorical",
                preview=preview_str
            ),
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=5000)
            )
        )
        return {"report": response.text}
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"Error processing CSV: {e}")