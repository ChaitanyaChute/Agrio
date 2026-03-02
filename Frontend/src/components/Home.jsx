import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const stepKeys = [1, 2, 3, 4];

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto min-h-[80vh] flex flex-col justify-between py-6">
      <div className="flex justify-center w-full ">
        <div className="bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl
                        rounded-[35px] px-8 py-8 sm:py-10 
                        text-center w-full max-w-[700px] 
                        text-white hover:bg-white/25 transition-all duration-300">
          
          <h1 className="text-3xl text-green-800 sm:text-5xl font-normal mb-2 drop-shadow-md tracking-wide">
            {t("home.welcome")}
          </h1>
          
          <p className="text-sm text-green-800 sm:text-lg font-medium opacity-95 tracking-wide drop-shadow-sm">
            {t("home.subtitle")}
          </p>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-4">
        {stepKeys.map((key) => (
          <div 
            key={key} 
            className="group relative bg-[#f0fdf4]/40 backdrop-blur-lg border border-white/50 
                       shadow-[0_4px_30px_rgba(0,0,0,0.03)]
                       rounded-[25px] p-6 flex flex-col items-center text-center 
                       cursor-pointer transition-all duration-300 
                       hover:-translate-y-2 hover:bg-[#f0fdf4]/60 hover:shadow-lg"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2e7d32] 
                            text-white text-base sm:text-lg font-bold flex items-center justify-center 
                            mb-4 shadow-md shadow-green-900/20 
                            group-hover:scale-110 transition-transform duration-300">
              {key}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-[#1b4332] mb-2">
              {t(`home.step${key}`)}
            </h3>

            <p className="text-xs sm:text-sm text-[#1b4332]/80 leading-relaxed font-medium">
              {t(`home.desc${key}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;