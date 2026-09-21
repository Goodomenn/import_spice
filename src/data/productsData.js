// Global Import & Export Commercial Products Data

export const categoriesMeta = {
  import: [
    { id: 'tires', name: 'Tires', label: 'Commercial & OTR Tires', icon: 'CircleDot', division: 'import', description: 'Heavy-duty commercial radial tires, passenger car radials, and agricultural OTR tires engineered for extreme load bearing.' },
    { id: 'batteries', name: 'Batteries', label: 'Automotive & Solar Batteries', icon: 'BatteryCharging', division: 'import', description: 'Maintenance-free calcium-alloy automotive batteries, deep-cycle solar tubular batteries, and telecom backup cells.' },
    { id: 'spices', name: 'Spices', label: 'Premium Culinary Spices', icon: 'Sparkles', division: 'import', description: 'Sun-dried whole and ground spices sourced directly from historic spice belt plantations with high volatile oil content.' }
  ],
  export: [
    { id: 'leather', name: 'Leather Products', label: 'Bovine & Crust Leather', icon: 'Briefcase', division: 'export', description: 'Premium wet-blue bovine hides, finished full-grain leather sides, and bespoke handcrafted leather goods.' },
    { id: 'coffee', name: 'Coffee', label: 'Specialty Arabica & Robusta', icon: 'Coffee', division: 'export', description: 'High-altitude washed Kenya AA, Ethiopian Yirgacheffe, peaberry, and premium screen-18 Robusta beans.' },
    { id: 'sesame', name: 'Sesame Seeds', label: 'Humera & Hulled Sesame', icon: 'Wheat', division: 'export', description: 'Natural white Humera sesame seeds 99.9% purity machine-cleaned and organic hulled edible grade seeds.' },
    { id: 'nuts', name: 'Nuts', label: 'Cashews, Macadamia & Peanuts', icon: 'Nut', division: 'export', description: 'Raw cashew nuts in shell, jumbo roasted kernels (W180/W240), vacuum-packed macadamia, and bold red runner peanuts.' },
    { id: 'vegetables', name: 'Vegetables', label: 'Fresh Export Farm Produce', icon: 'Sprout', division: 'export', description: 'Farm-fresh horticultural exports, hand-picked French beans, snow peas, avocados, and fresh culinary herbs.' }
  ]
};

export const productsData = [
  // ==========================================
  // IMPORT: TIRES
  // ==========================================
  {
    id: 'tbr-truck-tires',
    name: 'Heavy-Duty Truck Radials (TBR 315/80R22.5)',
    category: 'tires',
    division: 'import',
    subtitle: 'All-Position Long Haul & Regional Commercial Tire',
    specs: {
      origin: 'Tier-1 International Manufacturing Hubs (ISO/TS 16949)',
      size: '315/80R22.5 & 12.00R20 18-20 PR',
      loadIndex: '156/150L (Single 4,000kg / Dual 3,350kg)',
      treadDepth: '16.5 mm Deep Groove Anti-Skid Pattern',
      casing: 'Reinforced 4-Belt Steel Radial Construction',
      certifications: 'DOT, ECE, GCC, CCC, SASO, SONCAP'
    },
    packaging: 'Containerized Bulk Lashing (approx. 240-260 pcs per 40ft HQ)',
    description: 'Engineered for high-mileage highway haulage and demanding regional transport. Features advanced cooling compound technology to prevent heat buildup, stone-ejector grooves, and superior retreadability.'
  },
  {
    id: 'pcr-passenger-tires',
    name: 'Passenger Car Radial Tires (PCR High Performance)',
    category: 'tires',
    division: 'import',
    subtitle: 'Ultra-Quiet Silica Compound Passenger Radials',
    specs: {
      origin: 'East Asia & Europe Export Facilities',
      size: '195/65R15, 205/55R16, 225/45R17, 265/65R17 SUV',
      loadIndex: '91V / 94W / 112H High-Speed Rated',
      treadDepth: '8.5 mm Asymmetric Multi-Channel Tread',
      casing: 'High-Tensile Rayon & Dual Steel Belts',
      certifications: 'EU Tyre Label B/B Wet Grip, E-Mark, DOT'
    },
    packaging: 'Poly-wrapped bundles in 40ft HQ High-Cube shipping containers (~950 to 1,200 pcs)',
    description: 'High-efficiency passenger car radials formulated with nano-silica compounds for enhanced wet braking, low rolling resistance, reduced fuel consumption, and quiet highway performance.'
  },
  {
    id: 'otr-agricultural-tires',
    name: 'Agricultural & Off-The-Road (OTR / Earthmover)',
    category: 'tires',
    division: 'import',
    subtitle: 'Severe-Duty Mining, Quarry & Agricultural Tractor Tires',
    specs: {
      origin: 'Heavy Industrial Tire Plants',
      size: '23.5-25, 17.5-25, 18.4-38 R-1 Agro Lugs',
      loadIndex: 'E-3/L-3 Rock Pattern / R-1 Deep Farm Cleats',
      treadDepth: '32 mm - 54 mm Extra Cut-Resistant Rubber',
      casing: 'Multi-Ply Nylon & High-Strength Steel Breakers',
      certifications: 'ISO 9001:2015, ECE, DOT'
    },
    packaging: 'Unwrapped or Bead-Protected Breakbulk / 40ft Open Top / 40ft HQ',
    description: 'Designed for harsh operating conditions across mining, heavy construction, and heavy agricultural cultivation. Cut-and-chip resistant compound prevents puncturing in sharp rocky terrain.'
  },

  // ==========================================
  // IMPORT: BATTERIES
  // ==========================================
  {
    id: 'smf-automotive-battery',
    name: 'Automotive Sealed Maintenance-Free (SMF 12V 100Ah)',
    category: 'batteries',
    division: 'import',
    subtitle: 'Lead-Calcium Alloy Extended-Life Starter Battery',
    specs: {
      origin: 'Certified Automotive Battery Manufacturing Complexes',
      voltageCapacity: '12V 100Ah (C20 Rating) / 850 CCA (SAE)',
      technology: 'Sealed Calcium-Silver Expanded Grid Plate',
      terminal: 'Standard A-Type Tapered Lead Posts (DIN/JIS)',
      casing: 'Flame-Retardant Polypropylene with Built-in Hydrometer Eye',
      certifications: 'CE, UL, ISO 9001, ISO 14001, RoHS'
    },
    packaging: 'Individual Protective Corrugated Carton, 36 units/pallet with shrink-wrap (~720 units/20ft FCL)',
    description: 'Zero-maintenance automotive battery engineered for tropical and sub-tropical climates. Silver-calcium alloy grid minimizes water loss and delivers immediate high-amperage cranking in all weather.'
  },
  {
    id: 'solar-tubular-battery',
    name: 'Deep-Cycle Solar Tubular Battery (12V 200Ah)',
    category: 'batteries',
    division: 'import',
    subtitle: 'High-Cycle Stationary Storage for Solar & Inverter Systems',
    specs: {
      origin: 'Energy Storage Technology Plants',
      voltageCapacity: '12V 200Ah @ C10 Discharge Rate',
      technology: 'Gauntlet High-Pressure Die-Cast Tubular Positive Plates',
      cycleLife: '1,500+ Cycles at 80% Depth of Discharge (DoD)',
      electrolyte: 'Low-Antimony Acid with Ceramic Vent Plugs',
      certifications: 'IEC 60896, IEC 61427 Photovoltaic Standard'
    },
    packaging: 'Heavy-Duty Export Wooden Pallets (approx. 200-240 units per 20ft container with hazmat IMO declaration)',
    description: 'Industrial-grade deep-cycle battery built specifically for renewable solar and backup inverter systems. Tubular plate design resists shedding and thermal stress during cyclic daily charging.'
  },
  {
    id: 'industrial-ups-battery',
    name: 'Industrial VRLA AGM Backup Battery (12V 150Ah)',
    category: 'batteries',
    division: 'import',
    subtitle: 'Absorbent Glass Mat Telecom & Data Center Backup',
    specs: {
      origin: 'Precision Power Equipment Manufacturing',
      voltageCapacity: '12V 150Ah Front-Access / Top-Terminal',
      technology: 'Valve Regulated Lead Acid (VRLA) AGM',
      designLife: '10-12 Years Floating Service at 25°C',
      internalResistance: 'Approx. 4.2 mΩ (Ultra-Low Self-Discharge)',
      certifications: 'UL94-V0 Flame Retardant, CE, IEC 60896-21/22'
    },
    packaging: 'Sturdy export carton with foam end-caps, reinforced pallets',
    description: 'Critical power backup batteries for telecom cell towers, uninterrupted power supplies (UPS), and hospital electrical grids. Flame-arrestor safety vents and spill-proof leak-tight assembly.'
  },

  // ==========================================
  // IMPORT: SPICES
  // ==========================================
  {
    id: 'tellicherry-black-pepper',
    name: 'Tellicherry Garbled Extra Bold Black Pepper (TGEB)',
    category: 'spices',
    division: 'import',
    subtitle: 'Sun-Dried Malabar Coast Whole Black Peppercorns',
    specs: {
      origin: 'Malabar Coast / Western Ghats Spice Plantations',
      grade: 'TGEB (Tellicherry Garbled Extra Bold) 4.75mm+ Berry Size',
      density: '570 - 600 g/l Bulk Density',
      piperine: 'Minimum 5.5% - 6.2% Natural Piperine Content',
      moisture: 'Max 11.5% with Machine Destoned / Magnet Cleaned',
      certifications: 'ISO 22000, HACCP, ASTA Cleanliness Standard'
    },
    packaging: '25kg / 50kg Double-Lined Multiwall Kraft Paper Bags or Jute Sacks with Food-Grade Poly Liner',
    description: 'The world benchmark for whole black peppercorns. Extra bold berries sun-cured to a rich dark color, providing pungent aromatics, complex fruity undertones, and robust sharp heat.'
  },
  {
    id: 'green-cardamom-bold',
    name: 'Green Cardamom Extra Bold (8mm+ Jumbo Pods)',
    category: 'spices',
    division: 'import',
    subtitle: 'Vibrant Emerald Green Whole Cardamom Pods',
    specs: {
      origin: 'High-Altitude Cloud Forest Plantations',
      grade: 'Alleppey Green Extra Bold (AGEB) 8mm and 8.5mm+',
      color: 'Intense Natural Deep Green (Zero Artificial Coloring)',
      volatileOil: '7.5% - 8.5% Essential Volatile Oils',
      moisture: 'Max 10% carefully kiln-cured in wood-fired dryers',
      certifications: 'Spices Board Certified, Phytosanitary Certificate'
    },
    packaging: '5kg Inner Food-Grade Carton x 2 per 10kg Master Carton or 25kg Poly Bags',
    description: 'Known as the Queen of Spices, our premium jumbo green cardamom pods are hand-picked at peak maturity, gently dried to seal in intoxicating camphor and sweet citrus aromatics.'
  },
  {
    id: 'zanzibar-whole-cloves',
    name: 'Zanzibar Whole Cloves (Hand-Sorted Grade 1)',
    category: 'spices',
    division: 'import',
    subtitle: 'Sun-Cured Aromatic Flower Buds with Full Heads',
    specs: {
      origin: 'Zanzibar & Madagascar Archipelago Estates',
      grade: 'Hand-Picked Special (HPS) / FAQ Grade 1',
      eugenolContent: '18% - 21% Eugenol Essential Oil',
      headlessTolerance: '< 2.5% Maximum Headless Cloves',
      moisture: 'Max 12.0% with Negligible Foreign Matter (<0.5%)',
      certifications: 'HACCP, Bureau of Standards Export Certificate'
    },
    packaging: '10kg / 25kg Poly-lined export cartons or woven PP bags',
    description: 'Rich dark reddish-brown clove buds renowned worldwide for their high essential oil content, intense fragrance, and whole intact heads. Essential for culinary, extract, and pharmaceutical uses.'
  },
  {
    id: 'ceylon-cinnamon-quills',
    name: 'Ceylon Cinnamon Alba Grade (True Cinnamon)',
    category: 'spices',
    division: 'import',
    subtitle: 'Delicate Hand-Rolled Cinnamomum Verum Quills',
    specs: {
      origin: 'Southern Sri Lanka Organic Certified Plantations',
      grade: 'Alba Grade (Pencil-thin quills under 6mm diameter)',
      coumarin: '< 0.004% Safe Natural Trace (Ultra-Low Coumarin)',
      oilContent: '2.5% - 3.2% Sweet Cinnamaldehyde',
      appearance: 'Smooth Pale Tan Golden Multi-Layered Rolls',
      certifications: 'USDA Organic, EU Organic, ISO 6539'
    },
    packaging: '25kg Bundles or Cut Lengths in Custom Export Cartons',
    description: 'The pinnacle of true cinnamon. Hand-peeled and tightly rolled like Havana cigars, Ceylon Alba yields a delicate, sweet floral aroma without the harsh astringency of Cassia bark.'
  },

  // ==========================================
  // EXPORT: LEATHER PRODUCTS
  // ==========================================
  {
    id: 'full-grain-bovine-leather',
    name: 'Finished Full-Grain Bovine Leather Sides',
    category: 'leather',
    division: 'export',
    subtitle: 'Drum-Dyed Aniline & Semi-Aniline Furniture & Footwear Leather',
    specs: {
      origin: 'East African Pastoral Bovine Stock (Free-Range)',
      substance: '1.2 - 1.4 mm / 1.8 - 2.0 mm Calibrated Thickness',
      selection: 'TR1 / TR2 (Tannery Run 80/20 High Yield)',
      tannage: 'Chrome-Tanned or Vegetable Eco-Friendly Retannage',
      temper: 'Medium Soft with Smooth Natural Pebble Grain',
      certifications: 'LWG (Leather Working Group) Audited, REACH Compliant'
    },
    packaging: 'Carefully wrapped in rolls of 5-10 sides, shrink-wrapped on wooden pallets (~5,000 sq.ft per pallet)',
    description: 'Sourced from healthy free-range cattle, tanned in state-of-the-art tannery complexes. Offers superior tensile strength, breathability, and rich natural surface character for luxury shoes, upholstery, and accessories.'
  },
  {
    id: 'wet-blue-hides',
    name: 'Wet-Blue Bovine Hides (Machine Flayed)',
    category: 'leather',
    division: 'export',
    subtitle: 'Export Grade Raw-Tanned Preserved Blue Hides',
    specs: {
      origin: 'Modern Certified Abattoirs & Industrial Tanyards',
      weightClass: 'Heavy Weight (28kg+ Green Weight) / Light 18-24kg',
      tannageMethod: 'Full Chrome Wet-Blue Preserved against Fungal Decay',
      surfaceYield: 'Average 38 - 48 sq.ft per Whole Hide',
      gradeBreakdown: 'Grade I/II/III 70/20/10 Ratio',
      certifications: 'Veterinary Sanitary Inspection Certificate, OIE Compliant'
    },
    packaging: 'Folded on ISPM-15 treated heat pallets, bundled with steel strapping (~1,000 hides per 20ft container)',
    description: 'Prime wet-blue hides with zero tick holes, machine-flayed with clean cuts and uniform chrome penetration. Ready for immediate retanning into high-end automotive, garment, or sole leathers.'
  },
  {
    id: 'crust-sheep-goat-leather',
    name: 'Crust Goat & Sheep Leather Skins',
    category: 'leather',
    division: 'export',
    subtitle: 'Semi-Processed Vegetable & Chrome Crust Skins',
    specs: {
      origin: 'Sub-Saharan Highland Hair Sheep & Goats',
      thickness: '0.7 - 0.9 mm / 0.9 - 1.1 mm Uniform Shaving',
      size: '4 - 7 sq.ft per skin (High Tensile Density)',
      characteristics: 'Tight pore structure, silky fine grain, high tear resistance',
      finishState: 'Natural Crust ready for buffing, embossing, or dye-through',
      certifications: 'ISO 14001 Tannery Verification, REACH Tested'
    },
    packaging: 'Bales of 500-1000 skins packed in heavy poly-lined export bales',
    description: 'Highland hair sheep and goat skins prized by European gloving and garment makers for their tight grain structure, soft supple hand-feel, and unmatched elasticity.'
  },

  // ==========================================
  // EXPORT: COFFEE
  // ==========================================
  {
    id: 'kenya-aa-coffee',
    name: 'Kenya AA Washed Arabica Specialty Green Coffee',
    category: 'coffee',
    division: 'export',
    subtitle: 'Volcanic Soil High-Altitude Micro-Lot Green Beans',
    specs: {
      origin: 'Mount Kenya & Aberdare Slopes (1,700m - 2,100m ASL)',
      varietals: 'SL28, SL34, Batian & Ruiru 11',
      screenSize: 'Screen 17/18 (AA Giant Bean Calibration)',
      processing: 'Fully Washed, Fermented 24h & Sun-Dried on Raised African Beds',
      cupProfile: 'Complex Blackcurrant, Grapefruit, Bright Phosphoric Acidity, Syrupy Body',
      scaScore: 'SCA 87.5 - 89.0 Cup Score',
      moisture: '10.5% - 11.5% with Water Activity < 0.60'
    },
    packaging: '60kg GrainPro Moisture-Barrier Inner Bags inside Jute Export Sacks (~320 bags/20ft FCL)',
    description: 'Regarded as one of the world’s most luminous coffees. Grown in mineral-rich red volcanic loam under equatorial sunshine, yielding unmatched sweetness, winey complexity, and sparkling clean acidity.'
  },
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe Specialty Grade 1 Natural',
    category: 'coffee',
    division: 'export',
    subtitle: 'Indigenous Heirloom Sun-Dried Floral Coffee Beans',
    specs: {
      origin: 'Gedeo Zone, Yirgacheffe Highlands (1,900m - 2,200m ASL)',
      varietals: 'Indigenous Heirloom Cultivars',
      grade: 'Grade 1 Specialty (Zero Primary Defects, < 3 Secondary Defects)',
      processing: 'Natural Sun-Dried on Raised Bamboo Beds with Ripe Cherry Selection',
      cupProfile: 'Jasmine Blossoms, Bergamot, Ripe Peach, Candied Strawberry, Silky Body',
      scaScore: 'SCA 88.0 - 90.5 Cup Score',
      moisture: '10.8% - 11.3%'
    },
    packaging: '60kg GrainPro Bag-in-Jute with Phytosanitary and Origin Certification',
    description: 'The birthplace of wild Arabica coffee. Naturally dried inside the whole sweet cherry, producing a perfume-like explosion of honeysuckle, bergamot tea, and luscious stone fruit sweetness.'
  },
  {
    id: 'kenya-peaberry-coffee',
    name: 'Highland Kenya Peaberry (Grade PB)',
    category: 'coffee',
    division: 'export',
    subtitle: 'Concentrated Oval Single-Bean Rare Selection',
    specs: {
      origin: 'Nyeri & Kirinyaga High Plateaus',
      varietals: 'SL28, SL34 Selected Peaberry Mutations (~5% of Harvest)',
      screenSize: 'Selected Oval Round Screen PB',
      processing: 'Washed and Double-Soaked Mountain Spring Water',
      cupProfile: 'Tangerine Marmalade, Lemongrass, Floral Jasmine, Intensely Sweet Finish',
      scaScore: 'SCA 86.5 - 88.0 Cup Score',
      moisture: '10.5% - 11.2%'
    },
    packaging: '30kg or 60kg GrainPro & Natural Burlap Sacks',
    description: 'Where only a single round seed forms inside the coffee cherry, naturally concentrating sugars and volatile aromatics. Roasters appreciate peaberry for its even heat conduction and punchy citrus notes.'
  },

  // ==========================================
  // EXPORT: SESAME SEEDS
  // ==========================================
  {
    id: 'humera-white-sesame',
    name: 'Natural White Humera Sesame Seeds (99.9% Cleaned)',
    category: 'sesame',
    division: 'export',
    subtitle: 'World Benchmark Edible Sweet White Sesame',
    specs: {
      origin: 'Humera & Metema Fertile Lowlands',
      purity: '99.90% Double Sortex Machine Cleaned',
      oilContent: '50.5% - 53.0% Rich Natural Oil Content',
      color: 'Uniform Natural Milky White / Cream',
      moisture: 'Max 5.0% - 6.0% Moisture Level',
      ffa: '< 1.5% Free Fatty Acids (Cold-Press Stable)',
      certifications: 'Non-GMO, Phytosanitary, Certificate of Analysis (COA)'
    },
    packaging: '25kg / 50kg Multiwall Paper Bags or PP Bags with inner poly lining (~19 MT per 20ft container)',
    description: 'Renowned globally for bakery, confectionery, and premium tahini paste. Humera sesame is prized for its high sweet nutty aroma, plump oval seeds, and natural golden oil yield.'
  },
  {
    id: 'hulled-organic-sesame',
    name: 'Hulled Mechanical White Sesame Seeds',
    category: 'sesame',
    division: 'export',
    subtitle: 'Zero-Chemical Mechanically De-Hulled Bakery Grade',
    specs: {
      origin: 'Certified Organic Farming Cooperatives',
      purity: '99.98% Laser-Sorted / Metal-Detected',
      processing: 'Wet-Hulled using Pure Mountain Spring Water (No Caustic Soda)',
      moisture: 'Max 4.5% Moisture with crisp crunch',
      oilContent: 'Minimum 52.0% Natural Triglycerides',
      certifications: 'Organic Certified (NOP/EU), BRCGS, Kosher, Halal'
    },
    packaging: '25kg Multi-Ply Paper Sacks with Polyethylene Moisture Shield',
    description: 'Pure snow-white hulled seeds produced via mechanical friction peeling. Gentle on digestion, ideal for gourmet hamburger buns, artisanal breads, energy bars, and high-end sushi bars.'
  },

  // ==========================================
  // EXPORT: NUTS
  // ==========================================
  {
    id: 'raw-cashew-nuts-rcn',
    name: 'Raw Cashew Nuts in Shell (RCN Outturn 48-52 lbs)',
    category: 'nuts',
    division: 'export',
    subtitle: 'High-KOR Sun-Dried Raw Cashews for Processing Plants',
    specs: {
      origin: 'East & West African Cashew Belts (Kilwa / Lamu / Ivory Coast)',
      kor: '48 - 52+ lbs per 80kg bag (Kernel Outturn Ratio)',
      nutCount: '170 - 195 nuts per Kilogram',
      moisture: 'Max 8.0% - 9.0% Sun-Cured under Equatorial Breeze',
      defectiveNuts: '< 0.5% Spoiled or Immature',
      certifications: 'Third-Party SGS / Bureau Veritas Weight & Quality Certificate'
    },
    packaging: '80kg Jute Sacks with Natural Ventilation (approx. 17-18 MT per 20ft container)',
    description: 'Direct procurement from coastal grower cooperatives. High KOR and large kernel yields provide processing factories in Vietnam, India, and the Middle East with top-grade whole white kernels.'
  },
  {
    id: 'roasted-cashew-kernels',
    name: 'Premium Roasted Cashew Kernels (W180 / W240)',
    category: 'nuts',
    division: 'export',
    subtitle: 'Jumbo Whole King of Cashews Roasted to Perfection',
    specs: {
      origin: 'Integrated Processing Facilities',
      grade: 'W180 (King Size Jumbo) & W240 (Standard Large)',
      roasting: 'Even Dry-Roasted or Lightly Himalayan Salted',
      moisture: '< 3.0% Crisp Crunchy Texture',
      brokenTolerance: '< 2.0% Splits / Broken Kernels',
      certifications: 'HACCP, ISO 22000, US FDA Registered'
    },
    packaging: '10kg or 22.68kg (50 lbs) Nitrogen-Flushed Vacuum Pouches in Sturdy Master Cartons',
    description: 'Giant-sized whole cashew kernels celebrated for their rich buttery sweetness and golden roasted crunch. Vacuum packed under inert gas to prevent oxidation and guarantee a 18-month shelf life.'
  },
  {
    id: 'shelled-macadamia-nuts',
    name: 'Shelled Raw Macadamia Kernels (Style 1 & Style 2)',
    category: 'nuts',
    division: 'export',
    subtitle: 'Cold-Cracked Crisp Creamy Macadamia Nuts',
    specs: {
      origin: 'High-Altitude Volcanic Highlands',
      grade: 'Style 1 (95%+ Whole Kernels, 16mm-20mm) & Style 2 (Wholes & Halves)',
      color: 'Uniform Pale Ivory / Cream',
      moisture: '1.2% - 1.5% Slow Dehydrated in Desiccant Chambers',
      peroxideValue: '< 1.5 meq/kg (Fresh Cold-Cracked Harvest)',
      certifications: 'GlobalGAP, BRCGS Food Safety, HACCP'
    },
    packaging: '11.34kg (25 lbs) Multi-Barrier Nitrogen Foil Bags in Heavy Cartons',
    description: 'The queen of dessert nuts. Grown on volcanic mountain slopes, our macadamias are carefully deshelled to preserve whole spherical kernels with unmatched velvety fat profile and crisp bite.'
  },
  {
    id: 'bold-red-peanuts',
    name: 'Bold Red Runner Peanuts (Counts 40/50 & 50/60)',
    category: 'nuts',
    division: 'export',
    subtitle: 'Aflatoxin-Tested Whole Shelled Groundnuts',
    specs: {
      origin: 'Fertile Savannah Loam Agricultural Zones',
      variety: 'Bold Red Runner / Java Peanut Type',
      counts: '40/50, 50/60, and 60/70 Kernels per Ounce',
      aflatoxin: '< 4 ppb Total Aflatoxin (EU Stringent Standard)',
      oilContent: '46.0% - 48.5% High Monounsaturated Fats',
      certifications: 'Aflatoxin Lab Test Certificate, Non-GMO, Phytosanitary'
    },
    packaging: '25kg / 50kg Multi-Ply Jute Bags with inner ventilation or 1 MT Jumbo Totes',
    description: 'Naturally sweet and oil-dense groundnuts selected for peanut butter processors, snack confectioners, and direct retail roasting. Rigorously HPLC-tested for zero aflatoxin contamination.'
  },

  // ==========================================
  // EXPORT: VEGETABLES (MATCHED TO REFERENCE IMAGE AESTHETIC!)
  // ==========================================
  {
    id: 'french-green-beans',
    name: 'Fine French Green Beans (Bobby & Extra Fine)',
    category: 'vegetables',
    division: 'export',
    subtitle: 'Hand-Picked Stringless Crisp Haricots Verts',
    plantName: 'Phaseolus vulgaris',
    botanicalClass: 'Fabaceae / Leguminosae',
    specs: {
      origin: 'Great Rift Valley High-Plateau Farm Estates (1,800m ASL)',
      size: 'Extra Fine (6 - 8mm diameter, 10 - 13cm length)',
      freshness: 'Harvested at 06:00 AM, Pre-Cooled to 4°C within 3 Hours',
      shelfLife: '14 - 18 Days under Continuous 4°C - 6°C Cold Chain',
      pesticideResidue: 'MRL Compliant with EU Directive & GLOBALG.A.P',
      certifications: 'GLOBALG.A.P., SMETA Ethical Trade, BRCGS'
    },
    packaging: '1.5kg / 2.0kg / 4.0kg Ventilated Corrugated Euro-Boxes with Micro-Perforated Bags',
    description: 'Extra fine, stringless French beans cultivated under equatorial sunshine with pure river irrigation. Known for their vibrant emerald green snap, delicate crunch, and sweet tender pods.',
    pedestalBg: 'radial-gradient(circle, #2d5a3f 0%, #173623 100%)',
    plantIcon: 'Sprout',
    potType: 'Ceramic Sage Basin'
  },
  {
    id: 'snow-peas-sugar-snaps',
    name: 'Snow Peas & Sugar Snap Peas (Mange-Tout)',
    category: 'vegetables',
    division: 'export',
    subtitle: 'Sweet Crunchy Tender-Pod Horticultural Export',
    plantName: 'Pisum sativum var. saccharatum',
    botanicalClass: 'Legume Pods',
    specs: {
      origin: 'Cool Highland Mountain Microclimates',
      size: 'Pods 7 - 10cm, Flat Translucent Peas / Plump Round Snaps',
      freshness: 'Rapid Hydro-Cooled post harvest to preserve brix sweetness',
      shelfLife: '16 - 21 Days at 2°C - 4°C with 95% Relative Humidity',
      sugarContent: 'High Natural Brix (6.5° - 8.0°)',
      certifications: 'GLOBALG.A.P., Sedex Member, Fairtrade'
    },
    packaging: '2kg & 3kg Export Display Cartons with Moisture Preservation Liners',
    description: 'Tender, sweet, and stringless edible pods with crisp crunch. Rushed via direct cold-chain air-freight to European and Middle Eastern fresh markets within 24 hours of field picking.',
    pedestalBg: 'radial-gradient(circle, #386b4b 0%, #1c422c 100%)',
    plantIcon: 'Leaf',
    potType: 'Terracotta Cylinder'
  },
  {
    id: 'hass-avocados',
    name: 'Fresh Export Hass Avocados (Size 12 - 24)',
    category: 'vegetables',
    division: 'export',
    subtitle: 'Rich Creamy High-Dry-Matter Hass Avocados',
    plantName: 'Persea americana',
    botanicalClass: 'Lauraceae',
    specs: {
      origin: 'Central Highland Orchards & Mount Kenya Slopes',
      dryMatter: 'Minimum 23% - 26% Dry Matter Content (Rich Nutty Flavor)',
      sizes: 'Counts 12, 14, 16, 18, 20, 22, 24 (Weights 150g - 350g)',
      transport: 'Controlled Atmosphere (CA) Sea Reefer (5°C, 4% O2, 6% CO2) or Air Freight',
      postHarvest: 'Fungicide-Free Organic Waxing & Ultrasonic Cleaning',
      certifications: 'GLOBALG.A.P., GRASP Social Practice, Organic'
    },
    packaging: '4.0kg Standard Carton (approx. 5,280 cartons per 40ft CA Reefer Container)',
    description: 'Thick pebbly skin that ripens from rich forest green to deep royal purple. Creamy, buttery texture with zero fiber, celebrated by chefs and retail buyers across Europe and the Gulf.',
    pedestalBg: 'radial-gradient(circle, #2a563b 0%, #153421 100%)',
    plantIcon: 'Sprout',
    potType: 'Handcrafted Stone Urn'
  },
  {
    id: 'baby-leeks-herbs',
    name: 'Baby Leeks & Fresh Culinary Herbs (Basil, Rosemary, Mint)',
    category: 'vegetables',
    division: 'export',
    subtitle: 'Aromatic Greenhouse Cultivated Micro & Baby Veg',
    plantName: 'Allium porrum / Ocimum basilicum',
    botanicalClass: 'Herbs & Alliums',
    specs: {
      origin: 'Hydroponic & Drip-Irrigated Clean Agri-Greenhouses',
      stemLength: 'Leeks: 12 - 15cm tender white shaft / Herbs: 8 - 12cm fresh sprigs',
      preservation: 'Forced-Air Chilled to 2°C with Nitrogen Flushing',
      aroma: 'High Natural Terpenes and Sweet Mild Allium Notes',
      certifications: 'GLOBALG.A.P., HACCP Certified Packing Shed'
    },
    packaging: '100g / 250g Clamshells or 1kg Loose Bunch Cartons with Ice Packs',
    description: 'Hand-selected baby leeks and fresh culinary herbs harvested daily for fine dining, flight catering, and upscale retail. Unblemished, tender stalks with delicate herbal sweetness.',
    pedestalBg: 'radial-gradient(circle, #356647 0%, #1b3d29 100%)',
    plantIcon: 'Feather',
    potType: 'Minimalist Sandstone Cube'
  },
  {
    id: 'baby-spinach-greens',
    name: 'Baby Spinach & Tender Leaf Salad Greens',
    category: 'vegetables',
    division: 'export',
    subtitle: 'Triple-Washed Ready-to-Pack Crisp Young Leaves',
    plantName: 'Spinacia oleracea',
    botanicalClass: 'Amaranthaceae',
    specs: {
      origin: 'High-Altitude Mineral Spring Fed Farms',
      leafSize: 'True Baby Leaves (3 - 6cm uniform length)',
      microbiology: 'Zero Pathogens, Sanitized with Ozonated Pure Water',
      shelfLife: '12 Days under Unbroken 2°C - 4°C Distribution',
      certifications: 'GLOBALG.A.P., IFS Food Safety'
    },
    packaging: '1kg Poly-Bags x 4 per Carton or Modified Atmosphere Retail Pillow Packs',
    description: 'Vibrant jade green tender leaves bursting with iron, lutein, and crisp sweetness. Free from bitterness, harvested in early dawn to ensure maximum leaf turgidity and shelf longevity.',
    pedestalBg: 'radial-gradient(circle, #2e5c3e 0%, #183723 100%)',
    plantIcon: 'Leaf',
    potType: 'Porcelain Round Pot'
  },
  {
    id: 'export-ginger-garlic',
    name: 'Organic Whole Ginger Roots & Purple Garlic',
    category: 'vegetables',
    division: 'export',
    subtitle: 'Sun-Dried Pungent Ginger Hands & Tight Cloved Garlic',
    plantName: 'Zingiber officinale / Allium sativum',
    botanicalClass: 'Root Herbs',
    specs: {
      origin: 'Organic Certified Highland River Valleys',
      size: 'Ginger Hands: 150g - 350g+ / Garlic Bulbs: 5.5cm - 6.5cm diameter',
      moisture: 'Cured & Dry-Skin Sealed to prevent sprouting in transit',
      pungency: 'Extra High Gingerol and Allicin Bio-Active Compounds',
      certifications: 'Organic EU, Phytosanitary Certificate'
    },
    packaging: '10kg / 13.6kg Plastic Crates or Mesh Sacks (approx. 24 MT per 40ft Reefer at 12°C)',
    description: 'Plump, fiber-free fresh ginger with gleaming golden skin, alongside purple-stripe garlic with tight cloves and robust spicy fragrance. Outstanding resistance to shrinkage and spoilage.',
    pedestalBg: 'radial-gradient(circle, #3b6648 0%, #1f3d2a 100%)',
    plantIcon: 'Sprout',
    potType: 'Glazed Earth Basin'
  }
];
