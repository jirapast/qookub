from fastapi import FastAPI, Body, Depends, status, Response
from fastapi.middleware.cors import CORSMiddleware # T-T 

#from rsa import verify
#from sqlalchemy import null

# from app.model import UserSchema, AdminSchema, AdminLoginSchema
# from app.auth.auth_bearer import JWTBearer
# from app.auth.auth_handler import signJWT
from .model import UserSchema, AdminSchema, AdminLoginSchema
from .auth.auth_bearer import JWTBearer
from .auth.auth_handler import signJWT

from datetime import datetime
from uuid import uuid1, UUID

# from app.sample_data import courses, users, admins
from .sample_data import courses, users, admins

#users = []

app = FastAPI(
    title="QOOKUB E-LEARNING API",
    description="For serving frontend",
    version="x.0.1"
)

# Set CORS
origins = [
    "localhost:3000",
    "http://localhost:3000",
    "https://localhost:3000",
    "localhost:4000",
    "http://localhost:4000",
    "https://localhost:4000",
    "localhost:8081",
    "http://localhost:8081",
    "https://localhost:8081",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to e-learning API !"}

@app.get("/courses", tags=["course"])
async def get_courses() -> dict:
    return {
        "data": courses
    }

@app.get("/users", tags=["user"])
async def get_users() -> dict:
    return { 
        "data": users 
    }

@app.get("/admins", dependencies=[Depends(JWTBearer())], tags=["admin"])
async def get_admins() -> dict:
    return { "data": admins }

@app.get("/users/{id}", tags=["user"])
async def get_user(id: UUID) -> dict:
    # if id > len(users):
    #     return {
    #         "error": "No such user with the supplied ID."
    #     }

    for user in users:
        if user["id"] == id:
            return {
                "data": user
            }
    return {
        "error": "No such user with the supplied ID."
    }

# @app.get("/users/cid/{card_id}", tags=["user"])
# async def get_single_post(card_id: int) -> dict:
#     for post in users:
#         if post["card_id"] == card_id:
#             return {
#                 "data": post
#             }

@app.post("/users", dependencies=[Depends(JWTBearer())], tags=["user"])
async def add_user(user: UserSchema) -> dict:
    user.id = uuid1() #len(users) + 1
    users.append(user.dict())
    return {
        "data": "post added."
    }

@app.put("/user/update/content/{id}", dependencies=[Depends(JWTBearer())], tags=["user"])
async def update_user(id: UUID, update_data: list) -> dict:
    for user in users:
        if user["id"] == id:
            #update_data.id = user["id"] 
            users[users.index(user)]["content"] = update_data
            return { "update" : update_data }
    return {
        "error": "No such user with the supplied ID."
    } 
             

@app.post("/admin/signup", tags=["admin"])
async def create_admin(admin: AdminSchema = Body(...)):
    admin.id = uuid1()
    admins.append(admin) # replace with db call and securely hash the password !
    return signJWT(admin.email)

def check_admin(data: AdminLoginSchema):
    for admin in admins:
        if admin["email"] == data.email and admin["password"] == data.password:
            return True
    return False

@app.post("/admin/login", tags=["admin"])
async def admin_login(admin: AdminLoginSchema = Body(...)):
    if check_admin(admin):
        return signJWT(admin.email)
    return {
        "error": "Wrong login details!"
    }

