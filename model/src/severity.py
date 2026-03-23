import cv2
import numpy as np


def calculate_severity(image_path: str) -> dict:
    """
    Image se infected area % nikalta hai OpenCV HSV masking se.
    Returns: severity level + infected area percentage
    """

    # Image load karo
    image = cv2.imread(image_path)

    if image is None:
        return {
            "severity": "Unknown",
            "infected_area_pct": 0.0,
            "method": "error"
        }

    # Resize — processing fast hogi
    image = cv2.resize(image, (224, 224))

    # BGR → HSV convert
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # ── Green mask (healthy area) ──
    # Healthy leaf = green color
    lower_green = np.array([25, 40, 40])
    upper_green = np.array([90, 255, 255])
    green_mask = cv2.inRange(hsv, lower_green, upper_green)

    # ── Infected mask ──
    # Disease = brown, yellow, dark spots

    # Brown / rust colored spots
    lower_brown = np.array([5, 40, 30])
    upper_brown = np.array([25, 255, 200])
    brown_mask = cv2.inRange(hsv, lower_brown, upper_brown)

    # Yellow infected areas
    lower_yellow = np.array([20, 80, 100])
    upper_yellow = np.array([35, 255, 255])
    yellow_mask = cv2.inRange(hsv, lower_yellow, upper_yellow)

    # Dark spots / necrotic area (very dark regions on leaf)
    lower_dark = np.array([0, 0, 0])
    upper_dark = np.array([180, 255, 60])
    dark_mask = cv2.inRange(hsv, lower_dark, upper_dark)

    # Sab infected masks combine karo
    infected_mask = cv2.bitwise_or(brown_mask, yellow_mask)
    infected_mask = cv2.bitwise_or(infected_mask, dark_mask)

    # Background remove karo — sirf leaf area consider karo
    # Green + infected = total leaf area
    leaf_mask = cv2.bitwise_or(green_mask, infected_mask)

    # Noise remove karo
    kernel = np.ones((3, 3), np.uint8)
    infected_mask = cv2.morphologyEx(infected_mask, cv2.MORPH_OPEN, kernel)
    infected_mask = cv2.morphologyEx(infected_mask, cv2.MORPH_CLOSE, kernel)
    leaf_mask = cv2.morphologyEx(leaf_mask, cv2.MORPH_OPEN, kernel)

    # Pixel count
    infected_pixels = cv2.countNonZero(infected_mask)
    leaf_pixels = cv2.countNonZero(leaf_mask)

    # Infected area % calculate
    if leaf_pixels == 0:
        infected_pct = 0.0
    else:
        infected_pct = (infected_pixels / leaf_pixels) * 100
        infected_pct = min(infected_pct, 100.0)  # cap at 100

    # Severity decide karo
    if infected_pct <= 30:
        severity = "Low"
    elif infected_pct <= 60:
        severity = "Moderate"
    else:
        severity = "High"

    return {
        "severity": severity,
        "infected_area_pct": round(infected_pct, 2),
        "method": "opencv_hsv"
    }


def get_severity_with_fallback(image_path: str, confidence: float, db_severity: str) -> str:
    """
    Hybrid approach:
    - Confidence >= 70% → OpenCV se severity
    - Confidence < 70%  → DB se severity_default (fallback)
    """

    if confidence < 70.0:
        # Low confidence — DB fallback use karo
        return {
            "severity": db_severity,
            "infected_area_pct": None,
            "method": "db_fallback"
        }

    # High confidence — OpenCV se calculate karo
    result = calculate_severity(image_path)
    return result


# Test karne ke liye
if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python -m src.severity <image_path>")
        print("Example: python -m src.severity test.JPG")
    else:
        image_path = sys.argv[1]
        result = calculate_severity(image_path)

        print(f"\nInfected Area : {result['infected_area_pct']}%")
        print(f"Severity      : {result['severity']}")
        print(f"Method        : {result['method']}")