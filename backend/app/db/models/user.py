from sqlalchemy import Column, String, Integer
from app.db.base import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    name = Column(String(155), nullable=False)
    email = Column(String(155), nullable=False)
    message = Column(String(500), nullable=False)