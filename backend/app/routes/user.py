from fastapi import APIRouter, HTTPException, Depends, status
from app.db.session import AsyncSession
from app.db.dependencies import get_db
from app.schemas.user import UserMessage
from app.crud.user import create_message
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

@router.post("/api/user", response_model=UserMessage)
async def user_message(data: UserMessage, db: AsyncSession = Depends(get_db)):
    try:
        message = await create_message(db=db, name=data.name, email=data.email, message=data.message)
        return message
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error {e}"
        )
        
@router.get("/api/check-cors")
def check_cors():
    from os import getenv
    allowed = getenv("ALLOWED_ORIGINS", "")
    return {"allowed_origins": allowed.split(",") if allowed else []}


@router.get("/api/hello")
def read_root():
    return {"message": "Welcome to the Nickopusan API!"}