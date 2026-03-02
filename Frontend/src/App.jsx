import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Home from "./components/Home";
import Crops from "./components/Crops";
import Weather from "./components/Weather";
import Popular from "./components/Popular";
import Scan from "./components/scan";
import CropDetails from "./components/CropDetails";

function App() {
  const { i18n } = useTranslation();
  
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "home";
  });

  const [selectedCropKey, setSelectedCropKey] = useState(null);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const renderTab = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "crops":
        return (
          <Crops
            openCrop={(cropKey) => {
              setSelectedCropKey(cropKey);
              setActiveTab("cropDetails");
            }}
          />
        );
      case "cropDetails":
        return (
          <CropDetails
            cropKey={selectedCropKey}
            goBack={() => setActiveTab("crops")}
          />
        );
      case "weather":
        return <Weather />;
      case "popular":
        return <Popular />;
      case "scan":
        return <Scan />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen text-black font-['Poppins'] overflow-x-hidden">
      
      <div className="fixed inset-0 z-[-1] bg-[#f4fff6]">
        <img
          src="/Homepage-Banner.png"
          alt="Background"
          className="w-full h-full object-cover object-[46%_center] md:object-center"
        />
      </div>

      <div className="fixed inset-0 z-[-1] bg-white/35"></div>

      <div className="fixed inset-0 z-[-1] bg-gradient-to-b from-white/15 to-black/5 pointer-events-none"></div>

      <div className="relative z-10">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          lang={i18n.language}
          setLang={changeLanguage}
        />
        <div className="flex justify-center w-full">
          {renderTab()}
        </div>
      </div>
    </div>
  );
}

export default App;