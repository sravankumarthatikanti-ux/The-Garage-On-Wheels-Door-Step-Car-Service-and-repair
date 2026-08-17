// Data repository for The Garage On Wheels – Doorstep Car Service and Repair

export const BUSINESS_INFO = {
  name: "The Garage On Wheels",
  tagline: "Doorstep Car Service & Repair – At Your Doorstep",
  fullName: "The Garage On Wheels – Doorstep Car Service and Repair",
  address: "Plot No. 1, Sri Venkateshwara Officers Colony, Asha Officers Colony, Tirumalagiri, Hyderabad, Secunderabad, Telangana",
  displayArea: "Tirumalagiri, Secunderabad & Hyderabad",
  whatsappNumber: "918519997231",
  formattedPhone: "+91 85199 97231",
  workingHours: "24/7 Available (24 Hours • All 7 Days)",
  warrantyText: "Up to 1000 KMs / 1 Month Doorstep Warranty on All Services",
};

/**
 * Builds formatted WhatsApp URL with pre-filled customer details, location, and service info
 */
export const buildWhatsAppUrl = ({
  customerName = "",
  phone = "",
  carBrand = "",
  carModel = "",
  vehicleNumber = "",
  serviceName = "",
  issueDescription = "",
  locationUrl = "",
  customNotes = ""
} = {}) => {
  const nameText = customerName ? customerName.trim() : "Customer";
  const phoneText = phone ? phone.trim() : "Provided on WhatsApp";
  
  let carText = "";
  if (carBrand && carModel) {
    carText = `${carBrand} ${carModel}`.trim();
  } else if (carBrand) {
    carText = carBrand.trim();
  } else {
    carText = "Car details to be shared";
  }

  const vehicleNoText = vehicleNumber ? vehicleNumber.toUpperCase().trim() : "To be shared";
  const serviceText = serviceName || "General Service";
  const issueText = issueDescription || customNotes || "General inspection & service quote request";
  const locationText = locationUrl ? locationUrl.trim() : "Not shared";

  let message = `Hi Garage on Wheels 👋\n\n`;
  message += `I would like to enquire/book a car service.\n\n`;
  message += `👤 Name: ${nameText}\n`;
  message += `📞 Phone: ${phoneText}\n`;
  message += `🚗 Car: ${carText}\n`;
  message += `🔢 Vehicle No: ${vehicleNoText}\n`;
  message += `🔧 Service: ${serviceText}\n`;
  message += `📝 Issue: ${issueText}\n\n`;
  message += `📍 Location:\n${locationText}\n\n`;
  message += `Please check the availability and let me know the estimated cost.\n\n`;
  message += `Thank you!`;

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const CAR_BRANDS = [
  {
    id: "maruti-suzuki",
    name: "Maruti Suzuki",
    tagline: "Swift, Baleno, WagonR, Brezza, Ertiga, Dzire, Alto",
    popular: true,
    originCountry: "Japan / India",
    originFlag: "🇯🇵 🇮🇳",
    region: "Asian",
    logoBg: "from-blue-600 to-indigo-900",
    models: ["Swift", "Baleno", "Wagon R", "Brezza", "Ertiga", "Dzire", "Alto K10", "Grand Vitara", "Ciaz", "Ignis", "Fronx", "XL6"]
  },
  {
    id: "hyundai",
    name: "Hyundai",
    tagline: "Creta, i20, Venue, Verna, Grand i10 Nios, Aura",
    popular: true,
    originCountry: "South Korea",
    originFlag: "🇰🇷",
    region: "Asian",
    logoBg: "from-sky-500 to-blue-800",
    models: ["Creta", "i20", "Venue", "Verna", "Grand i10 Nios", "Aura", "Alcazar", "Tucson", "Exter", "Santro"]
  },
  {
    id: "tata",
    name: "Tata Motors",
    tagline: "Nexon, Punch, Harrier, Safari, Altroz, Tiago, Tigor",
    popular: true,
    originCountry: "India",
    originFlag: "🇮🇳",
    region: "Indian",
    logoBg: "from-emerald-600 to-teal-900",
    models: ["Nexon", "Punch", "Harrier", "Safari", "Altroz", "Tiago", "Tigor", "Curvv", "Sierra"]
  },
  {
    id: "mahindra",
    name: "Mahindra",
    tagline: "Thar, XUV700, Scorpio-N, Bolero, XUV300, XUV400",
    popular: true,
    originCountry: "India",
    originFlag: "🇮🇳",
    region: "Indian",
    logoBg: "from-red-600 to-rose-950",
    models: ["Thar", "XUV700", "Scorpio-N", "Scorpio Classic", "Bolero", "XUV300 / XUV 3XO", "XUV400", "Marazzo"]
  },
  {
    id: "honda",
    name: "Honda",
    tagline: "City, Amaze, Elevate, WR-V, Jazz, Civic",
    popular: true,
    originCountry: "Japan",
    originFlag: "🇯🇵",
    region: "Asian",
    logoBg: "from-red-500 to-slate-900",
    models: ["City", "Amaze", "Elevate", "Jazz", "WR-V", "Civic", "CR-V", "Brio"]
  },
  {
    id: "toyota",
    name: "Toyota",
    tagline: "Innova Crysta, Fortuner, Hyryder, Glanza, Rumion",
    popular: true,
    originCountry: "Japan",
    originFlag: "🇯🇵",
    region: "Asian",
    logoBg: "from-red-700 to-neutral-900",
    models: ["Innova Crysta", "Innova Hycross", "Fortuner", "Urban Cruiser Hyryder", "Glanza", "Rumion", "Camry", "Etios"]
  },
  {
    id: "kia",
    name: "Kia Motors",
    tagline: "Seltos, Sonet, Carens, Carnival, EV6",
    popular: true,
    originCountry: "South Korea",
    originFlag: "🇰🇷",
    region: "Asian",
    logoBg: "from-slate-700 to-slate-950",
    models: ["Seltos", "Sonet", "Carens", "Carnival", "EV6"]
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    tagline: "Virtus, Taigun, Polo, Vento, Tiguan",
    popular: false,
    originCountry: "Germany",
    originFlag: "🇩🇪",
    region: "European",
    logoBg: "from-blue-700 to-blue-950",
    models: ["Virtus", "Taigun", "Polo", "Vento", "Tiguan", "Ameo", "Jetta"]
  },
  {
    id: "skoda",
    name: "Skoda",
    tagline: "Slavia, Kushaq, Octavia, Superb, Kodiaq",
    popular: false,
    originCountry: "Czech Republic",
    originFlag: "🇨🇿",
    region: "European",
    logoBg: "from-emerald-700 to-emerald-950",
    models: ["Slavia", "Kushaq", "Octavia", "Superb", "Kodiaq", "Rapid"]
  },
  {
    id: "mg",
    name: "MG Motor",
    tagline: "Hector, Astor, ZS EV, Comet, Gloster",
    popular: false,
    originCountry: "UK / International",
    originFlag: "🇬🇧",
    region: "European",
    logoBg: "from-rose-700 to-red-950",
    models: ["Hector", "Astor", "ZS EV", "Comet EV", "Gloster"]
  },
  {
    id: "renault",
    name: "Renault",
    tagline: "Kwid, Triber, Kiger, Duster",
    popular: false,
    originCountry: "France",
    originFlag: "🇫🇷",
    region: "European",
    logoBg: "from-amber-600 to-yellow-900",
    models: ["Kwid", "Triber", "Kiger", "Duster", "Lodgy"]
  },
  {
    id: "nissan",
    name: "Nissan",
    tagline: "Magnite, Kicks, Terrano, Micra",
    popular: false,
    originCountry: "Japan",
    originFlag: "🇯🇵",
    region: "Asian",
    logoBg: "from-neutral-700 to-neutral-900",
    models: ["Magnite", "Kicks", "Terrano", "Micra", "Sunny"]
  },
  {
    id: "bmw",
    name: "BMW",
    tagline: "3 Series, 5 Series, X1, X3, X5, M Sport",
    popular: false,
    originCountry: "Germany",
    originFlag: "🇩🇪",
    region: "European",
    logoBg: "from-cyan-700 to-blue-900",
    models: ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7", "2 Series Gran Coupe"]
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    tagline: "C-Class, E-Class, GLA, GLC, GLE, S-Class",
    popular: false,
    originCountry: "Germany",
    originFlag: "🇩🇪",
    region: "European",
    logoBg: "from-slate-600 to-slate-900",
    models: ["C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "A-Class Sedan"]
  },
  {
    id: "audi",
    name: "Audi",
    tagline: "A4, A6, Q3, Q5, Q7, A3",
    popular: false,
    originCountry: "Germany",
    originFlag: "🇩🇪",
    region: "European",
    logoBg: "from-zinc-800 to-slate-950",
    models: ["A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron"]
  }
];

export const FUEL_TYPES = ["Petrol", "Diesel", "CNG", "Electric (EV)", "Hybrid"];

export const SERVICE_CATEGORIES = [
  {
    id: "engine-service",
    title: "Engine Service",
    shortDesc: "Engine health check, spark plugs, timing belt, valve tuning & cylinder decarbonization.",
    startingPrice: "Quote on WhatsApp",
    badge: "Master Mechanics",
    iconName: "Cog",
    features: [
      "Engine Compression & Misfire Diagnostic",
      "Spark Plug Cleaning / OEM Replacement",
      "Timing Belt & Serpentine Belt Inspection",
      "Fuel Injector & Throttle Body Cleaning",
      "Coolant Leak Detection & Sump Check",
      "1000 KM Written Performance Guarantee"
    ]
  },
  {
    id: "brake-service",
    title: "Brake Service",
    shortDesc: "Ceramic brake pad replacement, disc rotor resurfacing, caliper check & DOT-4 fluid bleed.",
    startingPrice: "Quote on WhatsApp",
    badge: "Safety First",
    iconName: "Disc",
    features: [
      "OEM Front & Rear Brake Pad Fitment (Bosch / TVS)",
      "Brake Disc Rotor Inspection & Micrometer Trueing",
      "DOT-4 High-Temp Brake Fluid Top-up / Flush",
      "Electronic Parking Brake (EPB) Service Mode Reset",
      "Handbrake & Caliper Slider Pin Lubrication",
      "Complete Brake Line Leak Inspection"
    ]
  },
  {
    id: "battery-service",
    title: "Battery Service",
    shortDesc: "Amaron & Exide battery delivery, jumpstart, voltage testing & free doorstep installation.",
    startingPrice: "Quote on WhatsApp",
    badge: "Fast 45-Min Dispatch",
    iconName: "BatteryCharging",
    features: [
      "100% Genuine Amaron & Exide Batteries",
      "Free Doorstep Fitment & Terminal De-corrosion",
      "Old Battery Buyback Cash Discount",
      "Alternator Charging & Cranking Voltage Test",
      "Up to 55-Month Manufacturer Warranty",
      "Emergency Doorstep Jumpstart Assistance"
    ]
  },
  {
    id: "ac-service",
    title: "AC Service",
    shortDesc: "R134a AC gas recharge, cabin air filter cleaning, cooling coil deep cleaning & leak diagnostic.",
    startingPrice: "Quote on WhatsApp",
    badge: "Cooling Specialist",
    iconName: "Wind",
    features: [
      "AC Gas Refill & High/Low Pressure Testing",
      "Cabin AC Filter Replacement / Sanitization",
      "Condenser & Cooling Coil Deep Cleansing",
      "Evaporator Anti-Bacterial Odor Treatment",
      "Compressor Belt Tension & Clutch Inspection",
      "Vent Temperature Sub-Zero Verification"
    ]
  },
  {
    id: "oil-change",
    title: "Oil Change",
    shortDesc: "100% genuine synthetic & semi-synthetic engine oil flush with OEM oil filter replacement.",
    startingPrice: "Quote on WhatsApp",
    badge: "100% Genuine Fluids",
    iconName: "Droplets",
    features: [
      "Premium Synthetic Engine Oil (Mobil 1 / Shell / Castrol)",
      "OEM Sealed Oil Filter Replacement",
      "Crush Washer & Sump Drain Plug Inspection",
      "Fluid Top-ups (Coolant, Windshield Wiper Fluid, Brake Fluid)",
      "Zero Oil Spill Clean Driveway Process",
      "Old Oil Eco-Friendly Disposal"
    ]
  },
  {
    id: "general-service",
    title: "General Service",
    shortDesc: "Comprehensive periodic car maintenance, 50-point inspection, air filter & doorstep tune-up.",
    startingPrice: "Quote on WhatsApp",
    badge: "Most Popular",
    iconName: "Wrench",
    features: [
      "Full Synthetic Engine Oil & Filter Change",
      "Air Filter & Cabin AC Filter Replacement",
      "50-Point Comprehensive Vehicle Safety Audit",
      "Spark Plug Check & Battery Load Test",
      "Brake Pad Cleaning & Underbody Inspection",
      "Comprehensive Digital Health Check Report"
    ]
  },
  {
    id: "car-diagnostics",
    title: "Car Diagnostics",
    shortDesc: "OBD-II computerized ECU scanning, live sensor telemetry, ABS & airbag error clearing.",
    startingPrice: "Quote on WhatsApp",
    badge: "Hi-Tech Scanners",
    iconName: "Cpu",
    features: [
      "Full ECU Computerized Scan (Engine, ABS, Airbag, BCM)",
      "Check Engine Light (MIL) Diagnostic & Reset",
      "Live Sensor Stream & Fuel Trim Analysis",
      "Transmission & Sensor Telemetry Check",
      "Electronic Actuator & Throttle Calibrations",
      "Itemized WhatsApp Diagnostic Report"
    ]
  },
  {
    id: "emergency-repair",
    title: "Emergency Repair",
    shortDesc: "Rapid mobile mechanic dispatch for sudden breakdowns, overheating, starting issues & flat tyres.",
    startingPrice: "Quote on WhatsApp",
    badge: "Rapid Response",
    iconName: "AlertTriangle",
    features: [
      "Mobile Technician Dispatch in 30-45 Minutes",
      "On-Spot Battery Jumpstart & Fuse Troubleshooting",
      "Coolant Leak & Overheating Emergency Fix",
      "Alternator / Starter Motor Field Diagnostics",
      "Doorstep Tubeless Tyre Puncture Assistance",
      "Tirumalagiri, Secunderabad & Hyderabad Wide Coverage"
    ]
  },
  {
    id: "dpf-service",
    title: "DPF Service",
    shortDesc: "Diesel Particulate Filter computerized soot load scanning, forced regeneration & workshop decarbonization.",
    startingPrice: "Quote on WhatsApp",
    badge: "Diesel Specialist",
    iconName: "Flame",
    features: [
      "OBD-II DPF Differential Pressure & Soot Level Scan",
      "Stationary / Dynamic Forced DPF Regeneration",
      "Exhaust Temperature Sensor Diagnostic",
      "EGR Valve & Intake Manifold Decarbonization",
      "Workshop Chemical Filter Flush for Heavy Soot",
      "Smoke Level Reduction & Mileage Optimization"
    ]
  }
];

export const SPARE_PARTS = [
  {
    id: "part-1",
    name: "Front & Rear Brake Pads",
    category: "Braking System",
    description: "High-friction ceramic & semi-metallic brake pads for instant stopping power.",
    tag: "100% Genuine TVS/Bosch",
    brand: "TVS Girling / Bosch OEM",
    price: "From ₹1,199",
    image: "/images/gallery/brake_repair.jpg"
  },
  {
    id: "part-2",
    name: "Engine Oil & Synthetic Oils",
    category: "Fluids & Oils",
    description: "5W-30, 5W-40, 15W-40 Synthetic & Semi-synthetic oils (Shell, Mobil1, Castrol).",
    tag: "OEM Approved",
    brand: "Shell Helix / Mobil 1",
    price: "From ₹1,499",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "part-3",
    name: "Car Batteries (Amaron / Exide)",
    category: "Electricals",
    description: "35Ah, 45Ah, 60Ah heavy-duty automotive batteries with full warranty.",
    tag: "Free Doorstep Fit",
    brand: "Amaron FLO / Exide Matrix",
    price: "From ₹3,499",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "part-4",
    name: "Air Filters & Cabin Filters",
    category: "Filtration",
    description: "High-airflow OEM filters to protect engine and ensure clean cabin air.",
    tag: "Dust-Proof Mesh",
    brand: "Purolator / Elofic OEM",
    price: "From ₹399",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "part-5",
    name: "Clutch Plate & Pressure Assembly",
    category: "Transmission",
    description: "Original Valeo / Ceekay clutch plates for smooth acceleration.",
    tag: "High Durability",
    brand: "Valeo / Ceekay Genuine",
    price: "From ₹3,299",
    image: "/images/gallery/gearbox_repair.jpg"
  },
  {
    id: "part-6",
    name: "Shock Absorbers & Struts",
    category: "Suspension",
    description: "Gabriel / Monroe shock absorbers for noise-free smooth driving.",
    tag: "Bump Free Ride",
    brand: "Gabriel / Monroe Gas",
    price: "From ₹2,199",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "part-7",
    name: "Spark Plugs & Ignition Coils",
    category: "Engine Electronics",
    description: "NGK / Bosch iridium spark plugs for optimal fuel efficiency.",
    tag: "Instant Start",
    brand: "NGK Iridium / Bosch",
    price: "From ₹599",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "part-8",
    name: "Wiper Blades (Frameless)",
    category: "Accessories",
    description: "All-weather silicone frameless wiper blades for streak-free rain vision.",
    tag: "Silent Sweep",
    brand: "Bosch ClearAdvantage",
    price: "From ₹449",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Select Your Car & Service",
    desc: "Pick your car brand, model, and required doorstep service or repair requirement.",
    icon: "Car"
  },
  {
    step: "02",
    title: "Confirm Your Doorstep Area",
    desc: "Select your location in Tirumalagiri, Secunderabad, or Hyderabad.",
    icon: "MapPin"
  },
  {
    step: "03",
    title: "Chat & Get Instant Quote on WhatsApp",
    desc: "Click to launch WhatsApp with auto-filled car details. Connect directly with our service advisor.",
    icon: "MessageSquare"
  },
  {
    step: "04",
    title: "Doorstep Service Delivered",
    desc: "Our certified mobile mechanics arrive at your home or office with genuine parts & equipment.",
    icon: "Truck"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "100% Genuine Spare Parts",
    desc: "We exclusively use OEM/OES original replacement parts from Bosch, TVS, Mobil1, Valeo, Amaron, and Shell.",
    icon: "ShieldCheck"
  },
  {
    title: "Trained & Certified Mechanics",
    desc: "Our mobile automotive experts have 8+ years of hands-on dealership technician experience.",
    icon: "Award"
  },
  {
    title: "Doorstep Convenience",
    desc: "Save hours of waiting at crowded garages. We service your vehicle right outside your house or office.",
    icon: "Home"
  },
  {
    title: "Transparent WhatsApp Process",
    desc: "No surprising bills. All price estimates, live work photos, and part unboxings sent straight to your WhatsApp.",
    icon: "Lock"
  },
  {
    title: "Doorstep Service Warranty",
    desc: "Enjoy peace of mind with our 1-Month / 1,000 KM warranty cover on doorstep maintenance.",
    icon: "Sparkles"
  },
  {
    title: "No Extra Pickup/Drop Fees",
    desc: "Zero hidden doorstep visit charges across Secunderabad & Hyderabad primary service zones.",
    icon: "Gift"
  }
];

export const LOCAL_SERVICE_AREAS = [
  { name: "Tirumalagiri", highlight: true, zone: "Primary Hub" },
  { name: "Asha Officers Colony", highlight: true, zone: "Primary Hub" },
  { name: "Sri Venkateshwara Officers Colony", highlight: true, zone: "Primary Hub" },
  { name: "Trimulgherry", highlight: true, zone: "Secunderabad" },
  { name: "Bowenpally", highlight: true, zone: "Secunderabad" },
  { name: "Alwal & Old Alwal", highlight: true, zone: "Secunderabad" },
  { name: "Sainikpuri & ECIL", highlight: true, zone: "Secunderabad" },
  { name: "Begumpet & Paradise", highlight: true, zone: "Secunderabad" },
  { name: "Karkhana & West Marredpally", highlight: true, zone: "Secunderabad" },
  { name: "Jubilee Hills & Banjara Hills", highlight: false, zone: "Hyderabad Central" },
  { name: "Hitech City & Madhapur", highlight: false, zone: "Hyderabad Cyberabad" },
  { name: "Gachibowli & Kondapur", highlight: false, zone: "Hyderabad Cyberabad" },
  { name: "Kukatpally & Miyapur", highlight: false, zone: "Hyderabad North" },
  { name: "Malkajgiri & Tarnaka", highlight: false, zone: "Secunderabad East" }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Vikram Reddy",
    location: "Tirumalagiri, Secunderabad",
    car: "Hyundai Creta Petrol",
    review: "Likely: The Garage On Wheels saved my weekend! Their mechanic arrived at my Asha Officers Colony home on time, replaced the battery, and did a complete periodic service right in my driveway. Excellent WhatsApp updates!",
    rating: 5,
    date: "2 days ago"
  },
  {
    name: "Rajesh Kumar",
    location: "Sainikpuri, Secunderabad",
    car: "Maruti Suzuki Swift",
    review: "Finding a reliable car repair service in Secunderabad used to be stressful. Likely Garage On Wheels replaced my brake pads and did synthetic oil change at my doorstep. Super transparent WhatsApp pricing & original TVS parts!",
    rating: 5,
    date: "1 week ago"
  },
  {
    name: "Priya Sharma",
    location: "Bowenpally, Secunderabad",
    car: "Honda City i-VTEC",
    review: "My Honda AC stopped cooling during peak summer heat. I booked on WhatsApp, and their technician refilled the AC gas and cleaned the filter at my office parking lot. Extremely convenient doorstep service!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Srinivas Rao",
    location: "Alwal, Secunderabad",
    car: "Tata Nexon Diesel",
    review: "Great doorstep car periodic service and brake overhaul! My Nexon drives smooth and responsive like brand new. The team is very polite and professional. Highly recommended for doorstep car care in Secunderabad.",
    rating: 5,
    date: "3 weeks ago"
  }
];
