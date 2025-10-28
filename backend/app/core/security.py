import asyncio
from app.db.session import AsyncSessionLocal
from app.db.models.user import User
from sqlalchemy.future import select


async def neon_db():
    while True:
        try:
            async with (
                AsyncSessionLocal() as db
            ):  # create a fresh session each iteration
                await db.execute(select(User).limit(1))
            print("Keep-alive query executed successfully.")
        except Exception as e:
            print(f"Keep-alive failed: {e}")
        await asyncio.sleep(180)  # every 3 minutes
