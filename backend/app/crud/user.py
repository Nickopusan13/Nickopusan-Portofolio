from app.db.session import AsyncSession
from app.db.models.user import User

async def create_message(db: AsyncSession, name:str, email:str, message:str) -> User:
    user_message = User(name=name, email=email, message=message)
    db.add(user_message)
    await db.commit()
    await db.refresh(user_message)
    return user_message