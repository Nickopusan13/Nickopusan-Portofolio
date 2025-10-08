from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.db.init_db import create_tabel
from starlette.middleware.sessions import SessionMiddleware
from dotenv import load_dotenv
from app.routes import user
import os

load_dotenv()

@asynccontextmanager
async def lifespan(app:FastAPI):
    await create_tabel()
    yield

app = FastAPI(title="Nickopusan Portofolio", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY"))

app.include_router(user.router)