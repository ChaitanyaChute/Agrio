const diseaseData = [
  // 1. Apple Scab
  {
    id: "apple_scab",
    crop: "Apple",
    disease_name: "Apple Scab",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Captan 50 WP (2g)", "Spray Mancozeb (2.5g)"],
    organic_cure: ["Spray Neem Oil (5ml)", "Prune infected leaves"],
    description: "A fungal disease that causes dark, scabby spots on fruit and leaves.",
    symptoms: ["Olive-green spots on leaves", "Velvety spots on fruit", "Leaf drop"],
    cause: "Venturia inaequalis (Fungus)"
  },
  // 2. Apple Black Rot
  {
    id: "apple_rot",
    crop: "Apple",
    disease_name: "Black Rot",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Thiophanate Methyl (1g)"],
    organic_cure: ["Remove & Burn mummified fruits immediately"],
    description: "A fungal disease causing firm rot on fruit and cankers on branches.",
    symptoms: ["Purple spots on leaves", "Rotting black fruit", "Cankers on limbs"],
    cause: "Botryosphaeria obtusa (Fungus)"
  },
  // 3. Apple Cedar Rust
  {
    id: "apple_rust",
    crop: "Apple",
    disease_name: "Cedar Apple Rust",
    nature: "Low",
    severity_default: "Low",
    chemical_cure: ["Spray Myclobutanil (0.5ml)"],
    organic_cure: ["Remove nearby Juniper trees", "Spray Sulfur dust"],
    description: "A fungal disease that requires juniper trees to complete its life cycle.",
    symptoms: ["Yellow-orange spots on leaves", "Rust-colored horns on fruit"],
    cause: "Gymnosporangium juniperi-virginianae (Fungus)"
  },
  // 4. Apple Healthy
  {
    id: "apple_healthy",
    crop: "Apple",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Maintain NPK fertilizer", "Ensure drainage"],
    description: "The plant is healthy and free from diseases.",
    symptoms: ["Green leaves", "No spots or rot"],
    cause: "N/A"
  },
  // 5. Banana Sigatoka
  {
    id: "banana_siga",
    crop: "Banana",
    disease_name: "Sigatoka",
    nature: "High",
    severity_default: "Moderate",
    chemical_cure: ["Spray Propiconazole (1ml)"],
    organic_cure: ["Cut infected leaves", "Spray Panchagavya"],
    description: "A leaf spot disease that reduces photosynthesis and yield.",
    symptoms: ["Small pale spots", "Yellow/Brown streaks", "Premature ripening"],
    cause: "Mycosphaerella fijiensis (Fungus)"
  },
  // 6. Banana Panama Wilt
  {
    id: "banana_panama",
    crop: "Banana",
    disease_name: "Panama Wilt",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Soil drench Carbendazim (2g)"],
    organic_cure: ["Use Trichoderma in soil", "Crop rotation"],
    description: "A soil-borne fungal disease that attacks the roots and blocks water flow.",
    symptoms: ["Yellowing of older leaves", "Stem splitting", "Plant collapse"],
    cause: "Fusarium oxysporum (Fungus)"
  },
  // 7. Banana Healthy
  {
    id: "banana_healthy",
    crop: "Banana",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Use Banana peel compost"],
    description: "The plant is healthy and productive.",
    symptoms: ["Vibrant green leaves", "Strong stem"],
    cause: "N/A"
  },
  // 8. Bean Anthracnose
  {
    id: "bean_anth",
    crop: "Bean",
    disease_name: "Anthracnose",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Mancozeb (2.5g)"],
    organic_cure: ["Use hot-water treated seeds", "Neem Oil spray"],
    description: "A fungal disease affecting beans in cool, wet weather.",
    symptoms: ["Dark sunken spots on pods", "Reddish-brown spots on leaves"],
    cause: "Colletotrichum lindemuthianum (Fungus)"
  },
  // 9. Bean Rust
  {
    id: "bean_rust",
    crop: "Bean",
    disease_name: "Bean Rust",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Chlorothalonil (2g)"],
    organic_cure: ["Dust with Sulfur powder", "Remove debris"],
    description: "A fungal disease that causes rust-colored pustules on leaves.",
    symptoms: ["Rust-colored pustules", "Yellowing leaves", "Leaf drop"],
    cause: "Uromyces appendiculatus (Fungus)"
  },
  // 10. Bean Healthy
  {
    id: "bean_healthy",
    crop: "Bean",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Mulch soil to retain moisture"],
    description: "The bean plant is growing well.",
    symptoms: ["No spots on pods or leaves"],
    cause: "N/A"
  },
  // 11. Blueberry Healthy
  {
    id: "blueberry_healthy",
    crop: "Blueberry",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Maintain acidic soil (pH 4.5)", "Pine mulch"],
    description: "Healthy blueberry bush with no signs of disease.",
    symptoms: ["Green foliage", "Firm berries"],
    cause: "N/A"
  },
  // 12. Cherry Powdery Mildew
  {
    id: "cherry_mildew",
    crop: "Cherry",
    disease_name: "Powdery Mildew",
    nature: "Moderate",
    severity_default: "Low",
    chemical_cure: ["Spray Wettable Sulfur (2g)"],
    organic_cure: ["Spray Milk & Water mixture (1:9 ratio)"],
    description: "A fungal disease appearing as white powder on leaves.",
    symptoms: ["White powdery coating", "Curled leaves", "Stunted growth"],
    cause: "Podosphaera clandestina (Fungus)"
  },
  // 13. Cherry Healthy
  {
    id: "cherry_healthy",
    crop: "Cherry",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Prune branches for air circulation"],
    description: "Healthy cherry tree.",
    symptoms: ["Shiny leaves", "No mildew"],
    cause: "N/A"
  },
  // 14. Corn Cercospora Spot
  {
    id: "corn_spot",
    crop: "Corn",
    disease_name: "Cercospora Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Mancozeb (2.5g)"],
    organic_cure: ["Plow crop residue deep into soil"],
    description: "Also known as Gray Leaf Spot, causes rectangular lesions.",
    symptoms: ["Gray/Tan rectangular spots", "Leaf blight"],
    cause: "Cercospora zeae-maydis (Fungus)"
  },
  // 15. Corn Common Rust
  {
    id: "corn_rust",
    crop: "Corn",
    disease_name: "Common Rust",
    nature: "Low",
    severity_default: "Low",
    chemical_cure: ["Spray Zineb (2g)"],
    organic_cure: ["Usually no action needed", "Plant resistant seeds"],
    description: "A fungal disease common in cooler climates.",
    symptoms: ["Reddish-brown pustules on both leaf surfaces"],
    cause: "Puccinia sorghi (Fungus)"
  },
  // 16. Corn Northern Blight
  {
    id: "corn_north",
    crop: "Corn",
    disease_name: "Northern Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Propiconazole (1ml)"],
    organic_cure: ["Use resistant hybrid seeds"],
    description: "A serious disease causing cigar-shaped lesions.",
    symptoms: ["Long cigar-shaped grey lesions", "Leaves drying up"],
    cause: "Exserohilum turcicum (Fungus)"
  },
  // 17. Corn Healthy
  {
    id: "corn_healthy",
    crop: "Corn",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Apply Nitrogen (Urea) timely"],
    description: "The corn crop is healthy.",
    symptoms: ["Dark green leaves", "Strong stalk"],
    cause: "N/A"
  },
  // 18. Cotton Bacterial Blight
  {
    id: "cotton_bac",
    crop: "Cotton",
    disease_name: "Bacterial Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Mix Copper Oxychloride (2.5g) + Streptocycline"],
    organic_cure: ["Spray Cow Dung Slurry", "Prune infected parts"],
    description: "A bacterial disease causing angular spots and 'Black Arm'.",
    symptoms: ["Water-soaked angular spots", "Blackening of stems (Black Arm)", "Boll rot"],
    cause: "Xanthomonas citri pv. malvacearum (Bacteria)"
  },
  // 19. Cotton Leaf Curl Virus
  {
    id: "cotton_curl",
    crop: "Cotton",
    disease_name: "Leaf Curl Virus",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["No Cure", "Spray Imidacloprid (Vector Control)"],
    organic_cure: ["Install Yellow Sticky Traps", "Spray Neem Oil"],
    description: "A viral disease transmitted by Whiteflies causing curling.",
    symptoms: ["Upward curling leaves", "Thickened veins", "Stunted growth"],
    cause: "Begomovirus (Virus) - Vector: Whitefly"
  },
  // 20. Cotton Fusarium Wilt
  {
    id: "cotton_wilt",
    crop: "Cotton",
    disease_name: "Fusarium Wilt",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Soil drench Carbendazim (2g)"],
    organic_cure: ["Solarize soil (Heat treatment) before planting"],
    description: "A soil-borne fungus that blocks the plant's vascular system.",
    symptoms: ["Yellowing leaves", "Wilting", "Brown ring inside stem"],
    cause: "Fusarium oxysporum f. sp. vasinfectum (Fungus)"
  },
  // 21. Cotton Healthy
  {
    id: "cotton_healthy",
    crop: "Cotton",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Monitor water levels", "Vermicompost"],
    description: "Healthy cotton plant.",
    symptoms: ["Green leaves", "Healthy bolls"],
    cause: "N/A"
  },
  // 22. Grape Black Rot
  {
    id: "grape_black",
    crop: "Grape",
    disease_name: "Black Rot",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Mancozeb (2g) before bloom"],
    organic_cure: ["Remove dried 'mummy' grapes manually"],
    description: "A fungal disease that mummifies grape berries.",
    symptoms: ["Brown spots on leaves", "Black shriveled fruit (Mummies)"],
    cause: "Guignardia bidwellii (Fungus)"
  },
  // 23. Grape Esca (Measles)
  {
    id: "grape_esca",
    crop: "Grape",
    disease_name: "Esca (Measles)",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["No Cure", "Protect cuts with Boric Acid"],
    organic_cure: ["Cut and burn infected vine immediately"],
    description: "A complex wood disease causing 'Tiger stripe' leaves.",
    symptoms: ["Yellow/brown stripes on leaves", "Spotted fruit (Measles)", "Sudden wilting"],
    cause: "Phaeomoniella chlamydospora (Fungus Complex)"
  },
  // 24. Grape Leaf Blight
  {
    id: "grape_blight",
    crop: "Grape",
    disease_name: "Leaf Blight",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Chlorothalonil (2g)"],
    organic_cure: ["Improve air circulation", "Avoid wetting leaves"],
    description: "Fungal infection causing irregular lesions on foliage.",
    symptoms: ["Irregular brown spots", "Yellow halos around spots"],
    cause: "Pseudocercospora vitis (Fungus)"
  },
  // 25. Grape Healthy
  {
    id: "grape_healthy",
    crop: "Grape",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Regular pruning", "Compost application"],
    description: "Healthy grapevine.",
    symptoms: ["Green leaves", "Plump berries"],
    cause: "N/A"
  },
  // 26. Orange Citrus Greening
  {
    id: "orange_green",
    crop: "Orange",
    disease_name: "Citrus Greening",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["No Cure", "Spray Dimethoate (Vector Control)"],
    organic_cure: ["Remove infected tree to save orchard"],
    description: "A deadly bacterial disease spread by psyllids.",
    symptoms: ["Yellow mottling on leaves", "Misshapen, bitter fruit"],
    cause: "Candidatus Liberibacter asiaticus (Bacteria)"
  },
  // 27. Peach Bacterial Spot
  {
    id: "peach_bac",
    crop: "Peach",
    disease_name: "Bacterial Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Copper Oxychloride (2g)"],
    organic_cure: ["Avoid high Nitrogen fertilizer"],
    description: "Bacterial infection causing holes in leaves and fruit spots.",
    symptoms: ["Small water-soaked spots", "Shot-hole effect on leaves", "Cracked fruit"],
    cause: "Xanthomonas campestris pv. pruni (Bacteria)"
  },
  // 28. Peach Healthy
  {
    id: "peach_healthy",
    crop: "Peach",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Mulching and regular watering"],
    description: "Healthy peach tree.",
    symptoms: ["Green leaves", "Clean fruit"],
    cause: "N/A"
  },
  // 29. Pepper Bacterial Spot
  {
    id: "pepper_bac",
    crop: "Pepper",
    disease_name: "Bacterial Spot",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Mix Copper Hydroxide (2g) + Streptocycline"],
    organic_cure: ["Remove infected plants", "Hot water seed treatment"],
    description: "A devastating bacterial disease for peppers.",
    symptoms: ["Dark water-soaked spots", "Leaves turning yellow", "Scabs on fruit"],
    cause: "Xanthomonas campestris pv. vesicatoria (Bacteria)"
  },
  // 30. Pepper Healthy
  {
    id: "pepper_healthy",
    crop: "Pepper",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Add crushed Eggshells (Calcium source)"],
    description: "Healthy pepper plant.",
    symptoms: ["Green leaves", "No spots"],
    cause: "N/A"
  },
  // 31. Potato Early Blight
  {
    id: "potato_early",
    crop: "Potato",
    disease_name: "Early Blight",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Mancozeb (2.5g)", "Spray Chlorothalonil"],
    organic_cure: ["Drip irrigation", "Mulch soil"],
    description: "Common fungal disease characterized by concentric rings.",
    symptoms: ["Target-board spots on leaves", "Yellowing of lower leaves"],
    cause: "Alternaria solani (Fungus)"
  },
  // 32. Potato Late Blight
  {
    id: "potato_late",
    crop: "Potato",
    disease_name: "Late Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Urgent: Spray Ridomil Gold (2g)"],
    organic_cure: ["No Organic Cure", "Burn infected plants"],
    description: "The disease that caused the Irish Potato Famine. Very destructive.",
    symptoms: ["Large dark spots", "White mold on leaf underside", "Rotting tubers"],
    cause: "Phytophthora infestans (Oomycete)"
  },
  // 33. Potato Healthy
  {
    id: "potato_healthy",
    crop: "Potato",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Earthing up (Cover tubers with soil)"],
    description: "Healthy potato plant.",
    symptoms: ["Vibrant green foliage"],
    cause: "N/A"
  },
  // 34. Raspberry Healthy
  {
    id: "rasp_healthy",
    crop: "Raspberry",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Prune old canes"],
    description: "Healthy raspberry cane.",
    symptoms: ["Green leaves", "No rust or mold"],
    cause: "N/A"
  },
  // 35. Rice Bacterial Blight
  {
    id: "rice_blight",
    crop: "Rice",
    disease_name: "Bacterial Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Mix Streptocycline (0.1g) + Copper"],
    organic_cure: ["Spray fresh Cow Dung Slurry (20%)"],
    description: "A serious bacterial disease causing wilting of seedlings.",
    symptoms: ["Yellow/White streaks on leaf blades", "Milky ooze from lesions"],
    cause: "Xanthomonas oryzae pv. oryzae (Bacteria)"
  },
  // 36. Rice Leaf Blast
  {
    id: "rice_blast",
    crop: "Rice",
    disease_name: "Leaf Blast",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Tricyclazole (0.6g)"],
    organic_cure: ["Seed treatment with Pseudomonas", "Avoid Urea"],
    description: "A destructive fungal disease affecting leaves and panicles.",
    symptoms: ["Diamond/Spindle-shaped spots with gray centers", "Neck rot"],
    cause: "Magnaporthe oryzae (Fungus)"
  },
  // 37. Rice Brown Spot
  {
    id: "rice_brown",
    crop: "Rice",
    disease_name: "Brown Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Mancozeb (2.5g)"],
    organic_cure: ["Correct Potassium deficiency in soil"],
    description: "Fungal disease often linked to poor soil nutrition.",
    symptoms: ["Round/Oval brown spots", "Discolored grains"],
    cause: "Bipolaris oryzae (Fungus)"
  },
  // 38. Rice Tungro Virus
  {
    id: "rice_tungro",
    crop: "Rice",
    disease_name: "Tungro Virus",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["No Cure", "Spray Imidacloprid (Vector Control)"],
    organic_cure: ["Light traps for Green Leafhoppers"],
    description: "Viral disease transmitted by leafhoppers causing stunting.",
    symptoms: ["Yellow/Orange leaf discoloration", "Stunted plants"],
    cause: "Rice Tungro Bacilliform Virus (Vector: Leafhopper)"
  },
  // 39. Rice Healthy
  {
    id: "rice_healthy",
    crop: "Rice",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Maintain proper water level"],
    description: "Healthy rice crop.",
    symptoms: ["Green upright leaves"],
    cause: "N/A"
  },
  // 40. Soybean Rust
  {
    id: "soy_rust",
    crop: "Soybean",
    disease_name: "Soybean Rust",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Hexaconazole (1ml)"],
    organic_cure: ["Remove infected lower leaves", "Ensure drainage"],
    description: "Aggressive fungal disease causing severe defoliation.",
    symptoms: ["Small pustules on leaf undersides", "Yellowing leaves"],
    cause: "Phakopsora pachyrhizi (Fungus)"
  },
  // 41. Soybean Healthy
  {
    id: "soy_healthy",
    crop: "Soybean",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Check for pests", "Rhizobium culture"],
    description: "Healthy soybean plant.",
    symptoms: ["Green trifoliate leaves"],
    cause: "N/A"
  },
  // 42. Squash Powdery Mildew
  {
    id: "squash_mildew",
    crop: "Squash",
    disease_name: "Powdery Mildew",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Sulfur Dust (2g)"],
    organic_cure: ["Spray Baking Soda + Water mix"],
    description: "Common fungal disease appearing as white dust.",
    symptoms: ["White powdery spots on leaves/stems"],
    cause: "Erysiphe cichoracearum (Fungus)"
  },
  // 43. Strawberry Leaf Scorch
  {
    id: "straw_scorch",
    crop: "Strawberry",
    disease_name: "Leaf Scorch",
    nature: "Low",
    severity_default: "Low",
    chemical_cure: ["Spray Captan (2g)"],
    organic_cure: ["Remove dead/old leaves", "Clean cultivation"],
    description: "Fungal infection causing purple blotches.",
    symptoms: ["Irregular purple spots", "Leaves appearing burnt"],
    cause: "Diplocarpon earliana (Fungus)"
  },
  // 44. Strawberry Healthy
  {
    id: "straw_healthy",
    crop: "Strawberry",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Mulch with straw to keep fruit clean"],
    description: "Healthy strawberry plant.",
    symptoms: ["Green leaves", "Red berries"],
    cause: "N/A"
  },
  // 45. Tomato Bacterial Spot
  {
    id: "tomato_bac",
    crop: "Tomato",
    disease_name: "Bacterial Spot",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Mix Copper Oxychloride (3g) + Streptocycline"],
    organic_cure: ["Spray Aloe Vera extract", "Seed treatment"],
    description: "Bacterial disease causing spotting and fruit damage.",
    symptoms: ["Small black/brown spots", "Yellowing", "Scabby fruit"],
    cause: "Xanthomonas campestris pv. vesicatoria (Bacteria)"
  },
  // 46. Tomato Early Blight
  {
    id: "tomato_early",
    crop: "Tomato",
    disease_name: "Early Blight",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Chlorothalonil (2g)"],
    organic_cure: ["Stake plants off ground", "Mulch soil"],
    description: "Fungal disease starting from lower leaves.",
    symptoms: ["Concentric ring spots (Bullseye)", "Lower leaf yellowing"],
    cause: "Alternaria solani (Fungus)"
  },
  // 47. Tomato Late Blight
  {
    id: "tomato_late",
    crop: "Tomato",
    disease_name: "Late Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Metalaxyl (2g)"],
    organic_cure: ["Burn Plant", "Keep foliage dry"],
    description: "Highly destructive disease affecting stems and fruits.",
    symptoms: ["Greasy grey/green spots", "White fuzz in humidity"],
    cause: "Phytophthora infestans (Oomycete)"
  },
  // 48. Tomato Leaf Mold
  {
    id: "tomato_mold",
    crop: "Tomato",
    disease_name: "Leaf Mold",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Carbendazim (1g)"],
    organic_cure: ["Increase ventilation", "Reduce humidity"],
    description: "Fungal disease thriving in high humidity.",
    symptoms: ["Yellow spots on upper leaf", "Olive-green mold underneath"],
    cause: "Passalora fulva (Fungus)"
  },
  // 49. Tomato Septoria Leaf Spot
  {
    id: "tomato_sept",
    crop: "Tomato",
    disease_name: "Septoria Leaf Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Mancozeb (2g)"],
    organic_cure: ["Remove lower leaves", "Water at base"],
    description: "Fungal disease causing many small spots.",
    symptoms: ["Numerous small circular spots", "Grey center with dark border"],
    cause: "Septoria lycopersici (Fungus)"
  },
  // 50. Tomato Spider Mites
  {
    id: "tomato_mites",
    crop: "Tomato",
    disease_name: "Spider Mites",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Spiromesifen (1ml)"],
    organic_cure: ["Water jet spray", "Spray Neem Oil"],
    description: "Tiny pests that suck plant sap.",
    symptoms: ["Yellow stippling (dots) on leaves", "Fine webbing"],
    cause: "Tetranychus urticae (Mite)"
  },
  // 51. Tomato Target Spot
  {
    id: "tomato_target",
    crop: "Tomato",
    disease_name: "Target Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: ["Spray Azoxystrobin (1ml)"],
    organic_cure: ["Remove crop debris", "Avoid overhead water"],
    description: "Fungal disease causing ringed lesions.",
    symptoms: ["Brown lesions with faint concentric rings"],
    cause: "Corynespora cassiicola (Fungus)"
  },
  // 52. Tomato Mosaic Virus
  {
    id: "tomato_mos",
    crop: "Tomato",
    disease_name: "Mosaic Virus",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["No Cure", "Remove plant"],
    organic_cure: ["Wash hands/tools with milk", "Remove weeds"],
    description: "Viral disease causing mottled leaves.",
    symptoms: ["Mottled light/dark green leaves", "Fern-like leaves"],
    cause: "Tobacco Mosaic Virus (Virus)"
  },
  // 53. Tomato Yellow Leaf Curl Virus
  {
    id: "tomato_curl",
    crop: "Tomato",
    disease_name: "Yellow Leaf Curl",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["No Cure", "Spray Imidacloprid (Vector Control)"],
    organic_cure: ["Yellow Sticky Traps", "Reflective mulch"],
    description: "Viral disease transmitted by whiteflies.",
    symptoms: ["Leaves curling upward", "Yellow margins", "Stunting"],
    cause: "Begomovirus (Virus) - Vector: Whitefly"
  },
  // 54. Tomato Healthy
  {
    id: "tomato_healthy",
    crop: "Tomato",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Calcium Nitrate spray prevents rot"],
    description: "Healthy tomato plant.",
    symptoms: ["Green leaves", "Red firm fruit"],
    cause: "N/A"
  },
  // 55. Wheat Brown/Yellow Rust
  {
    id: "wheat_rust",
    crop: "Wheat",
    disease_name: "Brown/Yellow Rust",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Propiconazole (Tilt) (1ml)"],
    organic_cure: ["Use resistant varieties", "Avoid excess Nitrogen"],
    description: "Fungal disease causing rust-colored pustules.",
    symptoms: ["Orange/Yellow powdery pustules on leaves"],
    cause: "Puccinia triticina / striiformis (Fungus)"
  },
  // 56. Wheat Septoria
  {
    id: "wheat_sept",
    crop: "Wheat",
    disease_name: "Septoria",
    nature: "High",
    severity_default: "High",
    chemical_cure: ["Spray Chlorothalonil (2g)"],
    organic_cure: ["Deep plowing to bury fungus"],
    description: "Fungal disease causing leaf blotches.",
    symptoms: ["Yellow/Brown blotches on leaves", "Black dots in lesions"],
    cause: "Zymoseptoria tritici (Fungus)"
  },
  // 57. Wheat Healthy
  {
    id: "wheat_healthy",
    crop: "Wheat",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["Do Not Spray"],
    organic_cure: ["Use Bio-fertilizers (Azotobacter)"],
    description: "Healthy wheat crop.",
    symptoms: ["Green blades", "Full heads"],
    cause: "N/A"
  }
];

module.exports = diseaseData;