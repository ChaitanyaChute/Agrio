import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Crops from "./components/Crops";
import Weather from "./components/Weather";
import Popular from "./components/Popular";
import Scan from "./components/Scan";
import CropDetails from "./components/CropDetails"; 
import { translations } from "./data/translations";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [lang, setLang] = useState("en");
  const [selectedCrop, setSelectedCrop] = useState(null);


  const t = translations[lang] || translations.en;
const renderTab = () => {
  switch (activeTab) {
    case "home":
      return <Home homeData={t.home} stepsData={t.steps} />;

    case "crops":
      return (
        <Crops
          t={t.crops}
          openCrop={(cropKey) => {
            setSelectedCrop(cropKey);
            setActiveTab("cropDetails");
          }}
        />
      );

    case "cropDetails":
  return (
    <CropDetails
      crop={t.crops[selectedCrop]}
      goBack={() => setActiveTab("crops")}
    />
  );



    case "weather":
      return <Weather t={t} />;

    case "popular":
      return <Popular t={t} />;

    case "scan":
      return <Scan t={t} common={t.common} />;

    default:
      return <Home t={t.home} />;
  }
};

  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <div className="content">{renderTab()}</div>
    </div>
  );
}

export default App;
