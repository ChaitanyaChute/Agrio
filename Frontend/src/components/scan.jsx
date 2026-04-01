import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600/70 mb-4 transition-transform duration-300 group-hover:-translate-y-1">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

const WaitingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#1b4332]/20 mb-4">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const ScanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const PillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

// ── Not a leaf UI ──
const NotALeafCard = () => (
  <div className="w-full h-auto rounded-[30px] bg-white/60 backdrop-blur-xl border border-orange-200 shadow-xl p-6 flex flex-col items-center text-center animate-fade-in">
    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </div>
    <h3 className="text-xl font-extrabold text-orange-600 mb-2">Not a Leaf Image</h3>
    <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[260px]">
      The uploaded image does not appear to be a plant leaf. Please upload a clear, close-up photo of a leaf for accurate disease detection.
    </p>
    <div className="mt-5 bg-orange-50 border border-orange-100 rounded-2xl px-5 py-3 text-left w-full">
      <p className="text-[10px] uppercase font-extrabold text-orange-700 mb-2">Tips for better results</p>
      <ul className="space-y-1">
        <li className="text-xs text-orange-800 font-medium">• Use a close-up photo of a single leaf</li>
        <li className="text-xs text-orange-800 font-medium">• Make sure the leaf is clearly visible</li>
        <li className="text-xs text-orange-800 font-medium">• Avoid background clutter or other objects</li>
        <li className="text-xs text-orange-800 font-medium">• Good lighting gives better accuracy</li>
      </ul>
    </div>
  </div>
);

// ── Severity badge helper ──
const getSeverityStyle = (severity) => {
  switch (severity) {
    case "High":     return "bg-red-100 text-red-700 border border-red-200";
    case "Moderate": return "bg-yellow-100 text-yellow-700 border border-yellow-200";
    case "None":     return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    default:         return "bg-green-100 text-green-700 border border-green-200";
  }
};

const getSeverityLabel = (severity, infected_pct) => {
  if (severity === "None") return "Healthy — No Treatment Needed";
  if (infected_pct !== null && infected_pct !== undefined) {
    return `${severity} (${infected_pct}% infected)`;
  }
  return severity;
};

const isHealthy = (severity, name) =>
  severity === "None" || name === "Healthy";

function Scan() {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [notALeaf, setNotALeaf] = useState(false); // ← NEW
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (!file.type.match("image.*")) return;
    setImage(URL.createObjectURL(file));
    setImageFile(file);
    setResult(null);
    setNotALeaf(false); // ← reset on new image
  };

  const handleIdentify = async () => {
    if (!image || !imageFile) return;
    setLoading(true);
    setResult(null);
    setNotALeaf(false);

    try {
      const formData = new FormData();
      formData.append("file", imageFile);

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      // ── Handle not-a-leaf (422) ──
      if (response.status === 422) {
        const errData = await response.json();
        if (errData?.detail?.error === "not_a_leaf") {
          setNotALeaf(true);
          return;
        }
      }

      if (!response.ok) throw new Error("API call failed");

      const data = await response.json();

      setResult({
        name:         data.disease,
        crop:         data.crop,
        conf:         data.confidence,
        severity:     data.severity,
        infected_pct: data.infected_area_pct,
        chemical:     data.chemical_cure,
        organic:      data.organic_cure,
        description:  data.description,
        symptoms:     data.symptoms,
        cause:        data.cause,
      });
    } catch (err) {
      console.error("Error:", err);
      alert("Kuch error aaya! FastAPI aur Node server check karo.");
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImageFile(null);
    setResult(null);
    setNotALeaf(false); // ← reset on remove
  };

  return (
    <section className="w-[95%] max-w-[1000px] mx-auto mt-8 mb-20 font-['Poppins']">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#113022] mb-2">{t("scan.title")}</h2>
        <p className="text-[#1b4332]/70 font-medium text-sm sm:text-base">{t("scan.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* Left — Upload Box */}
        <div
          className={`group relative min-h-[400px] rounded-[30px] border-[3px] border-dashed border-[#1b4332]/20 bg-[#f8fcf8]/50 hover:border-green-500 hover:bg-white/60 cursor-pointer overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300
            ${dragActive ? "border-green-600 bg-green-50" : ""}
            ${image ? "border-none bg-transparent" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => !image && inputRef.current.click()}
        >
          <input ref={inputRef} type="file" className="hidden" accept="image/*" onChange={handleChange} />

          {image ? (
            <div className="w-full h-full p-3 flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-[30px] border border-white/60 shadow-sm relative">
              <img src={image} alt="Preview" className="max-w-full max-h-[380px] object-contain rounded-2xl" />
              <button
                onClick={(e) => { e.stopPropagation(); removeImage(); }}
                className="absolute top-4 right-4 bg-white/90 hover:bg-red-50 text-gray-500 hover:text-red-500 p-2 rounded-full shadow-md transition-all z-10"
              >
                <XIcon />
              </button>
            </div>
          ) : (
            <div className="px-6 pointer-events-none">
              <div className="flex justify-center"><UploadIcon /></div>
              <h3 className="text-xl font-bold text-[#1b4332] mb-2">{t("scan.uploadTitle")}</h3>
              <p className="text-[#1b4332]/70 text-xs sm:text-sm mb-6 leading-relaxed max-w-[250px] mx-auto">{t("scan.uploadDesc")}</p>
              <span className="text-sm font-semibold text-green-700 bg-green-100 px-6 py-2.5 rounded-full pointer-events-auto hover:bg-green-200 transition-colors">{t("scan.browseBtn")}</span>
              <p className="text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-wide">{t("scan.supports")}</p>
            </div>
          )}
        </div>

        {/* Right — Result Card */}
        <div className={`rounded-[30px] transition-all duration-300 w-full ${!result && !notALeaf ? "min-h-[400px]" : "h-auto"}`}>

          {/* Not a leaf state */}
          {notALeaf ? (
            <NotALeafCard />

          /* Waiting state */
          ) : !result ? (
            <div className="w-full h-full min-h-[400px] rounded-[30px] border-[3px] border-dashed border-[#1b4332]/10 bg-[#f8fcf8]/30 flex flex-col items-center justify-center text-center text-[#1b4332]/40">
              <WaitingIcon />
              <p className="text-lg font-bold opacity-70 mb-1">{t("scan.waitingTitle")}</p>
              <p className="text-sm opacity-60 font-medium max-w-[200px]">{t("scan.waitingDesc")}</p>
            </div>

          /* Result state */
          ) : (
            <div className="w-full h-auto rounded-[30px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl p-6 flex flex-col items-start text-left animate-fade-in">

              {/* Header — Title + Confidence */}
              <div className="w-full flex justify-between items-start mb-4 border-b border-gray-100 pb-3">
                <h3 className="text-xl font-bold text-[#113022]">{t("scan.resultTitle")}</h3>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">{t("scan.confidence")}</span>
                  <span className="text-sm font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg border border-green-100">{result.conf}</span>
                </div>
              </div>

              {/* Disease Name + Crop */}
              <div className="mb-3 w-full">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">{t("scan.disease")}</p>
                <h4 className={`text-2xl sm:text-3xl font-extrabold leading-tight
                  ${isHealthy(result.severity, result.name) ? "text-emerald-600" : "text-[#c62828]"}`}>
                  {result.name}
                </h4>
                <p className="text-sm text-gray-400 font-medium mt-0.5">Crop: {result.crop}</p>
              </div>

              {/* Severity Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] uppercase font-bold text-gray-400">Severity:</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getSeverityStyle(result.severity)}`}>
                  {getSeverityLabel(result.severity, result.infected_pct)}
                </span>
              </div>

              {/* HEALTHY STATE */}
              {isHealthy(result.severity, result.name) ? (
                <div className="w-full mt-2 space-y-3">
                  {result.description && (
                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                      <p className="text-[10px] uppercase font-extrabold text-emerald-700 mb-1">Plant Status</p>
                      <p className="text-xs sm:text-sm font-medium text-emerald-900 leading-relaxed">{result.description}</p>
                    </div>
                  )}
                  <div className="bg-[#f0fdf4] p-4 rounded-xl border border-green-100 flex gap-3">
                    <div className="mt-0.5"><ShieldIcon /></div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-green-800 mb-1">Maintenance Tips</p>
                      <ul className="space-y-1">
                        {result.organic?.map((o, i) => (
                          <li key={i} className="text-xs sm:text-sm font-medium text-green-900">• {o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              ) : (
                /* DISEASED STATE */
                <div className="space-y-3 w-full overflow-y-auto pr-1 custom-scrollbar">
                  {result.description && (
                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                      <p className="text-[10px] uppercase font-extrabold text-gray-500 mb-1">About Disease</p>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">{result.description}</p>
                      {result.cause && (
                        <p className="text-[10px] text-gray-400 mt-1">Cause: {result.cause}</p>
                      )}
                    </div>
                  )}
                  <div className="bg-[#f0fdf4] p-3.5 rounded-xl border border-green-100 flex gap-3">
                    <div className="mt-0.5"><PillIcon /></div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-green-800 mb-1">Chemical Cure</p>
                      <ul className="space-y-0.5">
                        {result.chemical?.map((c, i) => (
                          <li key={i} className="text-xs sm:text-sm font-medium text-green-900">• {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[#eff6ff] p-3.5 rounded-xl border border-blue-100 flex gap-3">
                    <div className="mt-0.5"><ShieldIcon /></div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-blue-800 mb-1">Organic Cure</p>
                      <ul className="space-y-0.5">
                        {result.organic?.map((o, i) => (
                          <li key={i} className="text-xs sm:text-sm font-medium text-blue-900">• {o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scan Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleIdentify}
          disabled={!image || loading}
          className={`px-12 py-3.5 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300
            ${!image || loading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
              : "bg-[#2e7d32] text-white hover:bg-[#1b5e20] hover:shadow-green-900/20 hover:-translate-y-1 active:scale-95"}`}
        >
          {loading ? (
            <><div className="w-5 h-5 border-[2.5px] border-white border-t-transparent rounded-full animate-spin"></div> {t("scan.analyzing")}</>
          ) : (
            <><ScanIcon /> {t("scan.button")}</>
          )}
        </button>
      </div>
    </section>
  );
}

export default Scan;