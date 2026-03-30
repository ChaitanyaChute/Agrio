import cv2
import numpy as np


# ─────────────────────────────
# 1. INFECTED AREA
# ─────────────────────────────
def get_infected_area(image):
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    lower_green = np.array([25, 40, 40])
    upper_green = np.array([90, 255, 255])
    green_mask = cv2.inRange(hsv, lower_green, upper_green)

    lower_brown = np.array([5, 40, 30])
    upper_brown = np.array([25, 255, 200])
    brown_mask = cv2.inRange(hsv, lower_brown, upper_brown)

    lower_yellow = np.array([20, 80, 100])
    upper_yellow = np.array([35, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

    lower_dark = np.array([0, 0, 0])
    upper_dark = np.array([180, 255, 60])
    dark_mask = cv2.inRange(hsv, lower_dark, upper_dark)

    infected_mask = cv2.bitwise_or(brown_mask, yellow_mask)
    infected_mask = cv2.bitwise_or(infected_mask, dark_mask)

    leaf_mask = cv2.bitwise_or(green_mask, infected_mask)

    kernel = np.ones((3, 3), np.uint8)
    infected_mask = cv2.morphologyEx(infected_mask, cv2.MORPH_OPEN, kernel)
    infected_mask = cv2.morphologyEx(infected_mask, cv2.MORPH_CLOSE, kernel)
    leaf_mask = cv2.morphologyEx(leaf_mask, cv2.MORPH_OPEN, kernel)

    infected_pixels = cv2.countNonZero(infected_mask)
    leaf_pixels = cv2.countNonZero(leaf_mask)

    if leaf_pixels == 0:
        return 0.0

    return (infected_pixels / leaf_pixels) * 100


# ─────────────────────────────
# 2. COLOR INTENSITY
# ─────────────────────────────
def get_color_intensity(image):
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    return np.mean(hsv[:, :, 2]) / 255.0


# ─────────────────────────────
# 3. SHAPE FEATURE
# ─────────────────────────────
def get_shape_feature(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if not contours:
        return 1

    cnt = max(contours, key=cv2.contourArea)

    area = cv2.contourArea(cnt)
    perimeter = cv2.arcLength(cnt, True)

    if perimeter == 0:
        return 1

    circularity = (4 * np.pi * area) / (perimeter ** 2)

    return circularity


# ─────────────────────────────
# 4. WEIGHTED SCORE
# ─────────────────────────────
def calculate_score(area, color, shape, confidence):
    score = (
        0.4 * (area / 100) +
        0.2 * color +
        0.2 * (1 - shape) +
        0.2 * confidence
    )
    return score


# ─────────────────────────────
# 5. MAIN FUNCTION
# ─────────────────────────────
def calculate_severity(image_path: str, confidence: float = 0.8):

    image = cv2.imread(image_path)

    if image is None:
        return {
            "severity": "Unknown",
            "score": 0.0,
            "method": "error"
        }

    image = cv2.resize(image, (224, 224))

    # Features
    area = get_infected_area(image)
    color = get_color_intensity(image)
    shape = get_shape_feature(image)

    # Score
    score = calculate_score(area, color, shape, confidence)

    # Severity decision
    if score < 0.3:
        severity = "Low"
    elif score < 0.6:
        severity = "Moderate"
    else:
        severity = "High"

    return {
        "severity": severity,
        "infected_area_pct": round(area, 2),
        "color_intensity": round(color, 2),
        "shape_feature": round(shape, 2),
        "confidence": round(confidence, 2),
        "score": round(score, 2),
        "method": "hybrid_opencv"
    }


# ─────────────────────────────
# TEST
# ─────────────────────────────
if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python severity.py <image_path>")
    else:
        image_path = sys.argv[1]
        confidence = 0.85

        result = calculate_severity(image_path, confidence)

        print("\n========= RESULT =========")
        print(f"Severity            : {result['severity']}")
        print(f"Score               : {result['score']}")
        print(f"Method              : {result['method']}")

        print("\n--- Features Used ---")
        print(f"Infected Area (%)   : {result['infected_area_pct']}")
        print(f"Color Intensity     : {result['color_intensity']}")
        print(f"Shape Feature       : {result['shape_feature']}")
        print(f"Confidence          : {result['confidence']}")