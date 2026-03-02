import React from "react";
import { useTranslation } from "react-i18next";
import { cropDiseases } from "../data/cropDiseases";
import { cropsList } from "../data/crops";

function CropDetails({ cropKey, goBack }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'hi' ? 'hi' : 'en';
  
  const diseases = cropDiseases[cropKey];
  
 
  const cropInfo = cropsList.find(c => c.id === cropKey);
  const cropName = cropInfo ? cropInfo.name[lang] : cropKey;

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto mt-6 mb-20">
      
      <div className="flex justify-start mb-6">
        <button 
          onClick={goBack}
          className="flex items-center gap-2.5 bg-[#2e7d32] hover:bg-[#1b5e20] text-white px-7 py-3 rounded-full font-bold text-sm shadow-md transition-all duration-300 hover:scale-105 hover:-translate-x-1"
        >
          <span className="text-lg">⬅</span> {t("cropDetails.back")}
        </button>
      </div>

      <h2 className="text-3xl sm:text-4xl text-center font-normal text-[#1b4332] mb-14 drop-shadow-sm tracking-wide">
        {cropName} {lang === 'hi' ? 'के रोग' : 'Diseases'}
      </h2>

      {diseases && diseases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map((disease, index) => (
            <div 
              key={index} 
              className="group bg-white/40 backdrop-blur-md border border-white/50 rounded-[25px] 
                         p-8 flex flex-col gap-3.5 h-full
                         shadow-[0_4px_25px_rgba(0,0,0,0.03)]
                         transition-all duration-300 ease-out 
                         hover:-translate-y-2 hover:bg-white/60 hover:shadow-xl 
                         hover:border-white/70 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-[#1a531f] mb-2 leading-snug group-hover:text-[#2e7d32] transition-colors">
                {disease.name[lang]}
              </h3>
              
              <p className="text-[#1b4332]/90 text-sm leading-relaxed">
                <strong className="font-bold text-[#000000]">{t("cropDetails.cause")}:</strong> {disease.cause[lang]}
              </p>
              
              <p className="text-[#1b4332]/90 text-sm leading-relaxed">
                <strong className="font-bold text-[#000000]">{t("cropDetails.signs")}:</strong> {disease.leafSigns[lang]}
              </p>
              
              {disease.prevention && (
                <p className="text-[#1b4332]/90 text-sm leading-relaxed">
                  <strong className="font-bold text-[#000000]">{t("cropDetails.prevention")}:</strong> {disease.prevention[lang]}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-[#1b4332] bg-white/40 p-10 rounded-[30px] font-medium border border-white/50">
          {t("cropDetails.nodata")}
        </div>
      )}
    </section>
  );
}

export default CropDetails;