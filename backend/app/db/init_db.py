import asyncio
from app.db.base import Base
from app.db.session import engine
from app.db import models


async def create_tabel():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


if __name__ == "__main__":
    asyncio.run(create_tabel())
