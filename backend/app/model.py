#from numpy import _2Tuple
from pydantic import BaseModel, Field, EmailStr
from uuid import UUID

class UserSchema(BaseModel):
    id: UUID = Field(default=None)
    card_id: int = Field(...)
    fullname: str = Field(...)
    content: list = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "card_id": 5555559999999,
                "fullname": "Jojo",
                "content": ["bitcoin101", "coding smart contract", "intro to solidity"]
            }
        }

class AdminSchema(BaseModel):
    id: UUID = Field(default=None)
    fullname: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "id": "b848e06a-2ce1-11ed-9564-1062e501e6cb",
                "fullname": "Nara Pho",
                "email": "abc@x.com",
                "password": "1234"
            }
        }

class AdminLoginSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "abc@x.com",
                "password": "1234"
            }
        }

