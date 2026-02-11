import React from "react";

function Weather({ t }) {
  return (
    <section className="page">
      <h2>{t.weather || "Weather Updates ☁️"}</h2>
      <p>
        {t.weatherDesc ||
          "Real-time weather conditions to prevent crop diseases caused by humidity and rainfall."}
      </p>
    </section>
  );
}

export default Weather;
