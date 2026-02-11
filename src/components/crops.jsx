function Crops({ t, openCrop }) {
  // t === crops object
  const cropsArray = Object.entries(t);

  return (
    <section className="crops-page">
      <div className="crops-grid">
        {cropsArray.map(([key, crop]) => (
          <div
            key={key}
            className="crop-card"
            onClick={() => openCrop(key)}
          >
            <img
              src={`/${crop.img}`}
              alt={crop.name}
            />
            <h3>{crop.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crops;
