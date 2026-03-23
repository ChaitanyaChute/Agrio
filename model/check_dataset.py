import os

dataset_path = "dataset"
classes = os.listdir(dataset_path)
print(f"Total classes: {len(classes)}")
print(sorted(classes))


