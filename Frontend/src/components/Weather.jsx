import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

const SunIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="14" fill="#FDB813" />
    <path d="M32 6V12M32 52V58M58 32H52M12 32H6M50.4 13.6L46.1 17.9M17.9 46.1L13.6 50.4M50.4 50.4L46.1 46.1M17.9 17.9L13.6 13.6" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const CloudIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 24C46 17.3726 40.6274 12 34 12C28.2865 12 23.5186 16.0339 22.3179 21.4243C16.8929 22.1856 12.5 26.6852 12.5 32.5C12.5 38.8513 17.6487 44 24 44H45C50.5228 44 55 39.5228 55 34C55 28.6946 50.8655 24.352 46 24Z" fill="#E5E7EB" />
  </svg>
);

const PartlyCloudyIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="42" cy="22" r="10" fill="#FDB813" />
    <path d="M38 30C38 25.5817 34.4183 22 30 22C26.1907 22 23.0112 24.6893 22.2106 28.2829C18.5939 28.7904 15.6667 31.7901 15.6667 35.6667C15.6667 39.9012 19.0988 43.3333 23.3333 43.3333H37.3333C41.0152 43.3333 44 40.3486 44 36.6667C44 33.1297 41.2437 30.2347 38 30Z" fill="#E5E7EB" />
  </svg>
);

const RainIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 24C46 17.3726 40.6274 12 34 12C28.2865 12 23.5186 16.0339 22.3179 21.4243C16.8929 22.1856 12.5 26.6852 12.5 32.5C12.5 38.8513 17.6487 44 24 44H45C50.5228 44 55 39.5228 55 34C55 28.6946 50.8655 24.352 46 24Z" fill="#9CA3AF" />
    <path d="M26 48L24 54M34 48L32 54M42 48L40 54" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

function Weather() {
  const { t, i18n } = useTranslation();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [locationName, setLocationName] = useState("Detecting...");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchLocationName = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&accept-language=${i18n.language}`);
      const data = await response.json();
      const place = data.address.hamlet || data.address.village || data.address.town || data.address.suburb || data.address.city || data.address.county || "My Farm";
      setLocationName(place);
      localStorage.setItem("weather_location", place);
    } catch (error) {
      setLocationName("Unknown Location");
    }
  };

  const fetchWeatherData = async (lat, lon) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=soil_temperature_0cm,soil_moisture_0_to_1cm&timezone=auto`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      localStorage.setItem("weather_cache", JSON.stringify(data));
      setLoading(false);
      setIsRefreshing(false);
    } catch (err) {
      setError("Failed to fetch weather.");
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleFetchAll = useCallback((isManual = false) => {
    if (isManual) setIsRefreshing(true);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationName(latitude, longitude);
          fetchWeatherData(latitude, longitude);
        },
        (err) => {
          setError("Location access denied.");
          setLoading(false);
          setIsRefreshing(false);
        }
      );
    } else {
      setError("GPS not supported.");
      setLoading(false);
    }
  }, [i18n.language]);

  useEffect(() => {
    const cachedData = localStorage.getItem("weather_cache");
    const cachedLoc = localStorage.getItem("weather_location");

    if (cachedData && cachedLoc) {
      setWeatherData(JSON.parse(cachedData));
      setLocationName(cachedLoc);
      setLoading(false);
    } else {
      handleFetchAll();
    }
  }, [handleFetchAll]);

  const getWeatherCondition = (code) => {
    if (code === 0) return t("weather.conditions.clear");
    if (code >= 1 && code <= 3) return t("weather.conditions.cloudy");
    if (code >= 45 && code <= 48) return t("weather.conditions.fog");
    if (code >= 51 && code <= 67) return t("weather.conditions.rain");
    if (code >= 71) return t("weather.conditions.rain");
    if (code >= 80 && code <= 99) return t("weather.conditions.storm");
    return t("weather.conditions.moderate");
  };

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    const enDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const hiDays = ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];
    return i18n.language === 'hi' ? hiDays[dayIndex] : enDays[dayIndex];
  };

  const getWeatherIcon = (code, className) => {
    if (code > 50) return <RainIcon className={className} />;
    if (code > 40) return <CloudIcon className={className} />; 
    if (code > 2) return <CloudIcon className={className} />;
    if (code > 0) return <PartlyCloudyIcon className={className} />;
    return <SunIcon className={className} />;
  };

  if (loading) return <div className="text-center py-20 text-xl font-bold text-green-700">Detecting Farm Location...</div>;
  if (error) return <div className="text-center py-20 text-xl font-bold text-red-500">{error}</div>;

  return (
    <section className="w-[90%] max-w-[1200px] mx-auto mt-6 mb-20">
      <div className="flex flex-col items-center mb-10 relative">
        <button 
          onClick={() => handleFetchAll(true)}
          disabled={isRefreshing}
          className="absolute right-0 top-0 bg-[#1b4332] text-white p-2 rounded-full shadow-md hover:bg-[#2d6a4f] transition-all disabled:opacity-50"
          title="Refresh Weather"
        >
          <svg className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        
        <h2 className="text-3xl sm:text-4xl font-normal text-[#1b4332] mb-2 drop-shadow-sm">
          {t("weather.title")}
        </h2>
        <p className="text-[#1b4332]/70 font-medium text-sm sm:text-base">
          {t("weather.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] rounded-[35px] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          
          <div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-bold opacity-100 flex items-center gap-1">{locationName}</p>
                <p className="text-sm opacity-70">{t("weather.today")}</p>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm animate-pulse">
                {t("weather.live")}
              </div>
            </div>
            
            <div className="flex flex-col items-center mt-10">
              {getWeatherIcon(weatherData.current.weather_code, "w-24 h-24 drop-shadow-lg")}
              <h1 className="text-7xl font-bold mt-4 tracking-tighter">
                {Math.round(weatherData.current.temperature_2m)}°
              </h1>
              <p className="text-xl font-medium opacity-90">
                {getWeatherCondition(weatherData.current.weather_code)}
              </p>
              <p className="text-sm opacity-70 mt-1">
                H: {Math.round(weatherData.daily.temperature_2m_max[0])}°  
                L: {Math.round(weatherData.daily.temperature_2m_min[0])}°
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-8">
            <div className="bg-black/20 rounded-2xl p-3 text-center backdrop-blur-sm">
              <p className="text-[10px] uppercase opacity-70 tracking-wider">{t("weather.wind")}</p>
              <p className="font-bold text-sm mt-1">{weatherData.current.wind_speed_10m} km/h</p>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 text-center backdrop-blur-sm">
              <p className="text-[10px] uppercase opacity-70 tracking-wider">{t("weather.humidity")}</p>
              <p className="font-bold text-sm mt-1">{weatherData.current.relative_humidity_2m}%</p>
            </div>
            <div className="bg-black/20 rounded-2xl p-3 text-center backdrop-blur-sm">
              <p className="text-[10px] uppercase opacity-70 tracking-wider">{t("weather.uv")}</p>
              <p className="font-bold text-xs mt-1">{weatherData.daily.precipitation_probability_max[0]}%</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[35px] p-8 shadow-sm flex flex-col gap-6">
          <h3 className="text-xl font-bold text-[#1b4332] flex items-center gap-2">
              {t("weather.agronomy")}
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium text-[#1b4332]">
                <span>{t("weather.soilMoisture")}</span>
                <span>{Math.round(weatherData.hourly.soil_moisture_0_to_1cm[12] * 100)}%</span> 
              </div>
              <div className="w-full bg-white h-3 rounded-full overflow-hidden shadow-inner border border-white/50">
                <div 
                  className="bg-blue-500 h-full rounded-full transition-all duration-1000" 
                  style={{ width: `${weatherData.hourly.soil_moisture_0_to_1cm[12] * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-[#1b4332]/60 mt-1">{t("weather.optimal")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-[#f1f8e9]/60 p-4 rounded-2xl border border-white/50">
                  <p className="text-xs text-[#1b4332]/70 font-bold mb-1 uppercase">{t("weather.soilTemp")}</p>
                  <p className="text-2xl font-bold text-[#2e7d32]">
                    {weatherData.hourly.soil_temperature_0cm[12]}°c
                  </p>
               </div>
               <div className="bg-[#e3f2fd]/60 p-4 rounded-2xl border border-white/50">
                  <p className="text-xs text-[#0d47a1]/70 font-bold mb-1 uppercase">{t("weather.spraying")}</p>
                  <p className="text-lg font-bold text-[#1565c0]">
                    {weatherData.current.wind_speed_10m < 15 ? t("weather.yes") : t("weather.no")}
                  </p>
               </div>
            </div>

            <div className="bg-[#fff9c4]/60 border border-[#fff59d] p-4 rounded-2xl flex gap-3 items-start">
               <p className="text-sm text-[#f57f17] font-medium leading-tight">
                 {t("weather.advice")}
               </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[35px] p-8 shadow-sm overflow-hidden">
          <h3 className="text-xl font-bold text-[#1b4332] mb-6 flex items-center gap-2">
              {t("weather.forecast")}
          </h3>
          
          <div className="flex flex-col gap-3">
            {weatherData.daily.time.slice(1, 6).map((time, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/50 transition-all cursor-default group">
                <span className="w-16 font-semibold text-[#1b4332] text-sm">
                  {getDayName(time)}
                </span>
                
                <div className="flex items-center gap-3 flex-1 justify-center">
                   {getWeatherIcon(weatherData.daily.weather_code[i+1], "w-8 h-8")}
                   <span className="text-xs text-[#1b4332]/70 hidden sm:block w-16 text-center">
                     {weatherData.daily.precipitation_probability_max[i+1]}%
                   </span>
                </div>

                <span className="w-10 text-right font-bold text-[#1b4332]">
                  {Math.round(weatherData.daily.temperature_2m_max[i+1])}°
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weather;