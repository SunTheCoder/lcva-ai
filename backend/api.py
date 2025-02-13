from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from art_recommender import recommend_art

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://lcva-ai.vercel.app",
        "http://localhost:3000"
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "ok", "message": "Art Recommender API is running"}

class EmotionRequest(BaseModel):
    emotion: str

@app.post("/recommend")
async def get_recommendation(request: EmotionRequest):
    try:
        result = recommend_art(request.emotion)
        return {"success": True, "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 