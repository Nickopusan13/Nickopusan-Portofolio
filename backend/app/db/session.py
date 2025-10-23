from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

engine = create_async_engine(
    os.getenv("SQL_URL"), 
    echo=True, 
    connect_args={
        "ssl": True,
        "server_settings": {
            "channel_binding": "require"
        }
    })
AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)
