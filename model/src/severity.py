import cv2
import numpy as np

# 1. LEAF SEGMENTATION 
def get_leaf_mask(image):
    """
    Use GrabCut to isolate the leaf from background.
    Returns a binary mask where 255 = leaf, 0 = background.
    """
    mask = np.zeros(image.shape[:2], np.uint8)
    bgd_model = np.zeros((1, 65), np.float64)
    fgd_model = np.zeros((1, 65), np.float64)

    h, w = image.shape[:2]
    margin = int(min(h, w) * 0.05)
    rect = (margin, margin, w - 2 * margin, h - 2 * margin)

    try:
        cv2.grabCut(image, mask, rect, bgd_model, fgd_model, 5, cv2.GC_INIT_WITH_RECT)
        leaf_mask = np.where((mask == 2) | (mask == 0), 0, 255).astype(np.uint8)
    except Exception:
        # Fallback — use HSV green-based mask 
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
        lower_green = np.array([25, 30, 30])
        upper_green = np.array([90, 255, 255])
        leaf_mask = cv2.inRange(hsv, lower_green, upper_green)

    # Morphological cleanup
    kernel = np.ones((5, 5), np.uint8)
    leaf_mask = cv2.morphologyEx(leaf_mask, cv2.MORPH_CLOSE, kernel)
    leaf_mask = cv2.morphologyEx(leaf_mask, cv2.MORPH_OPEN, kernel)

    # Keep only the largest contour (the leaf itself)
    contours, _ = cv2.findContours(leaf_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if contours:
        clean_mask = np.zeros_like(leaf_mask)
        largest = max(contours, key=cv2.contourArea)
        cv2.drawContours(clean_mask, [largest], -1, 255, thickness=cv2.FILLED)
        return clean_mask

    return leaf_mask



# 2. INFECTED AREA (within leaf only)
def get_infected_area(image, leaf_mask):
    """
    Calculate infected area % strictly within the leaf mask.
    Background is completely excluded.
    """
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Brown spots
    lower_brown = np.array([5, 40, 30])
    upper_brown = np.array([25, 255, 200])
    brown_mask = cv2.inRange(hsv, lower_brown, upper_brown)

    # Yellow patches
    lower_yellow = np.array([20, 80, 100])
    upper_yellow = np.array([35, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

    # Dark lesions (necrotic spots) — but ONLY inside the leaf
    lower_dark = np.array([0, 0, 0])
    upper_dark = np.array([180, 255, 55])
    dark_mask = cv2.inRange(hsv, lower_dark, upper_dark)

    # Combine infected indicators
    infected_mask = cv2.bitwise_or(brown_mask, yellow_mask)
    infected_mask = cv2.bitwise_or(infected_mask, dark_mask)

    # CRITICAL: restrict everything to leaf area only
    infected_mask = cv2.bitwise_and(infected_mask, infected_mask, mask=leaf_mask)

    # Morphological cleanup
    kernel = np.ones((3, 3), np.uint8)
    infected_mask = cv2.morphologyEx(infected_mask, cv2.MORPH_OPEN, kernel)
    infected_mask = cv2.morphologyEx(infected_mask, cv2.MORPH_CLOSE, kernel)

    infected_pixels = cv2.countNonZero(infected_mask)
    leaf_pixels = cv2.countNonZero(leaf_mask)

    if leaf_pixels == 0:
        return 0.0

    return (infected_pixels / leaf_pixels) * 100


# 3. COLOR INTENSITY (logging only)
def get_color_intensity(image, leaf_mask):
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    leaf_pixels = hsv[:, :, 2][leaf_mask == 255]
    if len(leaf_pixels) == 0:
        return 0.0
    return np.mean(leaf_pixels) / 255.0



# 4. SHAPE FEATURE (logging only)
def get_shape_feature(leaf_mask):
    contours, _ = cv2.findContours(leaf_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return 1.0
    cnt = max(contours, key=cv2.contourArea)
    area = cv2.contourArea(cnt)
    perimeter = cv2.arcLength(cnt, True)
    if perimeter == 0:
        return 1.0
    return (4 * np.pi * area) / (perimeter ** 2)



# 5. WEIGHTED SCORE (logging only)

def calculate_score(area, color, shape, confidence):
    score = (
        0.4 * (area / 100) +
        0.2 * color +
        0.2 * (1 - shape) +
        0.2 * confidence
    )
    return score



# 6. SEVERITY FROM AREA ONLY

def get_severity_from_area(area: float) -> str:
    """
    Infected area (within leaf only) is the SOLE decider of severity.
    """
    if area < 2.0:
        return "None"
    elif area < 15.0:
        return "Low"
    elif area < 40.0:
        return "Moderate"
    else:
        return "High"


# 7. MAIN FUNCTION
def calculate_severity(image_path: str, confidence: float = 0.8):

    image = cv2.imread(image_path)

    if image is None:
        return {
            "severity":          "Unknown",
            "infected_area_pct": 0.0,
            "score":             0.0,
            "method":            "error"
        }

    image = cv2.resize(image, (224, 224))

    # Step 1 — Segment leaf from background
    leaf_mask = get_leaf_mask(image)

    # Step 2 — Calculate features (all within leaf mask only)
    area  = get_infected_area(image, leaf_mask)
    color = get_color_intensity(image, leaf_mask)
    shape = get_shape_feature(leaf_mask)
    score = calculate_score(area, color, shape, confidence)

    # Step 3 — Severity from area only
    severity = get_severity_from_area(area)

    return {
        "severity":          severity,
        "infected_area_pct": round(area, 2),
        "color_intensity":   round(color, 2),
        "shape_feature":     round(shape, 2),
        "confidence":        round(confidence, 2),
        "score":             round(score, 2),
        "method":            "grabcut_area_primary"
    }



# TEST
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



# FALLBACK ENTRY POINT
def get_severity_with_fallback(image_path: str, confidence: float, db_severity: str) -> dict:
    if confidence < 70.0:
        return {
            "severity":          db_severity,
            "infected_area_pct": None,
            "method":            "db_fallback"
        }

    result = calculate_severity(image_path, confidence / 100.0)
    return result