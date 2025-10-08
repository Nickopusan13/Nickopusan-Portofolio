from pydantic import BaseModel, EmailStr

class UserMessage(BaseModel):
    name: str
    email: EmailStr
    message: str