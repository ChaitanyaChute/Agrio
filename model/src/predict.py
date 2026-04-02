import torch
import cv2
import numpy as np
from torchvision import transforms
from PIL import Image
from src.config import MODEL_SAVE_PATH, CLASS_NAMES, IMAGE_SIZE, DEVICE
from src.model import get_model


def load_model():
    model = get_model(pretrained=False)
    model.load_state_dict(torch.load(MODEL_SAVE_PATH, map_location=torch.device('cpu')))
    model.to(DEVICE)
    model.eval()
    return model

def preprocess_image(image_path):
    transform = transforms.Compose([
        transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
    ])
    image = Image.open(image_path).convert("RGB")
    return transform(image).unsqueeze(0)


def get_green_ratio(image_path):
    image = cv2.imread(image_path)
    if image is None:
        return 0.0

    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    lower_green = np.array([25, 40, 40])
    upper_green = np.array([90, 255, 255])

    mask = cv2.inRange(hsv, lower_green, upper_green)

    green_pixels = cv2.countNonZero(mask)
    total_pixels = image.shape[0] * image.shape[1]

    return green_pixels / total_pixels


def predict(image_path):
    # 🔥 NON-LEAF CHECK
    green_ratio = get_green_ratio(image_path)

    if green_ratio < 0.12:
        return {
            "error": "not_a_leaf"
        }

    # Model prediction
    model = load_model()
    image_tensor = preprocess_image(image_path).to(DEVICE)

    with torch.no_grad():
        outputs = model(image_tensor)
        probabilities = torch.softmax(outputs, dim=1)
        confidence, predicted_idx = probabilities.max(1)

    disease_name = CLASS_NAMES[predicted_idx.item()]
    confidence_pct = confidence.item() * 100

    return {
        "disease": disease_name,
        "confidence": f"{confidence_pct:.2f}%"
    }


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python -m src.predict <image_path>")
    else:
        result = predict(sys.argv[1])
        print(result)