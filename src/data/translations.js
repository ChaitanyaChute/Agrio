export const translations = {
  en: {
    home: {
      welcome: "Welcome",
      subtitle: "Find crops, weather & disease info"
    },
    

    steps: {
      s1Title: "Upload Leaf Image",
      s1Desc: "Upload a clear image of the affected crop leaf.",
      s2Title: "Identify Disease",
      s2Desc: "AI analyzes the image and identifies the disease.",
      s3Title: "Check Severity",
      s3Desc: "Determine whether the disease is mild, moderate, or severe.",
      s4Title: "Treatment & Prevention",
      s4Desc: "Get suitable treatment and preventive measures."
    },

    crops: {
      corn: {
        name: "Corn / Maize",
        img: "corn.png",
        diseases: [
          { name: "Maize Streak Virus", cause: "Virus", signs: "Yellow streaks along veins", prevention: "Resistant varieties; no direct cure" },
          { name: "Gray Leaf Spot", cause: "Fungus", signs: "Rectangular grey lesions", prevention: "Crop rotation; fungicide spray" },
          { name: "Common Rust", cause: "Fungus", signs: "Reddish-brown powdery spots", prevention: "Early sowing; fungicides" }
        ]
      },

      potato: {
        name: "Potato",
        img: "potato.png",
        diseases: [
          { name: "Late Blight", cause: "Fungus-like pathogen", signs: "Dark water-soaked patches", prevention: "Certified seed; fungicides" },
          { name: "Early Blight", cause: "Fungus", signs: "Brown concentric rings", prevention: "Proper spacing; fungicides" },
          { name: "Potato Virus Y (PVY)", cause: "Virus", signs: "Mosaic and leaf curling", prevention: "Aphid control; no cure" }
        ]
      },

      tomato: {
        name: "Tomato",
        img: "tomato.png",
        diseases: [
          { name: "Tomato Yellow Leaf Curl Virus", cause: "Virus", signs: "Yellowing and upward curling", prevention: "Whitefly control; no cure" },
          { name: "Septoria Leaf Spot", cause: "Fungus", signs: "Small round dark-edged spots", prevention: "Remove infected leaves; fungicide" },
          { name: "Early Blight", cause: "Fungus", signs: "Target-like brown spots", prevention: "Crop rotation; fungicide" }
        ]
      },

      soyabean: {
        name: "Soyabean",
        img: "soyabean.png",
        diseases: [
          { name: "Soyabean Mosaic Virus", cause: "Virus", signs: "Yellow-green mosaic pattern", prevention: "Virus-free seeds; no cure" },
          { name: "Brown Spot", cause: "Fungus", signs: "Small brown spots on lower leaves", prevention: "Crop rotation; fungicide" },
          { name: "Frogeye Leaf Spot", cause: "Fungus", signs: "Grey center with dark border", prevention: "Resistant varieties; fungicide" }
        ]
      },

      cotton: {
        name: "Cotton",
        img: "cotton.png",
        diseases: [
          { name: "Cotton Leaf Curl Disease", cause: "Virus", signs: "Leaf curling and vein thickening", prevention: "Resistant varieties; no cure" },
          { name: "Alternaria Leaf Spot", cause: "Fungus", signs: "Brown concentric spots", prevention: "Field sanitation; fungicide" },
          { name: "Bacterial Blight", cause: "Bacteria", signs: "Angular water-soaked spots", prevention: "Clean seeds; copper spray" }
        ]
      },

      pepper: {
        name: "Pepper (Chilli / Capsicum)",
        img: "pepper.png",
        diseases: [
          { name: "Chilli Leaf Curl Virus", cause: "Virus", signs: "Severe curling and stunting", prevention: "Whitefly control; no cure" },
          { name: "Bacterial Leaf Spot", cause: "Bacteria", signs: "Dark spots with yellow halo", prevention: "Disease-free seeds; copper spray" },
          { name: "Cercospora Leaf Spot", cause: "Fungus", signs: "Grey spots with dark margins", prevention: "Fungicide spraying" }
        ]
      },

      apple: {
        name: "Apple",
        img: "Apple.jpg",
        diseases: [
          { name: "Apple Scab", cause: "Fungus", signs: "Dark velvety spots", prevention: "Orchard sanitation; fungicide" },
          { name: "Cedar Apple Rust", cause: "Fungus", signs: "Orange-yellow spots", prevention: "Remove host plants; fungicide" },
          { name: "Powdery Mildew", cause: "Fungus", signs: "White powdery growth", prevention: "Pruning; fungicide" }
        ]
      },

      banana: {
        name: "Banana",
        img: "Banana.jpg",
        diseases: [
          { name: "Black Sigatoka", cause: "Fungus", signs: "Black streaks and leaf drying", prevention: "Proper spacing; fungicide" },
          { name: "Banana Bunchy Top Virus", cause: "Virus", signs: "Upright clustered leaves", prevention: "Remove infected plants; no cure" },
          { name: "Yellow Sigatoka", cause: "Fungus", signs: "Yellow streaks on leaves", prevention: "Fungicide spraying" }
        ]
      },

      bean: {
        name: "Bean",
        img: "bean.jpg",
        diseases: [
          { name: "Bean Common Mosaic Virus", cause: "Virus", signs: "Mosaic pattern and curling", prevention: "Virus-free seeds; no cure" },
          { name: "Angular Leaf Spot", cause: "Fungus", signs: "Brown angular spots", prevention: "Crop rotation; fungicide" },
          { name: "Halo Blight", cause: "Bacteria", signs: "Brown spots with yellow halo", prevention: "Clean seeds; copper spray" }
        ]
      },

      grape: {
        name: "Grape",
        img: "Grapes.jpg",
        diseases: [
          { name: "Downy Mildew", cause: "Fungus", signs: "Yellow oil-like spots", prevention: "Good airflow; fungicide" },
          { name: "Powdery Mildew", cause: "Fungus", signs: "White powdery coating", prevention: "Sulfur spray" },
          { name: "Anthracnose", cause: "Fungus", signs: "Dark sunken lesions", prevention: "Fungicide spray" }
        ]
      },

      rice: {
        name: "Rice",
        img: "Rice.jpg",
        diseases: [
          { name: "Rice Leaf Blast", cause: "Fungus", signs: "Diamond-shaped lesions", prevention: "Balanced fertilizer; fungicide" },
          { name: "Bacterial Leaf Blight", cause: "Bacteria", signs: "Yellowing from leaf tip", prevention: "Resistant varieties" },
          { name: "Sheath Blight", cause: "Fungus", signs: "Oval grey-green lesions", prevention: "Fungicide spraying" }
        ]
      },

      wheat: {
        name: "Wheat",
        img: "Wheat.jpg",
        diseases: [
          { name: "Stripe Rust (Yellow Rust)", cause: "Fungus", signs: "Yellow stripes", prevention: "Resistant seeds; fungicide" },
          { name: "Leaf Rust", cause: "Fungus", signs: "Orange-brown pustules", prevention: "Early sowing; fungicide" },
          { name: "Powdery Mildew", cause: "Fungus", signs: "White powder on leaves", prevention: "Fungicide spray" }
        ]
      }
    }
  },

  hi: {
    home: {
      welcome: "स्वागत है",
      subtitle: "फसल, मौसम और रोग की जानकारी पाएं"
    },
    

    steps: {
      s1Title: "पत्ते की छवि अपलोड करें",
      s1Desc: "प्रभावित फसल के पत्ते की स्पष्ट तस्वीर अपलोड करें।",
      s2Title: "रोग पहचानें",
      s2Desc: "AI छवि का विश्लेषण करके रोग पहचानता है।",
      s3Title: "गंभीरता जांचें",
      s3Desc: "जानें कि रोग हल्का, मध्यम या गंभीर है।",
      s4Title: "उपचार और रोकथाम",
      s4Desc: "उपयुक्त उपचार और रोकथाम के उपाय पाएं।"
    },

    crops: {
      corn: {
        name: "मक्का",
        img: "corn.png",
        diseases: [
          { name: "मक्का स्ट्रीक वायरस", cause: "वायरस", signs: "नसों के साथ पीली धारियाँ", prevention: "प्रतिरोधी किस्में; कोई सीधे उपचार नहीं" },
          { name: "ग्रे लीफ स्पॉट", cause: "फंगस", signs: "आयताकार ग्रे धब्बे", prevention: "फसल चक्र; फफूंदनाशक छिड़काव" },
          { name: "कॉमन रस्ट", cause: "फंगस", signs: "लाल भूरी पाउडरी धब्बे", prevention: "जल्दी बुवाई; फफूंदनाशक" }
        ]
      },

      potato: {
        name: "आलू",
        img: "potato.png",
        diseases: [
          { name: "लेट ब्लाइट", cause: "फंगस जैसे रोगजनक", signs: "गहरे पानी जैसे धब्बे", prevention: "सत्यापित बीज; फफूंदनाशक" },
          { name: "अर्ली ब्लाइट", cause: "फंगस", signs: "भूरे सममित घेरों वाले धब्बे", prevention: "सही दूरी; फफूंदनाशक" },
          { name: "पोटैटो वायरस Y (PVY)", cause: "वायरस", signs: "मोज़ेक और पत्तियों का मुड़ना", prevention: "एफिड नियंत्रण; कोई उपचार नहीं" }
        ]
      },

      tomato: {
        name: "टमाटर",
        img: "tomato.png",
        diseases: [
          { name: "टमाटर पीला पत्ती कर्ल वायरस", cause: "वायरस", signs: "पत्तियाँ पीली होकर ऊपर की ओर मुड़ जाती हैं", prevention: "सफेद मक्खी नियंत्रण; कोई उपचार नहीं" },
          { name: "सेप्टोरिया लीफ स्पॉट", cause: "फंगस", signs: "छोटे गोल अंधेरे किनारे वाले धब्बे", prevention: "संक्रमित पत्तियों को हटाएं; फफूंदनाशक" },
          { name: "अर्ली ब्लाइट", cause: "फंगस", signs: "लक्ष्य जैसी भूरी धब्बे", prevention: "फसल चक्र; फफूंदनाशक" }
        ]
      },

      soyabean: {
        name: "सोयाबीन",
        img: "soyabean.png",
        diseases: [
          { name: "सोयाबीन मोज़ेक वायरस", cause: "वायरस", signs: "पीली-हरी मोज़ेक पैटर्न", prevention: "वायरस मुक्त बीज; कोई उपचार नहीं" },
          { name: "ब्राउन स्पॉट", cause: "फंगस", signs: "नीचे की पत्तियों पर छोटे भूरे धब्बे", prevention: "फसल चक्र; फफूंदनाशक" },
          { name: "फ्रोज़आई लीफ स्पॉट", cause: "फंगस", signs: "धब्बे के बीच में ग्रे और किनारों में काला", prevention: "प्रतिरोधी किस्में; फफूंदनाशक" }
        ]
      },

      cotton: {
        name: "कपास",
        img: "cotton.png",
        diseases: [
          { name: "कपास लीफ कर्ल रोग", cause: "वायरस", signs: "पत्तियाँ मुड़ जाती हैं और नसें मोटी हो जाती हैं", prevention: "प्रतिरोधी किस्में; कोई उपचार नहीं" },
          { name: "अल्टरनेरिया लीफ स्पॉट", cause: "फंगस", signs: "भूरे सममित धब्बे", prevention: "क्षेत्रीय स्वच्छता; फफूंदनाशक" },
          { name: "बैक्टीरियल ब्लाइट", cause: "बैक्टीरिया", signs: "कोणीय पानी जैसे धब्बे", prevention: "स्वच्छ बीज; तांबे का छिड़काव" }
        ]
      },

      pepper: {
        name: "मिर्च",
        img: "pepper.png",
        diseases: [
          { name: "चिल्ली लीफ कर्ल वायरस", cause: "वायरस", signs: "भयंकर मुड़ना और विकास में रुकावट", prevention: "सफेद मक्खी नियंत्रण; कोई उपचार नहीं" },
          { name: "बैक्टीरियल लीफ स्पॉट", cause: "बैक्टीरिया", signs: "पीली हाइलो के साथ काले धब्बे", prevention: "रोग मुक्त बीज; तांबे का छिड़काव" },
          { name: "सर्कोस्पोरा लीफ स्पॉट", cause: "फंगस", signs: "काले किनारों के साथ ग्रे धब्बे", prevention: "फफूंदनाशक छिड़काव" }
        ]
      },

      apple: {
        name: "सेब",
        img: "Apple.jpg",
        diseases: [
          { name: "एप्पल स्कैब", cause: "फंगस", signs: "गहरे रेशमी धब्बे", prevention: "बाग स्वच्छता; फफूंदनाशक" },
          { name: "सीडर एप्पल रस्ट", cause: "फंगस", signs: "संतरी-पीले धब्बे", prevention: "मेजबान पौधों को हटाएं; फफूंदनाशक" },
          { name: "पाउडरी मिल्ड्यू", cause: "फंगस", signs: "सफेद पाउडरी वृद्धि", prevention: "छंटाई; फफूंदनाशक" }
        ]
      },

      banana: {
        name: "केला",
        img: "Banana.jpg",
        diseases: [
          { name: "ब्लैक सिगातोका", cause: "फंगस", signs: "काले धब्बे और पत्तियों का सूखना", prevention: "सही दूरी; फफूंदनाशक" },
          { name: "बनाना बंची टॉप वायरस", cause: "वायरस", signs: "सपाट पत्तियाँ उभरी हुई", prevention: "संक्रमित पौधों को हटाएं; कोई उपचार नहीं" },
          { name: "येलो सिगातोका", cause: "फंगस", signs: "पत्तियों पर पीली धारियाँ", prevention: "फफूंदनाशक छिड़काव" }
        ]
      },

      bean: {
        name: "फली",
        img: "bean.jpg",
        diseases: [
          { name: "फली कॉमन मोज़ेक वायरस", cause: "वायरस", signs: "मोज़ेक पैटर्न और मुड़ना", prevention: "वायरस मुक्त बीज; कोई उपचार नहीं" },
          { name: "एंगुलर लीफ स्पॉट", cause: "फंगस", signs: "भूरे कोणीय धब्बे", prevention: "फसल चक्र; फफूंदनाशक" },
          { name: "हैलो ब्लाइट", cause: "बैक्टीरिया", signs: "पीली हाइलो के साथ भूरे धब्बे", prevention: "स्वच्छ बीज; तांबे का छिड़काव" }
        ]
      },

      grape: {
        name: "अंगूर",
        img: "Grapes.jpg",
        diseases: [
          { name: "डाउन माइएल्ड्यू", cause: "फंगस", signs: "पीली तेल जैसी धब्बे", prevention: "अच्छा वेंटिलेशन; फफूंदनाशक" },
          { name: "पाउडरी मिल्ड्यू", cause: "फंगस", signs: "सफेद पाउडरी परत", prevention: "सल्फर स्प्रे" },
          { name: "एंथ्रैक्नोज़", cause: "फंगस", signs: "गहरे धँसे हुए धब्बे", prevention: "फफूंदनाशक छिड़काव" }
        ]
      },

      rice: {
        name: "धान",
        img: "Rice.jpg",
        diseases: [
          { name: "धान लीफ ब्लास्ट", cause: "फंगस", signs: "हीरे जैसे धब्बे", prevention: "संतुलित उर्वरक; फफूंदनाशक" },
          { name: "बैक्टीरियल लीफ ब्लाइट", cause: "बैक्टीरिया", signs: "पत्ती की नोक से पीला होना", prevention: "प्रतिरोधी किस्में" },
          { name: "शीथ ब्लाइट", cause: "फंगस", signs: "अंडाकार ग्रे-हरी धब्बे", prevention: "फफूंदनाशक छिड़काव" }
        ]
      },

      wheat: {
        name: "गेहूं",
        img: "Wheat.jpg",
        diseases: [
          { name: "स्ट्राइप रस्ट (येलो रस्ट)", cause: "फंगस", signs: "पीली धारियाँ", prevention: "प्रतिरोधी बीज; फफूंदनाशक" },
          { name: "लीफ रस्ट", cause: "फंगस", signs: "नारंगी-भूरे धब्बे", prevention: "जल्दी बुवाई; फफूंदनाशक" },
          { name: "पाउडरी मिल्ड्यू", cause: "फंगस", signs: "पत्तियों पर सफेद पाउडर", prevention: "फफूंदनाशक छिड़काव" }
        ]
      }
    }
  }
};
