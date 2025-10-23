from fastapi import APIRouter, HTTPException, Depends, status
from app.db.session import AsyncSession
from app.db.dependencies import get_db
from app.schemas.user import UserMessage, ChatResponse, ChatRequest
from app.crud.user import create_message
from google import genai
from google.genai import types
from dotenv import load_dotenv
import os, uuid

load_dotenv()
router = APIRouter()
sessions = {}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
instruction_path = os.path.join(BASE_DIR, "../config/instruction.txt")
with open(instruction_path, "r", encoding="utf-8") as f:
    SYSTEM_INSTRUCTION = f.read()

@router.post("/api/user", response_model=UserMessage)
async def user_message(data: UserMessage, db: AsyncSession = Depends(get_db)):
    try:
        message = await create_message(db=db, name=data.name, email=data.email, message=data.message)
        return message
    except Exception as e:
        print(f"[Error] {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error. Please try again later."
        )

@router.post("/api/chat", response_model=ChatResponse)
async def gemini_chat(request: ChatRequest):
    client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
    session_id = request.session_id or str(uuid.uuid4())
    chat_history = sessions.get(session_id, [])
    chat_history.append({"role": "user", "content": request.prompt})
    context_messages = [m["content"] for m in chat_history]
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=context_messages,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=1500),
                system_instruction=SYSTEM_INSTRUCTION
            )
        )
        reply_text = response.text if hasattr(response, "text") else str(response)
        chat_history.append({"role": "assistant", "content": reply_text})
        context_messages = [m["content"] for m in chat_history[-20:]]
        return {"reply": reply_text, "session_id": session_id}
    except Exception as e:
        print(f"[Gemini API] {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error, Please try again later"
        )