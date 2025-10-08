from fastapi import APIRouter, HTTPException, Depends, status
from app.db.session import AsyncSession
from app.db.dependencies import get_db
from app.schemas.user import UserMessage
from app.db.models.user import User
from app.crud.user import create_message

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