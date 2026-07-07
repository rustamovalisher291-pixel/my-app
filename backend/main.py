from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
import shutil

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("rasmlar", exist_ok=True)
app.mount("/rasmlar", StaticFiles(directory="rasmlar"), name="rasmlar")

class User(BaseModel):
    email: str
    password: str

foydalanuvchilar = [
    {"email": "examle.@gmail.com", "parol":"1234", "rasm": ""},
]

@app.post("/royxat")
def royxat(user: User):
    for f in foydalanuvchilar:
        if f["email"] == user.email:
            return {"xato": "Bu email allaqachon ro'yxatdan o'tgan!"}
    foydalanuvchilar.append({"email": user.email, "parol": user.password})
    return {"xabar": "Muvaffaqiyatli ro'yxatdan o'tdingiz! ✅"}

@app.post("/login")
def login(user: User):
    for f in foydalanuvchilar:
        if f["email"] == user.email and f["parol"] == user.password:
            return {"xabar": "Xush kelibsiz! ✅"}
    return {"xato": "Email yoki parol noto'g'ri! ❌"}

@app.post("/rasm-yuklash")
async def rasm_yuklash(email: str, fayl: UploadFile = File(...)):
    fayl_nomi = f"{email.replace('@', '_')}.jpg"
    fayl_yoli = f"rasmlar/{fayl_nomi}"
    with open(fayl_yoli, "wb") as f:
        shutil.copyfileobj(fayl.file, f)

    for foydalanuvchi in foydalanuvchilar:
        if foydalanuvchi["email"] == email:
            foydalanuvchi["rasm"] = f"http://localhost:8000/{fayl_nomi}"

    return {"xabar": "Rasm saqlandi! ✅", "rasm": f"http://localhost:8000/{fayl_nomi}"}

@app.get("/")
def bosh():
    return {"xabar": "FastAPI ishlayapti! ✅"}