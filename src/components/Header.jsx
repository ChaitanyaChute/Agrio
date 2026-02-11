import React from "react";

function Header({ activeTab, setActiveTab, lang, setLang, t }) {
  return (
    <header className="header">
      <div className="header-inner">

        {/* Top row: language toggle */}
        <div className="header-top">
          <div className="lang-toggle">
            <span>EN</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={lang === "hi"}
                onChange={(e) =>
                  setLang(e.target.checked ? "hi" : "en")
                }
              />
              <span className="slider"></span>
            </label>
            <span>HI</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          <div className="nav-tabs-inner">

            <div
              className={`nav-tab ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}

            >
              {t.home?.title || "Home"}
            </div>

            <div
              className={`nav-tab ${activeTab === "crops" ? "active" : ""}`}
              onClick={() => setActiveTab("crops")}
            >
              {t.crops ? "Crops" : "Crops"}
            </div>

            <div
              className={`nav-tab ${activeTab === "weather" ? "active" : ""}`}
              onClick={() => setActiveTab("weather")}
            >
              {t.weather || "Weather"}
            </div>

            <div
              className={`nav-tab ${activeTab === "popular" ? "active" : ""}`}
              onClick={() => setActiveTab("popular")}
            >
              {t.popular || "Popular"}
            </div>

            <div
              className={`nav-tab ${activeTab === "scan" ? "active" : ""}`}
              onClick={() => setActiveTab("scan")}
            >
              {t.scan || "Scan"}
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
