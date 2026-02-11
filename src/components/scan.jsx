import React, { useState } from "react";

function Scan({ t, common }) {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleDetect = () => {
    setResult({
      crop: t.corn?.name || "Corn",
      disease: "Leaf Curl Virus",
      severity: "Medium",
      prevention: common?.prevention || "Use recommended practices",
    });
  };

  return (
    <section className="scan-page">
      <h2>{t.steps?.s1Title || "Scan Leaf"}</h2>
      <p>{t.steps?.s1Desc || "Upload a clear image of the affected leaf."}</p>

      <div className="scan-card">
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {image && (
          <div className="preview">
            <img src={image} alt="Leaf Preview" />
          </div>
        )}

        <button onClick={handleDetect} disabled={!image}>
          {t.steps?.s2Title || "Detect Disease"}
        </button>
      </div>

      {result && (
        <div className="result-card">
          <h3>{t.steps?.s2Title || "Detection Result"}</h3>
          <p>
            <strong>Crop:</strong> {result.crop}
          </p>
          <p>
            <strong>Disease:</strong> {result.disease}
          </p>
          <p>
            <strong>{t.steps?.s3Title || "Severity"}:</strong> {result.severity}
          </p>
          <p>
            <strong>{common?.prevention || "Prevention"}:</strong>{" "}
            {result.prevention}
          </p>
        </div>
      )}
    </section>
  );
}

export default Scan;
