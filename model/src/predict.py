import torch
from torchvision import transforms
from PIL import Image
from src.config import MODEL_SAVE_PATH, CLASS_NAMES, IMAGE_SIZE, DEVICE, NUM_CLASSES
from src.model import get_model


# Model load 
def load_model():
    model = get_model(pretrained=False)
    model.load_state_dict(torch.load(MODEL_SAVE_PATH, map_location=DEVICE))
    model.to(DEVICE)
    model.eval()
    return model


# Image preprocess
def preprocess_image(image_path):
    transform = transforms.Compose([
        transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406],
                             [0.229, 0.224, 0.225])
    ])
    image = Image.open(image_path).convert("RGB")
    return transform(image).unsqueeze(0)  # batch dimension add 


# Predict 
def predict(image_path):
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
        print("Example: python -m src.predict test.jpg")
    else:
        image_path = sys.argv[1]
        result = predict(image_path)
        print(f"\nDisease Detected: {result['disease']}")
        print(f"Confidence: {result['confidence']}")

