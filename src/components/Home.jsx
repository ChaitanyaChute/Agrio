import React from "react";

function Home({  homeData, stepsData }) {
  return (
    <section className="home-page">
      <div className="hero">
        <h1>{homeData.welcome}</h1>
        <p>{homeData.subtitle}</p>

      </div>

      <div className="featured-cards">
  {stepsData &&
    Object.keys(stepsData)
      .filter(key => key.includes("Title"))
      .map((key, index) => (
        <div key={key} className="card step-card">
          <span className="step-number">{index + 1}</span>
          <h3>{stepsData[key]}</h3>
          <p>{stepsData[key.replace("Title", "Desc")]}</p>
        </div>
      ))}
</div>

    </section>
  );
}

export default Home;
