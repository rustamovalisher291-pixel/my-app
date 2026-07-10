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



@app.get("/")
def bosh():
    return {"xabar": "FastAPI ishlayapti! ✅"}