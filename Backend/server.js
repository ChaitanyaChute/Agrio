require("dotenv").config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Disease = require("./models/Disease");

const app = express();

// CORS Configuration (env-driven)
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173,http://localhost:3000").split(",").map(o => o.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, origin);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MONGO_URI is not set. Please configure it in the environment.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("DB Connection Error:", err));

// 1. Get All Crops
app.get("/api/crops", async (req, res) => {
  try {
    const crops = await Disease.distinct("crop");
    const response = crops.map((c, i) => ({
      crop_id: `C00${i + 1}`,
      crop_name: c,
    }));
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Get All Diseases of a Crop
app.get("/api/:crop_name/disease", async (req, res) => {
  try {
    const cropName = req.params.crop_name;

    const diseases = await Disease.find({
      crop: { $regex: new RegExp(`^${cropName}$`, "i") },
    });

    if (!diseases.length)
      return res.status(404).json({ error: "Crop not found" });

    res.json({
      crop: cropName,
      diseases: diseases.map((d) => d.disease_name),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Get Specific Disease
app.get("/api/:crop_name/disease/:disease_name", async (req, res) => {
  try {
    const { crop_name, disease_name } = req.params;
    const disease = await Disease.findOne({
      crop: { $regex: new RegExp(`^${crop_name}$`, "i") },
      disease_name: { $regex: new RegExp(`^${disease_name}$`, "i") },
    });

    if (disease)
      res.json({ crop: disease.crop, disease: disease.disease_name });
    else res.status(404).json({ error: "Disease not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Get Disease Description & Severity
app.get(
  "/api/:crop_name/disease/:disease_name/description",
  async (req, res) => {
    try {
      const { crop_name, disease_name } = req.params;
      const data = await Disease.findOne({
        crop: { $regex: new RegExp(`^${crop_name}$`, "i") },
        disease_name: { $regex: new RegExp(`^${disease_name}$`, "i") },
      });

      if (data) {
        res.json({
          about_disease: data.description,
          symptoms: data.symptoms,
          cause: data.cause,
          severity: data.severity_default,
        });
      } else res.status(404).json({ error: "Not found" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
);

// 5. Get Disease Cure (Chemical & Organic Separate)
app.get("/api/:crop_name/disease/:disease_name/cure", async (req, res) => {
  try {
    const { crop_name, disease_name } = req.params;
    const data = await Disease.findOne({
      crop: { $regex: new RegExp(`^${crop_name}$`, "i") },
      disease_name: { $regex: new RegExp(`^${disease_name}$`, "i") },
    });

    if (data) {
      res.json({
        chemical: data.chemical_cure,
        organic: data.organic_cure,
        dosage: "As per instructions (approx 2g/L)",
        interval: "Every 7-10 days",
      });
    } else res.status(404).json({ error: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Get Nature of Disease
app.get("/api/:crop_name/disease/:disease_name/nature", async (req, res) => {
  try {
    const { crop_name, disease_name } = req.params;
    const data = await Disease.findOne({
      crop: { $regex: new RegExp(`^${crop_name}$`, "i") },
      disease_name: { $regex: new RegExp(`^${disease_name}$`, "i") },
    });

    if (data)
      res.json({ disease: data.disease_name, nature_of_disease: data.nature });
    else res.status(404).json({ error: "Not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Get Specific Severity of a Disease
app.get("/api/:crop_name/disease/:disease_name/severity", async (req, res) => {
  try {
    const { crop_name, disease_name } = req.params;

    const data = await Disease.findOne({
      crop: { $regex: new RegExp(`^${crop_name}$`, "i") },
      disease_name: { $regex: new RegExp(`^${disease_name}$`, "i") },
    });

    if (data) {
      res.json({
        crop: data.crop,
        disease: data.disease_name,
        severity: data.severity_default,
      });
    } else {
      res.status(404).json({ error: "Disease not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
