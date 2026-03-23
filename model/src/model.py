import torch
import torch.nn as nn
from torchvision import models
from src.config import NUM_CLASSES

def get_model(pretrained=True):
    # Load MobileNetV3 Large 
    model = models.mobilenet_v3_large(
        weights=models.MobileNet_V3_Large_Weights.DEFAULT if pretrained else None
    )

    # Freeze backbone for Phase 1
    for param in model.parameters():
        param.requires_grad = False

    # Custom classifier head — 45 classes
    in_features = model.classifier[3].in_features
    model.classifier[3] = nn.Linear(in_features, NUM_CLASSES)

    return model


def unfreeze_model(model):
    # Unfreeze all layers for Phase 2 fine-tuning
    for param in model.parameters():
        param.requires_grad = True

    return model


if __name__ == "__main__":
    model = get_model()
    print(model.classifier)
    print(f"\nTotal params: {sum(p.numel() for p in model.parameters()):,}")
    print(f"Trainable params: {sum(p.numel() for p in model.parameters() if p.requires_grad):,}")