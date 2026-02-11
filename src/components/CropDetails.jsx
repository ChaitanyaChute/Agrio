import React from "react";

function CropDetails({ crop, goBack }) {

  if (!crop) {
    return <p>Loading...</p>;   // prevents crash
  }

  return (
    <section className="page">
      <button onClick={goBack}>⬅ Back</button>

      <h2>{crop.name} Diseases</h2>

      <div className="disease-grid">
        {crop.diseases.map((disease, index) => (
          <div key={index} className="disease-card">
            <h3>{disease.name}</h3>
            <p><strong>Cause:</strong> {disease.cause}</p>
            <p><strong>Signs:</strong> {disease.signs}</p>
            <p><strong>Prevention:</strong> {disease.prevention}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CropDetails;
