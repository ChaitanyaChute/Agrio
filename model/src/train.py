import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms
from torch.utils.data import DataLoader
from tqdm import tqdm
import os
import csv
import matplotlib.pyplot as plt

from src.config import (
    DATASET_PATH, MODEL_SAVE_PATH, BATCH_SIZE,
    NUM_EPOCHS_PHASE1, NUM_EPOCHS_PHASE2,
    LR_PHASE1, LR_PHASE2, IMAGE_SIZE, NUM_WORKERS, DEVICE
)
from src.model import get_model, unfreeze_model

RESULTS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "results")


def get_transforms():
    train_transform = transforms.Compose([
        transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        transforms.RandomHorizontalFlip(),
        transforms.RandomRotation(15),
        transforms.ColorJitter(brightness=0.3, contrast=0.3),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    val_transform = transforms.Compose([
        transforms.Resize((IMAGE_SIZE, IMAGE_SIZE)),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])
    return train_transform, val_transform


def get_dataloaders():
    train_transform, val_transform = get_transforms()
    full_dataset = datasets.ImageFolder(DATASET_PATH, transform=train_transform)

    total = len(full_dataset)
    train_size = int(0.8 * total)
    val_size = total - train_size

    train_dataset, val_dataset = torch.utils.data.random_split(
        full_dataset, [train_size, val_size]
    )
    val_dataset.dataset.transform = val_transform

    train_loader = DataLoader(train_dataset, batch_size=BATCH_SIZE,
                              shuffle=True, num_workers=NUM_WORKERS)
    val_loader = DataLoader(val_dataset, batch_size=BATCH_SIZE,
                            shuffle=False, num_workers=NUM_WORKERS)

    print(f"Train samples: {train_size} | Val samples: {val_size}")
    print(f"Total classes: {len(full_dataset.classes)}")
    return train_loader, val_loader


def train_one_epoch(model, loader, optimizer, criterion, device):
    model.train()
    total_loss, correct, total = 0, 0, 0

    for images, labels in tqdm(loader, desc="Training"):
        images, labels = images.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        total_loss += loss.item()
        _, predicted = outputs.max(1)
        correct += predicted.eq(labels).sum().item()
        total += labels.size(0)

    return total_loss / len(loader), 100. * correct / total


def validate(model, loader, criterion, device):
    model.eval()
    total_loss, correct, total = 0, 0, 0

    with torch.no_grad():
        for images, labels in tqdm(loader, desc="Validating"):
            images, labels = images.to(device), labels.to(device)
            outputs = model(images)
            loss = criterion(outputs, labels)

            total_loss += loss.item()
            _, predicted = outputs.max(1)
            correct += predicted.eq(labels).sum().item()
            total += labels.size(0)

    return total_loss / len(loader), 100. * correct / total


def save_results_csv(history, filepath):
    """Save epoch-wise training history to CSV"""
    with open(filepath, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["Epoch", "Phase", "Train Loss", "Train Acc %", "Val Loss", "Val Acc %", "Model Saved"])
        for row in history:
            writer.writerow(row)
    print(f"CSV saved: {filepath}")


def save_plot(history, filepath):
    """Save accuracy and loss plot as PNG"""
    # Separate phase 1 and phase 2 for coloring
    p1 = [r for r in history if r[1] == "Phase 1"]
    p2 = [r for r in history if r[1] == "Phase 2"]

    # X axis — continuous epoch numbers
    p1_x = list(range(1, len(p1) + 1))
    p2_x = list(range(len(p1) + 1, len(p1) + len(p2) + 1))
    all_x = p1_x + p2_x

    train_acc  = [r[3] for r in history]
    val_acc    = [r[5] for r in history]
    train_loss = [r[2] for r in history]
    val_loss   = [r[4] for r in history]

    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

    # Accuracy Plot 
    ax1.plot(all_x, train_acc, "b-o", label="Train Accuracy", linewidth=2, markersize=5)
    ax1.plot(all_x, val_acc,   "r-o", label="Val Accuracy",   linewidth=2, markersize=5)
    if p2_x:
        ax1.axvline(x=len(p1) + 0.5, color="green", linestyle="--", linewidth=1.5, label="Phase 1 → Phase 2")
    ax1.set_title("Accuracy per Epoch", fontsize=13, fontweight="bold")
    ax1.set_xlabel("Epoch")
    ax1.set_ylabel("Accuracy (%)")
    ax1.set_xticks(all_x)
    ax1.legend()
    ax1.grid(True, alpha=0.3)

    #Loss Plot 
    ax2.plot(all_x, train_loss, "b-o", label="Train Loss", linewidth=2, markersize=5)
    ax2.plot(all_x, val_loss,   "r-o", label="Val Loss",   linewidth=2, markersize=5)
    if p2_x:
        ax2.axvline(x=len(p1) + 0.5, color="green", linestyle="--", linewidth=1.5, label="Phase 1 → Phase 2")
    ax2.set_title("Loss per Epoch", fontsize=13, fontweight="bold")
    ax2.set_xlabel("Epoch")
    ax2.set_ylabel("Loss")
    ax2.set_xticks(all_x)
    ax2.legend()
    ax2.grid(True, alpha=0.3)

    best_val = max(val_acc)
    plt.suptitle(
        f"MobileNetV3 Large — 45 Classes | Crop Disease Detection\n"
        f"Phase 1: {NUM_EPOCHS_PHASE1} epochs (frozen backbone)  |  "
        f"Phase 2: {NUM_EPOCHS_PHASE2} epochs (full fine-tune)  |  "
        f"Best Val Acc: {best_val:.2f}%",
        fontsize=11
    )

    plt.tight_layout()
    plt.savefig(filepath, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"Plot saved: {filepath}")


def train():
    device = torch.device(DEVICE)
    print(f"Using device: {device}")

    os.makedirs(RESULTS_DIR, exist_ok=True)
    os.makedirs(os.path.dirname(MODEL_SAVE_PATH), exist_ok=True)

    train_loader, val_loader = get_dataloaders()
    model = get_model(pretrained=True).to(device)
    criterion = nn.CrossEntropyLoss()

    best_val_acc = 0.0
    history = []

    #Phase 1: Backbone frozen 
    print("\n" + "="*60)
    print("PHASE 1: Classifier only (backbone frozen)")
    print("="*60)
    optimizer = optim.Adam(
        filter(lambda p: p.requires_grad, model.parameters()),
        lr=LR_PHASE1
    )

    for epoch in range(NUM_EPOCHS_PHASE1):
        train_loss, train_acc = train_one_epoch(model, train_loader, optimizer, criterion, device)
        val_loss, val_acc = validate(model, val_loader, criterion, device)

        saved = ""
        if val_acc > best_val_acc:
            best_val_acc = val_acc
            torch.save(model.state_dict(), MODEL_SAVE_PATH)
            saved = "YES ✓"

        print(f"Epoch [{epoch+1}/{NUM_EPOCHS_PHASE1}] "
              f"Train Loss: {train_loss:.4f} Acc: {train_acc:.2f}% | "
              f"Val Loss: {val_loss:.4f} Acc: {val_acc:.2f}%"
              + (f"  << Model Saved! Best: {best_val_acc:.2f}%" if saved else ""))

        history.append([epoch + 1, "Phase 1",
                        round(train_loss, 4), round(train_acc, 2),
                        round(val_loss, 4),   round(val_acc, 2), saved])

    #Phase 2: Full fine-tuning 
    print("\n" + "="*60)
    print("PHASE 2: Full fine-tuning (all layers unfrozen)")
    print("="*60)
    model = unfreeze_model(model)
    optimizer = optim.Adam(model.parameters(), lr=LR_PHASE2)

    for epoch in range(NUM_EPOCHS_PHASE2):
        train_loss, train_acc = train_one_epoch(model, train_loader, optimizer, criterion, device)
        val_loss, val_acc = validate(model, val_loader, criterion, device)

        saved = ""
        if val_acc > best_val_acc:
            best_val_acc = val_acc
            torch.save(model.state_dict(), MODEL_SAVE_PATH)
            saved = "YES"

        print(f"Epoch [{epoch+1}/{NUM_EPOCHS_PHASE2}] "
              f"Train Loss: {train_loss:.4f} Acc: {train_acc:.2f}% | "
              f"Val Loss: {val_loss:.4f} Acc: {val_acc:.2f}%"
              + (f"  << Model Saved! Best: {best_val_acc:.2f}%" if saved else ""))

        history.append([epoch + 1, "Phase 2",
                        round(train_loss, 4), round(train_acc, 2),
                        round(val_loss, 4),   round(val_acc, 2), saved])

    # Save Results 
    csv_path  = os.path.join(RESULTS_DIR, "training_results.csv")
    plot_path = os.path.join(RESULTS_DIR, "training_plot.png")

    save_results_csv(history, csv_path)
    save_plot(history, plot_path)

    print("\n" + "="*60)
    print(f"Training Complete!")
    print(f"Best Val Accuracy : {best_val_acc:.2f}%")
    print(f"Model saved at    : {MODEL_SAVE_PATH}")
    print(f"CSV saved at      : {csv_path}")
    print(f"Plot saved at     : {plot_path}")
    print("="*60)


if __name__ == "__main__":
    train()