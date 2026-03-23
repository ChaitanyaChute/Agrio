import os

DATASET_PATH = r"C:\Users\ketan\OneDrive\Desktop\crop-disease-detection\dataset"

classes = sorted(os.listdir(DATASET_PATH))
total = 0

print(f"{'Class Name':<45} {'Images':>8}")
print("-" * 55)

for cls in classes:
    cls_path = os.path.join(DATASET_PATH, cls)
    if os.path.isdir(cls_path):
        count = len([f for f in os.listdir(cls_path) 
                    if f.lower().endswith(('.jpg', '.jpeg', '.png'))])
        total += count
        print(f"{cls:<45} {count:>8}")

print("-" * 55)
print(f"{'TOTAL CLASSES':<45} {len(classes):>8}")
print(f"{'TOTAL IMAGES':<45} {total:>8}")