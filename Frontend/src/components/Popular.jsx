function Popular() {
  const diseaseData = [
    {
      title: "Blight",
      items: [
        "Corn: Northern Leaf Blight",
        "Grape: Leaf Blight",
        "Potato: Early Blight, Late Blight",
        "Rice: Bacterial Leaf Blight",
        "Tomato: Early Blight, Late Blight",
      ],
    },
    {
      title: "Rust",
      items: [
        "Apple: Cedar Apple Rust",
        "Bean: Rust",
        "Corn: Common Rust",
        "Wheat: Brown Rust, Yellow Rust",
      ],
    },
    {
      title: "Leaf Spot",
      items: [
        "Bean: Angular Leaf Spot",
        "Corn: Cercospora Leaf Spot",
        "Pepper: Bacterial Spot",
        "Rice: Brown Spot",
        "Tomato: Septoria Leaf Spot, Target Spot",
      ],
    },
    {
      title: "Rot",
      items: [
        "Apple: Black Rot",
        "Grape: Black Rot",
      ],
    },
    {
      title: "Virus",
      items: [
        "Cotton: Curl Virus",
        "Tomato: Mosaic Virus",
        "Tomato: Yellow Leaf Curl Virus",
      ],
    },
    {
      title: "Others",
      items: [
        "Apple: Apple Scab",
        "Rice: Leaf Smut",
        "Cotton: Fusarium Wilt",
        "Tomato: Spider Mites",
      ],
    },
  ];

  return (
    <section className="page px-6 py-8">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Popular Crop Diseases
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diseaseData.map((category, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-5 border border-green-100 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              {category.title}
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;