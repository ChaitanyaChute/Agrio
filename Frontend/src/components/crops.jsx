import React from "react";
import { useTranslation } from "../../node_modules/react-i18next";
import { cropsList } from "../data/crops";

function Crops({ openCrop }) {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'hi' ? 'hi' : 'en';

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {cropsList.map((crop) => (
          <div
            key={crop.id}
            onClick={() => openCrop(crop.id)}
            className="group cursor-pointer flex flex-col items-center p-3 rounded-[20px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm h-full"
            style={{ backgroundColor: "rgba(167, 234, 186, 0.45)" }}
          >
            <div className="w-full h-[140px] bg-white rounded-[16px] flex items-center justify-center p-4 shadow-sm overflow-hidden">
              <img
                src={`/${crop.img}`}
                alt={crop.name[lang]}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex-grow flex items-center justify-center mt-3 mb-1">
              <h3 className="text-[15px] font-semibold text-[#1b4332] text-center leading-tight">
                {crop.name[lang]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crops;