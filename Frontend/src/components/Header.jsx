import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[#1b4332]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-[#1b4332]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function Header({ activeTab, setActiveTab, lang, setLang }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t("header.home") },
    { id: "crops", label: t("header.crops") },
    { id: "weather", label: t("header.weather") },
    { id: "popular", label: t("header.popular") },
    { id: "scan", label: t("header.scan") },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex justify-center relative z-50 pt-6">
        <div className="w-[90%] max-w-[1200px] flex flex-col items-center">
          <button
            className="md:hidden fixed top-6 left-6 z-50 bg-white p-2 rounded-full shadow-md border border-gray-100 active:scale-95 transition-all"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>

          <div className="fixed top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full z-50 font-semibold text-xs sm:text-sm shadow-md border border-white/40">
            <span
              className={`transition-colors duration-300 ${lang === "en" ? "text-green-800 font-bold" : "text-gray-600"}`}
            >
              EN
            </span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={lang === "hi"}
                onChange={(e) => setLang(e.target.checked ? "hi" : "en")}
              />
              <div
                className="w-10 h-5 sm:w-11 sm:h-6 bg-[#cdeecd] peer-focus:outline-none rounded-full peer 
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                              after:bg-[#2e7d32] after:border-gray-300 after:border after:rounded-full 
                              after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all 
                              peer-checked:after:translate-x-full peer-checked:after:border-white"
              ></div>
            </label>

            <span
              className={`transition-colors duration-300 ${lang === "hi" ? "text-green-800 font-bold" : "text-gray-600"}`}
            >
              HI
            </span>
          </div>

          <nav className="hidden md:flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 mt-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  relative cursor-pointer text-base sm:text-lg font-bold pb-1 transition-colors duration-300
                  ${activeTab === item.id ? "text-black" : "text-black/60 hover:text-green-800"}
                `}
              >
                {item.label}
                <span
                  className={`
                  absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-full h-[4px] rounded-full 
                  bg-gradient-to-r from-[#f1f136] to-[#69ec44] 
                  transition-transform duration-300 ease-out origin-center
                  ${activeTab === item.id ? "scale-x-100" : "scale-x-0"}
                `}
                ></span>
              </div>
            ))}
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] z-[70] bg-[#E9F5DB] shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-end p-6 pb-2">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 rounded-full active:bg-gray-100"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col gap-2 px-6 mt-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                px-5 py-4 rounded-2xl text-lg font-bold transition-all duration-300 cursor-pointer
                ${
                  activeTab === item.id
                    ? "bg-[#2e7d32] text-white shadow-lg shadow-green-900/20"
                    : "text-[#1b4332] hover:bg-green-50"
                }
              `}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
