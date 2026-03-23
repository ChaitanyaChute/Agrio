const diseaseData = [

  // APPLE (4)
  {
    id: "apple_scab",
    crop: "Apple",
    disease_name: "Apple Scab",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Captan 50 WP @ 2g per litre — start at bud break, repeat every 10 days for 4-5 sprays",
      "Spray Mancozeb 75 WP @ 2.5g per litre — apply before rain forecast, continue through petal fall stage",
      "Spray Myclobutanil 10 WP @ 1g per litre — use if infection is already visible, gives curative + protective action"
    ],
    organic_cure: [
      "Spray Neem Oil 5ml per litre with a few drops of soap — apply every 7 days from early spring",
      "Prune and destroy all infected leaves and twigs before winter to reduce fungal spore load next season",
      "Apply Lime Sulfur spray (1:10 ratio) during dormant season to kill overwintering spores on bark"
    ],
    description: "A fungal disease that causes dark, scabby spots on fruit and leaves, reducing both quality and yield.",
    symptoms: ["Olive-green to black scabby spots on leaves", "Velvety spots on fruit surface", "Premature leaf and fruit drop"],
    cause: "Venturia inaequalis (Fungus)"
  },
  {
    id: "apple_rot",
    crop: "Apple",
    disease_name: "Black Rot",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Thiophanate Methyl 70 WP @ 1g per litre — apply at pink bud stage, repeat every 10-14 days for 3 sprays",
      "Spray Captan 50 WP @ 2g per litre — protective spray from petal fall onwards, covers both rot and canker",
      "Apply Copper Oxychloride 50 WP @ 3g per litre on canker-affected branches before new growth starts"
    ],
    organic_cure: [
      "Remove and burn all mummified fruits still hanging on tree — these are the primary source of infection next season",
      "Cut out all dead wood and cankers with sterilized pruning shears, paint cut surfaces with Bordeaux paste",
      "Spray Trichoderma viride (bio-fungicide) @ 5g per litre during early fruit development stage"
    ],
    description: "A fungal disease causing firm rot on fruit, leaf spots with purple margins, and cankers on woody branches.",
    symptoms: ["Purple to brown spots on leaves with frog-eye appearance", "Rotting black fruit starting from calyx end", "Sunken cankers on limbs and trunk"],
    cause: "Botryosphaeria obtusa (Fungus)"
  },
  {
    id: "apple_rust",
    crop: "Apple",
    disease_name: "Cedar Apple Rust",
    nature: "Low",
    severity_default: "Low",
    chemical_cure: [
      "Spray Myclobutanil 10 WP @ 0.5ml per litre — apply from pink bud stage, continue for 3 sprays at 7-day intervals",
      "Spray Propiconazole 25 EC @ 1ml per litre — highly effective if applied just before wet weather in spring",
      "Spray Mancozeb 75 WP @ 2g per litre as protective cover from bud break until 3 weeks after petal fall"
    ],
    organic_cure: [
      "Remove all nearby Juniper or Cedar trees within 300 metres — the fungus needs both trees to complete its life cycle",
      "Spray Wettable Sulfur 80 WP @ 3g per litre every 7-10 days from pink bud to cover stage",
      "Apply Neem Oil @ 5ml per litre with surfactant every 10 days as a preventive spray in spring"
    ],
    description: "A fungal disease that alternates between apple and juniper/cedar trees, causing yellow-orange spots on apple leaves and fruit.",
    symptoms: ["Bright yellow-orange spots on upper leaf surface", "Rust-colored tube-like horns on fruit and leaf underside", "Premature defoliation in severe cases"],
    cause: "Gymnosporangium juniperi-virginianae (Fungus)"
  },
  {
    id: "apple_healthy",
    crop: "Apple",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy and disease-free"],
    organic_cure: [
      "Maintain balanced NPK fertilization — excess Nitrogen weakens disease resistance",
      "Ensure proper drainage to avoid root zone waterlogging",
      "Prune annually for good air circulation inside canopy to prevent future fungal issues"
    ],
    description: "The apple plant is healthy and free from any disease infection.",
    symptoms: ["Deep green, firm leaves", "No spots, scabs, or abnormal growth"],
    cause: "N/A"
  },

  // BANANA (4)
  {
    id: "banana_cordana",
    crop: "Banana",
    disease_name: "Cordana",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2.5g per litre — apply at first lesion appearance, repeat every 14 days for 3 sprays",
      "Spray Propiconazole 25 EC @ 1ml per litre — systemic fungicide effective against Cordana leaf spot",
      "Spray Chlorothalonil 75 WP @ 2g per litre — use in rotation with Propiconazole to prevent resistance"
    ],
    organic_cure: [
      "Remove and destroy all infected leaves showing brown oval spots — prevents spore spread to healthy leaves",
      "Avoid overhead irrigation — wet leaf surfaces promote fungal spore germination and infection",
      "Apply Neem Oil @ 5ml per litre with soap every 10 days as preventive spray during humid season"
    ],
    description: "A fungal leaf spot disease of banana causing oval brown lesions with yellow halos, reducing photosynthetic area and overall plant vigor.",
    symptoms: ["Oval to elongated brown spots with yellow halo on leaves", "Spots enlarge and merge causing large dead leaf areas", "Infected leaves dry prematurely reducing bunch weight"],
    cause: "Cordana musae (Fungus)"
  },
  {
    id: "banana_siga",
    crop: "Banana",
    disease_name: "Sigatoka",
    nature: "High",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Propiconazole 25 EC @ 1ml per litre — apply at first streak appearance, repeat every 21 days for 3-4 sprays",
      "Spray Mancozeb 75 WP @ 2.5g per litre — protective spray every 14 days during wet humid season",
      "Spray Chlorothalonil 75 WP @ 2g per litre — use in rotation with Propiconazole to prevent resistance"
    ],
    organic_cure: [
      "Cut and remove all infected leaves showing streaks or spots — bag them before removal to prevent spore spread",
      "Spray Panchagavya (fermented cow products) @ 30ml per litre every 15 days to boost plant immunity",
      "Apply thick mulch of dried banana leaves around base to reduce soil splash and spore dispersal"
    ],
    description: "A serious leaf spot disease caused by fungus that reduces photosynthesis, leading to premature ripening and up to 50% yield loss.",
    symptoms: ["Small pale yellow streaks on young leaves that enlarge to brown-black spots", "Yellow halo around dark lesions", "Premature fruit ripening with poor quality"],
    cause: "Mycosphaerella fijiensis (Fungus)"
  },
  {
    id: "banana_healthy",
    crop: "Banana",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy"],
    organic_cure: [
      "Apply banana peel compost around base to replenish Potassium naturally",
      "Maintain proper spacing (3m x 3m) to ensure air circulation and reduce humidity",
      "Regular desuckering — keep only one main stem and one follower per plant"
    ],
    description: "The banana plant is healthy and productive with no signs of disease.",
    symptoms: ["Vibrant green broad leaves", "Strong upright pseudostem", "No streaks, spots, or wilting"],
    cause: "N/A"
  },

  // BEAN (4)
  {
    id: "bean_angular",
    crop: "Bean",
    disease_name: "Angular Leaf Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Copper Oxychloride 50 WP @ 3g per litre — apply at first angular spot appearance, repeat every 10 days for 3 sprays",
      "Spray Mancozeb 75 WP @ 2.5g per litre — protective spray during cool humid weather when disease spreads fast",
      "Seed treatment with Thiram 75 WS @ 3g per kg seed — eliminates seed-borne inoculum before sowing"
    ],
    organic_cure: [
      "Use certified disease-free seeds — Angular Leaf Spot is primarily seed-borne and spreads through infected seed lots",
      "Avoid overhead irrigation — water splash spreads bacterial spores from leaf to leaf rapidly",
      "Remove and destroy infected plant debris after harvest — pathogen survives in crop residue on soil"
    ],
    description: "A fungal disease of beans causing angular water-soaked spots on leaves limited by leaf veins, leading to defoliation and pod infection in severe cases.",
    symptoms: ["Angular water-soaked spots on leaves bounded by leaf veins", "Spots turn brown with yellow halo as they age", "Infected pods show reddish-brown sunken lesions"],
    cause: "Phaeoisariopsis griseola (Fungus)"
  },
  {
    id: "bean_rust",
    crop: "Bean",
    disease_name: "Bean Rust",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Chlorothalonil 75 WP @ 2g per litre — start at first pustule appearance, repeat every 10 days for 3 sprays",
      "Spray Mancozeb 75 WP @ 2g per litre — effective protectant, apply before humid and warm weather",
      "Spray Propiconazole 25 EC @ 1ml per litre — use when infection is moderate to severe, gives curative effect"
    ],
    organic_cure: [
      "Dust Wettable Sulfur 80 WP @ 3g per litre on leaf surface, especially undersides where pustules form",
      "Remove and destroy all infected plant debris after harvest — do not leave in field as it harbors spores",
      "Apply wood ash dust on leaves early morning — creates alkaline surface unfavorable for fungal growth"
    ],
    description: "A fungal disease causing rust-colored pustules on leaf undersides, reducing photosynthesis and causing early leaf drop.",
    symptoms: ["Rust-brown powdery pustules on lower leaf surface", "Corresponding yellow spots on upper leaf surface", "Premature leaf yellowing and drop in severe cases"],
    cause: "Uromyces appendiculatus (Fungus)"
  },
  {
    id: "bean_healthy",
    crop: "Bean",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy"],
    organic_cure: [
      "Mulch soil around base to retain moisture and reduce soil splash onto lower leaves",
      "Stake plants properly to keep foliage off wet soil surface",
      "Practice crop rotation — avoid growing beans in same plot for 2 consecutive seasons"
    ],
    description: "The bean plant is healthy and growing well with no signs of disease.",
    symptoms: ["Healthy green leaves and pods", "No spots, pustules, or discoloration"],
    cause: "N/A"
  },

  // CORN (4)
  {
    id: "corn_spot",
    crop: "Corn",
    disease_name: "Cercospora Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2.5g per litre — apply at early tasseling stage, repeat after 14 days",
      "Spray Azoxystrobin 23 SC @ 1ml per litre — highly effective systemic fungicide, use at disease onset",
      "Spray Propiconazole 25 EC @ 1.5ml per litre — apply if disease spreads above ear leaf level"
    ],
    organic_cure: [
      "Plow crop residue deep (15-20 cm) into soil after harvest — residue on surface is primary infection source",
      "Use resistant hybrid seeds — check for GLS (Gray Leaf Spot) resistance ratings before buying",
      "Maintain proper row spacing (60-75 cm) to improve air circulation and reduce leaf wetness duration"
    ],
    description: "Also known as Gray Leaf Spot, this fungal disease causes rectangular tan/grey lesions on leaves, reducing photosynthesis and grain fill.",
    symptoms: ["Rectangular grey-tan lesions with parallel edges on leaves", "Lesions expand and merge causing blight in severe cases", "Lower leaves affected first, spreading upward"],
    cause: "Cercospora zeae-maydis (Fungus)"
  },
  {
    id: "corn_rust",
    crop: "Corn",
    disease_name: "Common Rust",
    nature: "Low",
    severity_default: "Low",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2g per litre — apply only if more than 50% of leaves are infected before tasseling",
      "Spray Zineb 75 WP @ 2g per litre — use as protective spray during cool, humid weather",
      "Spray Propiconazole 25 EC @ 1ml per litre — reserve for severe cases with heavy pustule load"
    ],
    organic_cure: [
      "Usually no treatment needed if planting is done on time — late planted corn suffers more",
      "Plant resistant hybrid varieties — most modern commercial hybrids have good rust resistance",
      "Spray diluted wood ash solution (100g per litre) on leaves to create unfavorable surface for spores"
    ],
    description: "A common fungal disease in cooler climates causing reddish-brown pustules on both leaf surfaces. Rarely causes major yield loss if managed early.",
    symptoms: ["Reddish-brown oval pustules scattered on both upper and lower leaf surfaces", "Pustules may turn dark brown-black as they mature", "Heavy infection causes premature leaf drying"],
    cause: "Puccinia sorghi (Fungus)"
  },
  {
    id: "corn_north",
    crop: "Corn",
    disease_name: "Northern Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Propiconazole 25 EC @ 1.5ml per litre — apply at early tasseling when disease first appears, repeat after 14 days",
      "Spray Azoxystrobin + Propiconazole (pre-mix) @ 1ml per litre — best combination for Northern Leaf Blight control",
      "Spray Mancozeb 75 WP @ 2.5g per litre — use as protective spray before disease establishes in field"
    ],
    organic_cure: [
      "Use certified NLB-resistant hybrid seeds — most important single step to prevent this disease",
      "Deep plow all crop residue immediately after harvest to bury fungal spores",
      "Avoid overhead irrigation — use drip or furrow irrigation to keep foliage dry"
    ],
    description: "A serious fungal disease causing large cigar-shaped lesions that destroy leaves rapidly, leading to significant yield reduction in susceptible varieties.",
    symptoms: ["Long (5-15 cm) cigar-shaped grey-green to tan lesions on leaves", "Lesions have wavy edges unlike the straight edges of Gray Leaf Spot", "Entire leaf dries up in severe infection — visible from field border"],
    cause: "Exserohilum turcicum (Fungus)"
  },
  {
    id: "corn_healthy",
    crop: "Corn",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — crop is healthy"],
    organic_cure: [
      "Apply Urea (Nitrogen fertilizer) in split doses — basal + knee-high stage for strong growth",
      "Ensure proper weed management in first 30 days to avoid competition",
      "Maintain proper plant population (60,000-75,000 plants per hectare) for optimal yield"
    ],
    description: "The corn crop is healthy with no disease symptoms.",
    symptoms: ["Dark green broad leaves", "Strong upright stalk", "No lesions or pustules"],
    cause: "N/A"
  },

  // COTTON (4)
  {
    id: "cotton_bac",
    crop: "Cotton",
    disease_name: "Bacterial Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Copper Oxychloride 50 WP @ 3g per litre + Streptocycline @ 0.5g per litre — apply at first symptom, repeat every 10 days for 3 sprays",
      "Spray Bactericidal Copper Hydroxide @ 2g per litre — effective against angular water-soaked lesions on leaves",
      "Seed treatment with Carbendazim @ 2g per kg seed + Thiram @ 2g per kg seed before sowing to prevent seed-borne infection"
    ],
    organic_cure: [
      "Spray fresh Cow Dung Slurry (1 kg cow dung in 10 litres water, filtered) every 15 days as bacterial inhibitor",
      "Remove and burn all infected plant parts — do not leave infected bolls or leaves in field",
      "Use certified disease-free seeds from reliable source — seed-borne infection is major entry point"
    ],
    description: "A serious bacterial disease causing angular leaf spots, stem blackening (Black Arm), and boll rot, leading to 30-50% yield loss in severe cases.",
    symptoms: ["Angular water-soaked spots on leaves turning brown with yellow halo", "Blackening and shriveling of stems and branches (Black Arm symptom)", "Boll rot with dark sunken lesions reducing fiber quality"],
    cause: "Xanthomonas citri pv. malvacearum (Bacteria)"
  },
  {
    id: "cotton_curl",
    crop: "Cotton",
    disease_name: "Leaf Curl Virus",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Imidacloprid 17.8 SL @ 0.5ml per litre — targets Whitefly vector, apply at 15-day intervals from 30 days after sowing",
      "Spray Thiamethoxam 25 WG @ 0.3g per litre — systemic insecticide for Whitefly control, alternate with Imidacloprid",
      "No direct chemical cure for virus — all chemical treatment is vector (Whitefly) management only"
    ],
    organic_cure: [
      "Install Yellow Sticky Traps @ 10-15 per acre to monitor and trap adult Whiteflies",
      "Spray Neem Oil @ 5ml per litre with soap — disrupts Whitefly feeding and egg laying, apply every 10 days",
      "Uproot and destroy severely infected plants immediately to prevent spread to healthy plants nearby"
    ],
    description: "A viral disease transmitted by Whiteflies causing severe leaf curling and stunting. No cure exists — only vector management can limit spread.",
    symptoms: ["Leaves curl upward and inward with cupped appearance", "Veins thicken and darken giving a leathery look", "Stunted plant growth with significantly reduced boll formation"],
    cause: "Begomovirus (Virus) — Vector: Bemisia tabaci (Whitefly)"
  },
  {
    id: "cotton_wilt",
    crop: "Cotton",
    disease_name: "Fusarium Wilt",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Soil drench with Carbendazim 50 WP @ 2g per litre around root zone — apply at first wilt symptom, repeat after 15 days",
      "Seed treatment with Carbendazim @ 2g per kg seed + Trichoderma @ 4g per kg seed before sowing",
      "Apply Copper Oxychloride soil drench @ 3g per litre to slow further soil spread in field"
    ],
    organic_cure: [
      "Soil solarization — cover moist soil with clear plastic sheet for 4-6 weeks in hot summer before planting",
      "Incorporate Trichoderma harzianum @ 2.5 kg per acre into soil 15 days before sowing",
      "Practice 3-year crop rotation with non-host crops like wheat, maize, or sorghum"
    ],
    description: "A soil-borne fungal disease that invades the plant's vascular system, blocking water and nutrient flow, causing wilting and death. Soil remains infected for years.",
    symptoms: ["Sudden yellowing and wilting of leaves starting from one side of plant", "Brown-red ring visible inside stem cross-section", "Complete plant death in 2-3 weeks after symptoms appear"],
    cause: "Fusarium oxysporum f. sp. vasinfectum (Fungus)"
  },
  {
    id: "cotton_healthy",
    crop: "Cotton",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy"],
    organic_cure: [
      "Monitor soil moisture — cotton is sensitive to both waterlogging and drought stress",
      "Apply Vermicompost @ 1-2 tonnes per acre at sowing for strong root development",
      "Regular scouting for Whitefly, Bollworm, and Mites — early detection prevents major damage"
    ],
    description: "Healthy cotton plant with good canopy and normal boll development.",
    symptoms: ["Vibrant green leaves", "No curling, spots, or wilting", "Healthy boll setting"],
    cause: "N/A"
  },

  // GRAPE (4)
  {
    id: "grape_black",
    crop: "Grape",
    disease_name: "Black Rot",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2g per litre — begin at bud break, apply every 10-14 days through cover sprays (6-8 sprays total)",
      "Spray Myclobutanil 10 WP @ 1g per litre — systemic action, most effective from bloom to 4 weeks after bloom",
      "Spray Captan 50 WP @ 2g per litre — use during wet periods as protective spray on developing berries"
    ],
    organic_cure: [
      "Remove all dried mummy grapes from vine and ground before bud break — they are the primary infection source",
      "Prune for open canopy structure to improve air circulation and reduce leaf wetness duration",
      "Spray Bordeaux mixture (1%) every 10 days from bud break through fruit set as protective cover"
    ],
    description: "A destructive fungal disease that mummifies berries and causes defoliation, leading to major crop loss if not controlled from early in the season.",
    symptoms: ["Tan-brown spots with dark borders on leaves", "Infected berries shrivel and turn black (mummify)", "Infected shoots show black elongated lesions"],
    cause: "Guignardia bidwellii (Fungus)"
  },
  {
    id: "grape_esca",
    crop: "Grape",
    disease_name: "Esca",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "No direct chemical cure available for established Esca infection",
      "Protect all pruning wounds immediately with Boric Acid paste (5%) or Trichoderma-based wound sealant",
      "Apply systemic fungicide (Flusilazole) as wound protectant — does not cure but slows progression"
    ],
    organic_cure: [
      "Cut out all infected wood showing brown-black internal staining — sterilize pruning shears with 70% alcohol between cuts",
      "Burn all removed infected wood immediately — do not leave in vineyard",
      "Prune during dry weather only — wet conditions encourage spore entry into fresh wounds"
    ],
    description: "A complex fungal wood disease that destroys the internal wood of grapevines, causing Tiger stripe leaves and sudden vine collapse. No cure once established.",
    symptoms: ["Yellow or brown stripes between leaf veins giving Tiger stripe appearance", "Small dark spots on berries (Measles symptom)", "Sudden wilting of entire shoot in summer (Apoplexy)"],
    cause: "Phaeomoniella chlamydospora + Phaeoacremonium spp. (Fungal Complex)"
  },
  {
    id: "grape_blight",
    crop: "Grape",
    disease_name: "Leaf Blight",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Chlorothalonil 75 WP @ 2g per litre — apply at first symptom, repeat every 10-14 days for 3 sprays",
      "Spray Mancozeb 75 WP @ 2.5g per litre — protective spray especially during warm, humid weather",
      "Spray Copper Hydroxide @ 2g per litre — use as alternative in rotation to prevent fungicide resistance"
    ],
    organic_cure: [
      "Improve air circulation by proper canopy management — thinning leaves around cluster zone",
      "Avoid overhead or sprinkler irrigation — use drip irrigation to keep foliage dry",
      "Apply Bordeaux mixture (0.5%) as protective spray every 15 days during humid season"
    ],
    description: "A fungal disease causing irregular brown lesions on leaves, reducing photosynthesis and weakening the vine.",
    symptoms: ["Irregular brown spots with yellow halo on leaf surface", "Lesions merge causing large dead areas", "Infected leaves fall prematurely reducing vine vigor"],
    cause: "Pseudocercospora vitis (Fungus)"
  },
  {
    id: "grape_healthy",
    crop: "Grape",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — vine is healthy"],
    organic_cure: [
      "Annual pruning to maintain open canopy — reduces humidity and disease pressure",
      "Apply compost @ 5 kg per vine annually for balanced nutrition",
      "Regular monitoring for Downy Mildew and Powdery Mildew from bud break onwards"
    ],
    description: "Healthy grapevine with vigorous growth and no disease symptoms.",
    symptoms: ["Deep green uniform leaves", "Plump well-developed berries", "No spots, mold, or wilting"],
    cause: "N/A"
  },

  // PEPPER (2)
  {
    id: "pepper_bac",
    crop: "Pepper",
    disease_name: "Bacterial Spot",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Copper Hydroxide 77 WP @ 2g per litre + Streptocycline @ 0.5g per litre — apply at first symptom, repeat every 7 days for 4 sprays",
      "Spray Copper Oxychloride 50 WP @ 3g per litre — protective spray especially before rain forecast",
      "Seed treatment with hot water (52 degrees C for 30 minutes) before sowing — kills seed-borne bacteria"
    ],
    organic_cure: [
      "Remove and destroy infected plant debris immediately — do not compost infected material",
      "Spray diluted Garlic extract (100g crushed garlic in 1 litre water, filtered) every 7 days — natural antibacterial",
      "Avoid working in wet field — bacteria spread easily on hands, tools, and water droplets"
    ],
    description: "A serious bacterial disease causing water-soaked spots on leaves, stems, and fruit, leading to defoliation and major fruit quality loss.",
    symptoms: ["Small dark water-soaked spots on leaves that turn brown with yellow margins", "Leaves turn yellow and fall prematurely", "Raised scab-like lesions on fruit surface reducing market value"],
    cause: "Xanthomonas campestris pv. vesicatoria (Bacteria)"
  },
  {
    id: "pepper_healthy",
    crop: "Pepper",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy"],
    organic_cure: [
      "Add crushed eggshells around base — provides Calcium which prevents Blossom End Rot",
      "Mulch with straw to maintain soil moisture and reduce soil splash onto lower leaves",
      "Stake plants at 30 cm height to keep fruit off soil and improve air circulation"
    ],
    description: "Healthy pepper plant with normal flowering and fruit development.",
    symptoms: ["Green firm leaves", "Normal flower and fruit set", "No spots or wilting"],
    cause: "N/A"
  },

  // POTATO (3)
  {
    id: "potato_early",
    crop: "Potato",
    disease_name: "Early Blight",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2.5g per litre — begin at 30-35 days after emergence, repeat every 10 days for 4-5 sprays",
      "Spray Chlorothalonil 75 WP @ 2g per litre — protective spray, highly effective before infection establishes",
      "Spray Iprodione 50 WP @ 1.5g per litre — use when disease progresses to middle canopy leaves"
    ],
    organic_cure: [
      "Use drip irrigation instead of overhead irrigation — keeps foliage dry and greatly reduces disease spread",
      "Mulch soil with straw or plastic — prevents soil splash carrying fungal spores onto lower leaves",
      "Spray Trichoderma viride @ 5g per litre as bio-fungicide every 15 days from 30 days after planting"
    ],
    description: "A common fungal disease starting from older lower leaves, characterized by dark concentric ring lesions resembling a target board.",
    symptoms: ["Dark brown circular spots with concentric rings (target-board pattern) on lower leaves first", "Yellow halo around lesions", "Premature yellowing and drying of lower leaves"],
    cause: "Alternaria solani (Fungus)"
  },
  {
    id: "potato_late",
    crop: "Potato",
    disease_name: "Late Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "URGENT: Spray Metalaxyl + Mancozeb (Ridomil Gold) @ 2.5g per litre — apply immediately at first symptom, repeat every 7 days",
      "Spray Cymoxanil + Mancozeb @ 2.5g per litre — use in rotation with Metalaxyl to prevent resistance buildup",
      "Spray Dimethomorph @ 1g per litre — highly effective systemic option during cool wet weather outbreaks"
    ],
    organic_cure: [
      "No effective organic cure once late blight establishes — prevention is the only organic strategy",
      "Burn or deeply bury all infected plant material — do not leave any infected tissue in field",
      "Apply Copper-based Bordeaux mixture (1%) as preventive spray every 5-7 days during cool, wet weather"
    ],
    description: "Highly destructive disease caused by the same pathogen responsible for the Irish Potato Famine. Can destroy an entire crop within 7-10 days under favorable conditions.",
    symptoms: ["Large irregular water-soaked dark spots on leaves expanding rapidly", "White cottony sporulation on leaf undersides in humid conditions", "Tubers show reddish-brown internal rot when cut"],
    cause: "Phytophthora infestans (Oomycete)"
  },
  {
    id: "potato_healthy",
    crop: "Potato",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — crop is healthy"],
    organic_cure: [
      "Earthing up — mound soil around base of plant at 4-5 week stage to cover developing tubers and prevent greening",
      "Use certified disease-free seed tubers from trusted source for next season",
      "Monitor weather — spray preventive fungicide if cool wet weather is forecast"
    ],
    description: "Healthy potato plant with good foliage and normal tuber development.",
    symptoms: ["Vibrant green compound leaves", "No spots, blight lesions, or wilting", "Normal stem growth"],
    cause: "N/A"
  },

  // RICE (4)
  {
    id: "rice_blight",
    crop: "Rice",
    disease_name: "Bacterial Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Streptocycline @ 0.1g + Copper Oxychloride @ 3g per litre — apply at first symptom, repeat after 10 days",
      "Spray Bactericidal Copper Hydroxide @ 2g per litre — protective spray especially at tillering and panicle initiation",
      "Drain field water and avoid flood irrigation during active infection — stagnant water spreads bacteria rapidly"
    ],
    organic_cure: [
      "Spray fresh Cow Dung Slurry (200g per litre, filtered) — natural antibacterial suppresses bacterial spread",
      "Use resistant rice varieties — most important preventive measure in Bacterial Blight endemic areas",
      "Balanced fertilization — excess Nitrogen makes plants highly susceptible; apply in split doses only"
    ],
    description: "A serious bacterial disease causing yellowing and wilting of rice leaves and leaf blight, leading to 20-30% yield loss.",
    symptoms: ["Yellow to white water-soaked streaks along leaf edges extending from tip downward", "Milky bacterial ooze from fresh cut lesions (diagnostic sign)", "Kresek (seedling wilt) in severe cases — entire tiller wilts and dies"],
    cause: "Xanthomonas oryzae pv. oryzae (Bacteria)"
  },
  {
    id: "rice_brown",
    crop: "Rice",
    disease_name: "Brown Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2.5g per litre — apply at tillering stage when spots first appear, repeat after 14 days",
      "Spray Edifenphos (Hinosan) 50 EC @ 1ml per litre — effective against brown spot, apply at booting stage",
      "Spray Propiconazole 25 EC @ 1ml per litre if infection is severe and spreading rapidly"
    ],
    organic_cure: [
      "Correct Potassium deficiency — apply Muriate of Potash (MOP) @ 40-50 kg per acre, K-deficient soils are highly susceptible",
      "Seed treatment with Thiram 75 WS @ 3g per kg seed to eliminate seed-borne infection",
      "Balanced NPK fertilization — Brown Spot is often a hunger sign indicating poor soil nutrition"
    ],
    description: "A fungal disease strongly linked to soil nutritional deficiencies (especially Potassium), causing round brown spots on leaves and discolored grains.",
    symptoms: ["Round to oval brown spots with grey-white center on leaves", "Spots have yellow halo in early stage", "Discolored and shriveled grains reducing milling quality"],
    cause: "Bipolaris oryzae (Fungus)"
  },
  {
    id: "rice_smut",
    crop: "Rice",
    disease_name: "Leaf Smut",
    nature: "Low",
    severity_default: "Low",
    chemical_cure: [
      "Spray Propiconazole 25 EC @ 1ml per litre — apply at tillering stage when black angular spots appear, repeat after 14 days",
      "Spray Mancozeb 75 WP @ 2.5g per litre — protective spray during humid weather at vegetative stage",
      "Seed treatment with Carboxin 37.5% + Thiram 37.5% @ 3g per kg seed — reduces seed-borne smut infection"
    ],
    organic_cure: [
      "Use hot water seed treatment (52 degrees C for 10 minutes) — reduces smut spore load on seed surface before sowing",
      "Avoid excessive Nitrogen fertilization — high N promotes lush growth susceptible to smut infection",
      "Maintain proper field drainage — waterlogged conditions favor smut development in early crop stages"
    ],
    description: "A minor fungal disease of rice causing small angular black spots on leaves. Generally causes low yield loss but can affect grain quality in severe infections.",
    symptoms: ["Small angular black spots on leaf blades with black powdery spore masses", "Spots are limited by leaf veins giving angular shape", "Severely infected leaves turn yellow and die prematurely"],
    cause: "Entyloma oryzae (Fungus)"
  },
  {
    id: "rice_healthy",
    crop: "Rice",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — crop is healthy"],
    organic_cure: [
      "Maintain 5 cm standing water during vegetative stage — proper water management reduces many soil-borne diseases",
      "Apply Zinc Sulfate @ 25 kg per acre if Zinc deficiency (Khaira disease) symptoms appear",
      "Conduct regular field monitoring for Blast, BLB, and Brown Spot especially after heavy rains"
    ],
    description: "Healthy rice crop with normal growth and good tillering.",
    symptoms: ["Uniform green upright leaves", "Normal tillering and panicle emergence", "No lesions, spots, or discoloration"],
    cause: "N/A"
  },

  // SOYBEAN (2)
  {
    id: "soy_healthy",
    crop: "Soybean",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy"],
    organic_cure: [
      "Treat seeds with Rhizobium culture before sowing — improves nitrogen fixation and plant vigor",
      "Check undersides of lower leaves regularly from R1 (flowering) stage for rust pustules",
      "Avoid dense planting — maintain 30-45 cm spacing for good canopy aeration"
    ],
    description: "Healthy soybean plant with good nodulation and canopy.",
    symptoms: ["Trifoliate green leaves without spots or pustules", "Normal pod filling", "Good root nodulation visible on roots"],
    cause: "N/A"
  },

  // TOMATO (10)
  {
    id: "tomato_bac",
    crop: "Tomato",
    disease_name: "Bacterial Spot",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Copper Oxychloride 50 WP @ 3g per litre + Streptocycline @ 0.5g per litre — apply at first symptom, repeat every 7 days",
      "Spray Copper Hydroxide 77 WP @ 2.5g per litre — protective spray especially before rain forecast",
      "Seed treatment with hot water at 52 degrees C for 30 minutes — kills seed-borne bacteria before sowing"
    ],
    organic_cure: [
      "Spray Aloe Vera extract (blend 1 leaf in 1 litre water, filter) every 10 days — natural antibacterial action",
      "Avoid overhead irrigation — use drip to keep foliage dry; bacteria spread in water droplets",
      "Remove infected plant debris promptly and dispose away from field — do not compost"
    ],
    description: "A bacterial disease causing spotting on leaves, stems, and fruit, leading to defoliation and severe loss of fruit marketability.",
    symptoms: ["Small dark water-soaked spots on leaves enlarging with yellow margins", "Raised scabby lesions on fruit surface", "Premature defoliation exposing fruit to sunscald"],
    cause: "Xanthomonas campestris pv. vesicatoria (Bacteria)"
  },
  {
    id: "tomato_early",
    crop: "Tomato",
    disease_name: "Early Blight",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Chlorothalonil 75 WP @ 2g per litre — begin at 30 days after transplanting, repeat every 7-10 days for 4 sprays",
      "Spray Mancozeb 75 WP @ 2g per litre — protective spray alternated with Chlorothalonil for resistance management",
      "Spray Azoxystrobin 23 SC @ 1ml per litre — systemic fungicide for curative action when disease is established"
    ],
    organic_cure: [
      "Stake plants to lift foliage off ground — lower leaf contact with soil is primary infection route",
      "Mulch soil with straw or plastic to prevent soil splash and conserve moisture",
      "Remove lower diseased leaves and dispose — do not leave in field; reduces inoculum load"
    ],
    description: "A common fungal disease of tomato starting from lower, older leaves and progressing upward, reducing yield and fruit quality.",
    symptoms: ["Dark brown circular spots with concentric target-board rings on lower leaves first", "Yellow halo around each lesion", "Premature leaf yellowing and defoliation"],
    cause: "Alternaria solani (Fungus)"
  },
  {
    id: "tomato_late",
    crop: "Tomato",
    disease_name: "Late Blight",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "URGENT: Spray Metalaxyl + Mancozeb (Ridomil Gold) @ 2.5g per litre — apply immediately at first grey spots, repeat every 7 days",
      "Spray Dimethomorph 50 WP @ 1g per litre — highly effective in cool, wet outbreak conditions",
      "Spray Cymoxanil + Mancozeb @ 2.5g per litre — use in rotation with Metalaxyl to prevent resistance"
    ],
    organic_cure: [
      "No effective organic cure once late blight establishes — remove and burn infected plants immediately",
      "Spray Copper-based Bordeaux mixture (1%) every 5-7 days during cool and wet weather as preventive",
      "Keep foliage dry — use drip irrigation, avoid wetting leaves especially in evening"
    ],
    description: "A highly destructive disease that can destroy an entire tomato crop within 7-10 days in cool, wet weather.",
    symptoms: ["Large irregular water-soaked greasy grey-green spots on leaves expanding rapidly", "White cottony sporulation on leaf undersides in humid conditions", "Brown-black firm rot on fruit from stem end"],
    cause: "Phytophthora infestans (Oomycete)"
  },
  {
    id: "tomato_mold",
    crop: "Tomato",
    disease_name: "Leaf Mold",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Carbendazim 50 WP @ 1g per litre — apply at first symptom, repeat every 10 days for 3 sprays",
      "Spray Chlorothalonil 75 WP @ 2g per litre — effective preventive spray in high-humidity conditions",
      "Spray Mancozeb 75 WP @ 2g per litre — use as rotation partner to prevent fungicide resistance"
    ],
    organic_cure: [
      "Increase ventilation in greenhouse or poly-house — Leaf Mold thrives when relative humidity is above 85%",
      "Reduce irrigation frequency — avoid wetting foliage, use drip at base of plant",
      "Prune lower leaves to improve air flow through canopy; remove infected leaves and dispose"
    ],
    description: "A fungal disease predominantly in greenhouse tomatoes, thriving in high humidity, causing yellow spots on upper leaf surface and olive-green mold below.",
    symptoms: ["Pale yellow diffuse spots on upper leaf surface", "Distinctive olive-green to grey velvety mold growth on corresponding lower surface", "Infected leaves curl, dry up, and fall"],
    cause: "Passalora fulva (Fungus)"
  },
  {
    id: "tomato_sept",
    crop: "Tomato",
    disease_name: "Septoria Leaf Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Mancozeb 75 WP @ 2g per litre — start at first spot appearance on lower leaves, repeat every 7-10 days",
      "Spray Chlorothalonil 75 WP @ 2g per litre — protective spray during wet weather, alternate with Mancozeb",
      "Spray Copper Oxychloride @ 3g per litre — use when spots are numerous and leaves start yellowing"
    ],
    organic_cure: [
      "Remove and dispose of all lower infected leaves immediately — key to slowing disease spread",
      "Water at base of plant only — avoid wetting leaves as spores spread through water splash",
      "Apply compost mulch around plants to prevent soil splash carrying spores onto lower foliage"
    ],
    description: "A fungal disease causing numerous small circular spots on lower leaves that spread upward, causing defoliation and reducing fruit size.",
    symptoms: ["Numerous small circular spots (3-5 mm) with white-grey center and dark brown border", "Small black dots visible in center of spots under magnification (pycnidia)", "Progressive yellowing and defoliation from bottom upward"],
    cause: "Septoria lycopersici (Fungus)"
  },
  {
    id: "tomato_mites",
    crop: "Tomato",
    disease_name: "Spider Mites",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Spiromesifen 22.9 SC @ 1ml per litre — highly effective miticide, apply at first stippling symptom, repeat after 14 days",
      "Spray Abamectin 1.8 EC @ 0.5ml per litre — targets all mite life stages, apply in early morning or evening",
      "Spray Propargite 57 EC @ 2ml per litre — effective knockdown miticide, do not apply more than twice per season"
    ],
    organic_cure: [
      "Strong water jet spray on leaf undersides every 2-3 days to physically dislodge mites and wash off webbing",
      "Spray Neem Oil @ 5ml per litre with soap — suffocates eggs and nymphs, apply every 7 days on leaf undersides",
      "Release predatory mite Phytoseiulus persimilis in field — natural biological control agent"
    ],
    description: "Tiny two-spotted spider mites that suck plant sap from leaf undersides, causing characteristic yellow stippling, bronzing, and fine webbing in dry, hot conditions.",
    symptoms: ["Fine yellow stippling (tiny dots) on upper leaf surface from mite feeding below", "Fine silky webbing on leaf undersides and growing tips in heavy infestation", "Leaves turn bronze-brown and dry up — plants look scorched in severe cases"],
    cause: "Tetranychus urticae (Two-Spotted Spider Mite)"
  },
  {
    id: "tomato_target",
    crop: "Tomato",
    disease_name: "Target Spot",
    nature: "Moderate",
    severity_default: "Moderate",
    chemical_cure: [
      "Spray Azoxystrobin 23 SC @ 1ml per litre — systemic action, apply at first lesion appearance, repeat after 14 days",
      "Spray Chlorothalonil 75 WP @ 2g per litre — protective spray before humid weather periods",
      "Spray Boscalid + Pyraclostrobin (Bellis) @ 0.8g per litre — premium combination for target spot in high-value crops"
    ],
    organic_cure: [
      "Remove and destroy all crop debris after harvest — fungus survives in plant residue on soil surface",
      "Avoid overhead irrigation — wet conditions on leaf surface promote spore germination and infection",
      "Rotate tomato with non-solanaceous crops (maize, beans) for at least 2 years to break disease cycle"
    ],
    description: "A fungal disease causing ringed brown lesions on leaves, stems, and fruit, typically appearing after flowering when plants are under stress.",
    symptoms: ["Brown lesions with faint concentric rings on leaves", "Spots coalesce causing large dead leaf areas", "Dark brown sunken lesions on fruit reducing quality"],
    cause: "Corynespora cassiicola (Fungus)"
  },
  {
    id: "tomato_mos",
    crop: "Tomato",
    disease_name: "Mosaic Virus",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "No chemical cure for virus infection — remove infected plants immediately to prevent spread",
      "Spray Imidacloprid 17.8 SL @ 0.5ml per litre to control aphid and insect vectors transmitting the virus",
      "Disinfect all tools with 10% bleach solution or 70% alcohol before and after use in infected area"
    ],
    organic_cure: [
      "Wash hands and pruning tools with milk (casein protein inactivates TMV) before touching healthy plants",
      "Remove weeds regularly — they serve as virus reservoir for insect vectors",
      "Avoid smoking near tomato plants — Tobacco Mosaic Virus is present in cigarette tobacco and spreads by hands"
    ],
    description: "A highly contagious viral disease with no cure, spreading through mechanical contact (hands, tools) and insect vectors, causing mottled leaves and distorted fruit.",
    symptoms: ["Mottled pattern of light and dark green on leaves giving mosaic appearance", "Leaf blade distortion — fern-like or filiform (shoe-string) leaves in severe cases", "Fruit shows yellow blotches with poor fill and distorted shape"],
    cause: "Tobacco Mosaic Virus (TMV)"
  },
  {
    id: "tomato_curl",
    crop: "Tomato",
    disease_name: "Yellow Leaf Curl",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "No chemical cure for virus — all treatment targets Whitefly vector",
      "Spray Imidacloprid 17.8 SL @ 0.5ml per litre — apply from seedling stage in nursery, repeat at 15-day intervals",
      "Spray Thiamethoxam 25 WG @ 0.3g per litre — alternate with Imidacloprid to prevent Whitefly resistance"
    ],
    organic_cure: [
      "Install Yellow Sticky Traps @ 15-20 per acre — highly attractive to adult Whiteflies",
      "Use reflective silver/aluminum mulch on soil — disorients Whitefly movement and reduces landing on plants",
      "Spray Neem Oil @ 5ml per litre every 7 days — repels and disrupts Whitefly feeding and reproduction"
    ],
    description: "A viral disease transmitted by Whiteflies causing severe yellowing, curling, and stunting of tomato plants. Infected plants rarely produce marketable fruit.",
    symptoms: ["Leaves curl strongly upward with yellow margins and edges", "Young leaves are small, crumpled, and pale yellow", "Plants are severely stunted with drastically reduced fruit setting"],
    cause: "Tomato Yellow Leaf Curl Virus (TYLCV) — Begomovirus — Vector: Whitefly"
  },
  {
    id: "tomato_healthy",
    crop: "Tomato",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — plant is healthy"],
    organic_cure: [
      "Spray Calcium Nitrate @ 1g per litre every 15 days — prevents Blossom End Rot and improves fruit quality",
      "Stake or cage plants properly — supports heavy fruit load and keeps foliage off wet soil",
      "Monitor weekly for Early Blight, Late Blight, and Spider Mites — early detection saves significant spray cost"
    ],
    description: "Healthy tomato plant with vigorous growth and normal fruit development.",
    symptoms: ["Deep green leaves", "Normal flower and fruit set", "No spots, mold, curling, or mite webbing"],
    cause: "N/A"
  },

  // WHEAT (4) 
  {
    id: "wheat_brown_rust",
    crop: "Wheat",
    disease_name: "Brown Rust",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Propiconazole 25 EC (Tilt) @ 1ml per litre — most effective, apply at first pustule appearance, repeat after 21 days",
      "Spray Tebuconazole 25.9 EC @ 1ml per litre — highly systemic, controls Brown Rust effectively",
      "Spray Hexaconazole 5 SC @ 2ml per litre — use as alternative in rotation to prevent fungicide resistance"
    ],
    organic_cure: [
      "Use rust-resistant wheat varieties — single most effective management strategy",
      "Avoid excess Nitrogen fertilizer — high N creates soft, lush tissue highly susceptible to rust",
      "Early sowing (within recommended window) — late-sown wheat is significantly more vulnerable to rust epidemics"
    ],
    description: "Also known as Leaf Rust, this fungal disease causes orange-brown powdery pustules scattered on leaves, reducing grain weight and yield by up to 30-40%.",
    symptoms: ["Orange-brown powdery pustules scattered irregularly on upper leaf surface", "Pustules release orange dust when touched", "Heavy infection causes premature leaf drying and shriveled grains"],
    cause: "Puccinia triticina (Fungus)"
  },
  {
    id: "wheat_yellow_rust",
    crop: "Wheat",
    disease_name: "Yellow Rust",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Propiconazole 25 EC @ 1ml per litre — apply at first stripe symptom, repeat after 21 days",
      "Spray Tebuconazole 25.9 EC @ 1ml per litre — highly effective systemic option for Yellow Rust",
      "Spray Triadimefon 25 WP @ 1g per litre — use as early preventive spray when cool and humid conditions persist"
    ],
    organic_cure: [
      "Use Yellow Rust resistant wheat varieties — check with local agriculture department for recommended varieties",
      "Avoid late sowing — crop planted late in cool season faces maximum Yellow Rust pressure",
      "Monitor crop regularly from tillering stage — Yellow Rust spreads very fast in cool humid weather"
    ],
    description: "Also known as Stripe Rust, this fungal disease causes yellow-orange pustules arranged in characteristic stripes along leaves, and can cause 50-70% yield loss in severe epidemics.",
    symptoms: ["Yellow-orange pustules arranged in parallel stripes along leaves", "White to yellow striping pattern visible on infected leaves from a distance", "Severely infected plants have completely yellow leaves before heading"],
    cause: "Puccinia striiformis (Fungus)"
  },
  {
    id: "wheat_sept",
    crop: "Wheat",
    disease_name: "Septoria",
    nature: "High",
    severity_default: "High",
    chemical_cure: [
      "Spray Chlorothalonil 75 WP @ 2g per litre — apply from Zadoks GS31 (first node) onwards, repeat every 14 days for 2-3 sprays",
      "Spray Propiconazole 25 EC @ 1ml per litre — systemic option for curative action when infection is established",
      "Spray Epoxiconazole + Boscalid (pre-mix) @ 1ml per litre — premium combination for flag leaf protection"
    ],
    organic_cure: [
      "Deep plow all crop residue after harvest — Septoria survives on straw on soil surface as primary inoculum source",
      "Use resistant wheat varieties whenever available in your region",
      "Maintain crop rotation with non-cereal crops — reduces fungal spore buildup in field over years"
    ],
    description: "The most economically important wheat disease in many regions, causing blotches on leaves and ultimately destroying the flag leaf, which contributes 50-70% of grain fill.",
    symptoms: ["Irregular yellow-brown blotches on leaves starting from lower leaves", "Small black pycnidia (fruiting bodies) visible within lesions — diagnostic sign", "Flag leaf infection causes severe grain shrinkage and reduced grain weight"],
    cause: "Zymoseptoria tritici (Fungus)"
  },
  {
    id: "wheat_healthy",
    crop: "Wheat",
    disease_name: "Healthy",
    nature: "Safe",
    severity_default: "None",
    chemical_cure: ["No spray required — crop is healthy"],
    organic_cure: [
      "Apply Bio-fertilizers — Azotobacter @ 250g per acre at sowing improves Nitrogen availability",
      "Monitor flag leaf health at GS39-GS59 stage — protecting the flag leaf is critical for grain fill",
      "Seed treatment with Trichoderma @ 4g per kg seed before sowing for soil-borne disease prevention"
    ],
    description: "Healthy wheat crop with uniform green canopy and good grain filling.",
    symptoms: ["Uniform green leaf blades", "No rust pustules, blotches, or mold", "Full erect heads with well-filled grains"],
    cause: "N/A"
  }

];

module.exports = diseaseData;