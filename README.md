# AGRIO - AI-Powered Crop Disease Detection 

AGRIO is an intelligent farming assistant that uses machine learning to detect crop diseases from leaf images and provides comprehensive treatment recommendations. The system combines image analysis, disease database management, and weather integration to help farmers make informed decisions.

## Features

- **Image-Based Disease Detection** — AI-powered leaf disease classification with 98.5% accuracy
- **Multi-Crop Support** — 12 major crops with 45 disease types covered
- **Smart Treatment Recommendations** — Chemical and organic cure options with dosages and intervals
- **Detailed Disease Information** — Symptoms, causes, nature, and severity assessment
- **Bilingual Interface** — English and Hindi language support
- **Responsive Design** — Works seamlessly on desktop and mobile devices
- **Weather Integration** — Real-time weather information for farming insights

## Tech Stack

| Component | Technology |
|-----------|-----------|
| **Backend API** | Node.js, Express 5.2, Mongoose 9.2 |
| **Database** | MongoDB |
| **Frontend** | React 19, Vite 7.2, Tailwind CSS 4.2 |
| **ML Model** |  MobileNetV3 Large, FastAPI |


## Project Structure

```
├── Backend/              # REST API (Node.js/Express)
│   ├── server.js         # API routes & MongoDB connection
│   ├── models/           # Mongoose schemas
│   ├── data.js           # Disease database
│   └── package.json
│
├── Frontend/             # Web Application (React/Vite)
│   ├── src/
│   │   ├── App.jsx       # Main app routing
│   │   ├── components/   # UI components (Scan, Crops, etc.)
│   │   ├── data/         # Crop & disease data
│   │   └── locales/      # i18n translations
│   └── package.json
│
└── model/                # ML Model (PyTorch)
    ├── main.py           # FastAPI inference server
    ├── src/
    │   ├── model.py      # MobileNetV3 architecture
    │   ├── predict.py    # Image inference
    │   ├── train.py      # Training script
    │   └── config.py     # Hyperparameters
    └── models/           # Trained weights (.pth)
```

## Setup Instructions

### Prerequisites
- Node.js 16+
- Python 3.8+
- MongoDB 
- Git

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the server:
```bash
npm node server.js
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

Access the app at `http://localhost:5173`

### ML Model Setup

```bash
cd model
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt

```

The FastAPI server runs on `http://localhost:8000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/crops` | Get all available crops |
| GET | `/api/:crop_name/disease` | Get diseases for a crop |
| GET | `/api/:crop_name/disease/:disease_name` | Get specific disease |
| GET | `/api/:crop_name/disease/:disease_name/description` | Get disease details & severity |
| GET | `/api/:crop_name/disease/:disease_name/cure` | Get treatment options |
| GET | `/api/:crop_name/disease/:disease_name/nature` | Get disease nature |
| GET | `/api/:crop_name/disease/:disease_name/severity` | Get severity information |

## Supported Crops

Apple, Banana, Bean, Corn, Cotton, Grape, Pepper, Potato, Rice, Soybean, Tomato, Wheat

## ML Model Performance

- **Model:** MobileNetV3 Large (ImageNet pretrained)
- **Input:** 224×224 RGB images
- **Output:** 45 disease classes
- **Validation Accuracy:** 98.5%
- **Training Approach:** Two-phase fine-tuning

## How It Works

1. **Upload** — Farmer uploads a leaf image via the web app
2. **Detect** — ML model predicts disease from the image
3. **Analyze** — Backend fetches disease details from MongoDB
4. **Recommend** — App displays symptoms, causes, and treatment options
5. **Cure** — Farmer receives chemical and organic treatment recommendations
