import os

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATASET_PATH = os.path.join(BASE_DIR, "Dataset")
MODEL_SAVE_PATH = os.getenv(
    "MODEL_PATH",
    os.path.join(BASE_DIR, "models", "mobilenetv3_crop.pth"),
)

# Training Hyperparameters
BATCH_SIZE = 32
NUM_EPOCHS_PHASE1 = 5
NUM_EPOCHS_PHASE2 = 10
LR_PHASE1 = 0.001
LR_PHASE2 = 0.0001
IMAGE_SIZE = 224
NUM_WORKERS = 4

# 45 Classes
CLASS_NAMES = [
    'Apple_Apple_Scab',
    'Apple_Black_Rot',
    'Apple_Cedar_Apple_Rust',
    'Apple_Healthy',
    'Banana_Cordana',
    'Banana_Healthy',
    'Banana_Sigatoka',
    'Bean_Angular_Leaf_Spot',
    'Bean_Healthy',
    'Bean_Rust',
    'Corn_Cercospora_Leaf_Spot',
    'Corn_Common_Rust',
    'Corn_Healthy',
    'Corn_Northern_Leaf_Blight',
    'Cotton_Bacterial_Blight',
    'Cotton_Curl_Virus',
    'Cotton_Fusarium_Wilt',
    'Cotton_Healthy',
    'Grape_Black_Rot',
    'Grape_Esca',
    'Grape_Healthy',
    'Grape_Leaf_Blight',
    'Pepper_Bacterial_Spot',
    'Pepper_Healthy',
    'Potato_Early_Blight',
    'Potato_Healthy',
    'Potato_Late_Blight',
    'Rice_Bacterial_Leaf_Blight',
    'Rice_Brown_Spot',
    'Rice_Leaf_Smut',
    'Soybean_Healthy',
    'Tomato_Bacterial_Spot',
    'Tomato_Early_Blight',
    'Tomato_Healthy',
    'Tomato_Late_Blight',
    'Tomato_Leaf_Mold',
    'Tomato_Mosaic_Virus',
    'Tomato_Septoria_Leaf_Spot',
    'Tomato_Spider_Mites',
    'Tomato_Target_Spot',
    'Tomato_Yellow_Leaf_Curl',
    'Wheat_Brown_Rust',
    'Wheat_Healthy',
    'Wheat_Septoria',
    'Wheat_Yellow_Rust',
]

NUM_CLASSES = len(CLASS_NAMES)  # 45

DEVICE = os.getenv("DEVICE", "cuda")