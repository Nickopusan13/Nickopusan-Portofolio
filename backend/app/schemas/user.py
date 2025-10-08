from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserMessage(BaseModel):
    name: str
    email: EmailStr
    message: str
    time: datetime | None = None