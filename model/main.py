from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os
import tempfile
import requests

from src.predict import predict
from src.severity import get_severity_with_fallback

app = FastAPI(title="Crop Disease Detection API")

NODE_BASE_URL = "http://localhost:5000/api"

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# class name 45 classes
CLASS_TO_DB = {
    # Apple
    "Apple_Apple_Scab":             ("Apple",    "Apple Scab"),
    "Apple_Black_Rot":              ("Apple",    "Black Rot"),
    "Apple_Cedar_Apple_Rust":       ("Apple",    "Cedar Apple Rust"),
    "Apple_Healthy":                ("Apple",    "Healthy"),
    # Banana
    "Banana_Cordana":               ("Banana",   "Cordana"),
    "Banana_Healthy":               ("Banana",   "Healthy"),
    "Banana_Sigatoka":              ("Banana",   "Sigatoka"),
    # Bean
    "Bean_Angular_Leaf_Spot":       ("Bean",     "Angular Leaf Spot"),
    "Bean_Healthy":                 ("Bean",     "Healthy"),
    "Bean_Rust":                    ("Bean",     "Bean Rust"),
    # Corn
    "Corn_Cercospora_Leaf_Spot":    ("Corn",     "Cercospora Spot"),
    "Corn_Common_Rust":             ("Corn",     "Common Rust"),
    "Corn_Healthy":                 ("Corn",     "Healthy"),
    "Corn_Northern_Leaf_Blight":    ("Corn",     "Northern Blight"),
    # Cotton
    "Cotton_Bacterial_Blight":      ("Cotton",   "Bacterial Blight"),
    "Cotton_Curl_Virus":            ("Cotton",   "Leaf Curl Virus"),
    "Cotton_Fusarium_Wilt":         ("Cotton",   "Fusarium Wilt"),
    "Cotton_Healthy":               ("Cotton",   "Healthy"),
    # Grape
    "Grape_Black_Rot":              ("Grape",    "Black Rot"),
    "Grape_Esca":                   ("Grape",    "Esca"),
    "Grape_Healthy":                ("Grape",    "Healthy"),
    "Grape_Leaf_Blight":            ("Grape",    "Leaf Blight"),
    # Pepper
    "Pepper_Bacterial_Spot":        ("Pepper",   "Bacterial Spot"),
    "Pepper_Healthy":               ("Pepper",   "Healthy"),
    # Potato
    "Potato_Early_Blight":          ("Potato",   "Early Blight"),
    "Potato_Healthy":               ("Potato",   "Healthy"),
    "Potato_Late_Blight":           ("Potato",   "Late Blight"),
    # Rice
    "Rice_Bacterial_Leaf_Blight":   ("Rice",     "Bacterial Blight"),
    "Rice_Brown_Spot":              ("Rice",     "Brown Spot"),
    "Rice_Leaf_Smut":               ("Rice",     "Leaf Smut"),
    # Soybean
    "Soybean_Healthy":              ("Soybean",  "Healthy"),
    # Tomato
    "Tomato_Bacterial_Spot":        ("Tomato",   "Bacterial Spot"),
    "Tomato_Early_Blight":          ("Tomato",   "Early Blight"),
    "Tomato_Healthy":               ("Tomato",   "Healthy"),
    "Tomato_Late_Blight":           ("Tomato",   "Late Blight"),
    "Tomato_Leaf_Mold":             ("Tomato",   "Leaf Mold"),
    "Tomato_Mosaic_Virus":          ("Tomato",   "Mosaic Virus"),
    "Tomato_Septoria_Leaf_Spot":    ("Tomato",   "Septoria Leaf Spot"),
    "Tomato_Spider_Mites":          ("Tomato",   "Spider Mites"),
    "Tomato_Target_Spot":           ("Tomato",   "Target Spot"),
    "Tomato_Yellow_Leaf_Curl":      ("Tomato",   "Yellow Leaf Curl"),
    # Wheat
    "Wheat_Brown_Rust":             ("Wheat",    "Brown Rust"),
    "Wheat_Healthy":                ("Wheat",    "Healthy"),
    "Wheat_Septoria":               ("Wheat",    "Septoria"),
    "Wheat_Yellow_Rust":            ("Wheat",    "Yellow Rust"),
}


def fetch_disease_info(crop: str, disease: str) -> dict:
    """Fetch cure + description from Node API"""
    try:
        cure_url = f"{NODE_BASE_URL}/{crop}/disease/{disease}/cure"
        desc_url = f"{NODE_BASE_URL}/{crop}/disease/{disease}/description"

        cure_res = requests.get(cure_url, timeout=5)
        desc_res = requests.get(desc_url, timeout=5)

        cure_data = cure_res.json() if cure_res.status_code == 200 else {}
        desc_data = desc_res.json() if desc_res.status_code == 200 else {}

        return {
            "chemical_cure":    cure_data.get("chemical", []),
            "organic_cure":     cure_data.get("organic", []),
            "description":      desc_data.get("about_disease", ""),
            "symptoms":         desc_data.get("symptoms", []),
            "cause":            desc_data.get("cause", ""),
            "severity_default": desc_data.get("severity", "Moderate"),
        }
    except Exception:
        return {
            "chemical_cure":    [],
            "organic_cure":     [],
            "description":      "",
            "symptoms":         [],
            "cause":            "",
            "severity_default": "Moderate",
        }


@app.get("/")
def root():
    return {"message": "Crop Disease Detection API is running!"}


@app.post("/predict")
async def predict_disease(file: UploadFile = File(...)):

    # File type validation
    if not file.filename.lower().endswith((".jpg", ".jpeg", ".png")):
        raise HTTPException(status_code=400, detail="Only JPG/JPEG/PNG images allowed")

    # Save to temp file
    suffix = os.path.splitext(file.filename)[1]
    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        shutil.copyfileobj(file.file, tmp)
        tmp_path = tmp.name

    try:
        # Step 1 — ML prediction
        ml_result = predict(tmp_path)
        disease_class = ml_result["disease"]
        confidence_str = ml_result["confidence"]
        confidence = float(confidence_str.replace("%", ""))

        # Step 2 — Map to DB crop + disease name
        crop, disease_name = CLASS_TO_DB.get(disease_class, ("Unknown", "Unknown"))

        # Step 3 — Fetch from Node API
        db_info = fetch_disease_info(crop, disease_name)

        # Step 4 — Calculate severity
        severity_result = get_severity_with_fallback(
            image_path=tmp_path,
            confidence=confidence,
            db_severity=db_info["severity_default"]
        )

        # Step 5 — 0% infected override → Healthy
        infected_pct = severity_result.get("infected_area_pct")
        if infected_pct is not None and infected_pct == 0.0 and disease_name != "Healthy":
            disease_name = "Healthy"
            severity_result["severity"] = "None"
            db_info = fetch_disease_info(crop, "Healthy")

        # Step 6 — Return response
        return {
            "disease":           disease_name,
            "crop":              crop,
            "confidence":        confidence_str,
            "severity":          severity_result["severity"],
            "infected_area_pct": infected_pct,
            "severity_method":   severity_result["method"],
            "chemical_cure":     db_info["chemical_cure"],
            "organic_cure":      db_info["organic_cure"],
            "description":       db_info["description"],
            "symptoms":          db_info["symptoms"],
            "cause":             db_info["cause"],
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)