from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime
from app.schemas import to_camel

class UserMessage(BaseModel):
    name: str
    email: EmailStr
    message: str
    time: datetime | None = None

class ChatRequest(BaseModel):
    prompt: str
    session_id: str | None = None
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)

class ChatResponse(BaseModel):
    reply: str
    session_id: str | None = None
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)