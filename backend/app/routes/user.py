from fastapi import APIRouter, HTTPException, Depends, status
from app.db.session import AsyncSession
from app.db.dependencies import get_db
from app.schemas.user import UserMessage
from app.crud.user import create_message
import os

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

@router.get("/debug-cors")
async def debug_cors():
    # This will print the value to your Vercel runtime logs
    origins = os.getenv("ALLOWED_ORIGINS")
    print(f"DEBUG: ALLOWED_ORIGINS value is: '{origins}'")
    
    if origins:
        # We can also return it to see it in the browser
        return {"allowed_origins_from_env": origins.split(",")}
    return {"error": "ALLOWED_ORIGINS is not set"}