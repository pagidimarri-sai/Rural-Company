// // src/data/servicesData.ts

// export type PackageType = {
//   title: string;
//   description: string;
//   price: string;
//   duration: string;
// };

// export type ServiceItemType = {
//   name: string;
//   icon: string;
// };

// export const servicesData: Record<string, {
//   name: string;
//   banner: string;
//   packages: PackageType[];
//   serviceItems?: ServiceItemType[];
//   promises?: string[];
// }> = {
//   "spa-for-women": {
//     name: "Spa for Women",
//     banner: "/assets/spa-banner.webp",
//     serviceItems: [
//       { name: "Facial", icon: "/assets/facialiconn.webp" },
//       { name: "Massage", icon: "/assets/spaiconn.webp" },
//       { name: "Hair Services", icon: "/assets/hairbleachanddetaniconn.webp" },
//       { name: "Waxing", icon: "/assets/waxingiconn.webp" },
//       { name: "Packages", icon: "/assets/packagesiconn.webp" },
//       { name: "Manicure", icon: "/assets/manicureiconn.webp" },
//       { name: "Pedicure", icon: "/assets/pedicureiconn.webp" },
//       { name: "Glow Facial", icon: "/assets/glowfacialiconn.webp" },
//       { name: "Detan", icon: "/assets/detaniconn.webp" }
//     ],
//     promises: [
//       "4.5+ Rated Beauticians",
//       "Luxury Spa Experience",
//       "Branded Aroma Oils"
//     ],
//     packages: [
//       { title: "Full Body Spa", description: "Relaxing full body massage with aroma oils", price: "₹599", duration: "60 mins" },
//       { title: "Back & Shoulder Massage", description: "Deep tissue massage for stress relief", price: "₹349", duration: "30 mins" },
//       { title: "Foot Reflexology", description: "Foot massage using acupressure", price: "₹299", duration: "25 mins" },
//       { title: "Head Massage", description: "Nourishing oil massage for scalp and hair", price: "₹199", duration: "20 mins" },
//       { title: "Bridal Spa Package", description: "Pre-wedding spa combo with body polish", price: "₹1499", duration: "120 mins" },
//       { title: "Detox Body Wrap", description: "Seaweed and clay wrap to detox skin", price: "₹799", duration: "45 mins" },
//       { title: "Body Scrub & Polish", description: "Skin exfoliation and brightening polish", price: "₹499", duration: "40 mins" },
//       { title: "Aromatherapy", description: "Massage with essential oils for relaxation", price: "₹599", duration: "60 mins" }
//     ]
//   },
//   "hair-studio": {
//     name: "Hair Studio",
//     banner: "/assets/hair-studio-banner.webp",
//     serviceItems: [
//       { name: "Haircut", icon: "/assets/haircuticonn.webp" },
//       { name: "Coloring", icon: "/assets/haircoloriconn.webp" },
//       { name: "Smoothening", icon: "/assets/smootheningiconn.webp" },
//       { name: "Blow Dry", icon: "/assets/blowdryiconn.webp" },
//       { name: "Keratin", icon: "/assets/keratiniconn.webp" },
//       { name: "Highlights", icon: "/assets/highlightsiconn.webp" },
//       { name: "Hair Spa", icon: "/assets/hairspaiconn.webp" },
//       { name: "Straightening", icon: "/assets/straighteningiconn.webp" },
//       { name: "Root Touchup", icon: "/assets/roottouchupiconn.webp" }
//     ],
//     promises: [
//       "Salon Grade Stylists",
//       "Latest Hair Trends",
//       "Premium Hair Products"
//     ],
//     packages: [
//       { title: "Haircut + Styling", description: "Trendy haircut and blow dry", price: "₹299", duration: "30 mins" },
//       { title: "Hair Spa", description: "Deep conditioning & massage", price: "₹499", duration: "45 mins" },
//       { title: "Hair Color Global", description: "Full hair coloring with premium products", price: "₹999", duration: "90 mins" },
//       { title: "Hair Smoothening", description: "Keratin-based treatment", price: "₹1499", duration: "120 mins" },
//       { title: "Root Touch-Up", description: "Covers grey hair roots", price: "₹349", duration: "30 mins" },
//       { title: "Hair Wash & Blow Dry", description: "Wash and styling", price: "₹199", duration: "20 mins" }
//     ]
//   },
//   "salon-for-women": {
//     name: "Salon for Women",
//     banner: "/assets/salon-for-women-banner.webp",
//     serviceItems: [
//       { name: "Threading", icon: "/assets/threadingiconn.webp" },
//       { name: "Facial", icon: "/assets/facialiconn.webp" },
//       { name: "Waxing", icon: "/assets/waxingiconn.webp" },
//       { name: "Manicure", icon: "/assets/manicureiconn.webp" },
//       { name: "Pedicure", icon: "/assets/pedicureiconn.webp" },
//       { name: "Detan", icon: "/assets/detaniconn.webp" },
//       { name: "Cleanup", icon: "/assets/cleanupiconn.webp" },
//       { name: "Glow Facial", icon: "/assets/glowfacialiconn.webp" },
//       { name: "Packages", icon: "/assets/packagesiconn.webp" }
//     ],
//     promises: [
//       "Experienced Beauticians",
//       "Top Rated Salon Service",
//       "100% Hygienic & Safe"
//     ],
//     packages: [
//       { title: "Threading & Waxing", description: "Eyebrows, upper lips, and face waxing", price: "₹199", duration: "30 mins" },
//       { title: "Facial + Cleanup", description: "Complete skin treatment", price: "₹499", duration: "45 mins" },
//       { title: "Full Body Wax", description: "Arms, legs, underarms", price: "₹599", duration: "60 mins" },
//       { title: "Pedicure + Manicure", description: "Hand and foot care", price: "₹399", duration: "40 mins" },
//       { title: "Bridal Glow Facial", description: "Instant glow and skin lift", price: "₹699", duration: "50 mins" },
//       { title: "Underarm Detan", description: "Brightening detan treatment", price: "₹199", duration: "20 mins" },
//       { title: "Luxury Facial", description: "Premium facial with gold kit", price: "₹799", duration: "60 mins" }
//     ]
//   }
//   // ...existing other services (men's salon, AC, laptop etc.) should be similarly extended with serviceItems and promises
// };
// src/data/servicesData.ts

export type PackageType = {
  title: string;
  description: string;
  price: string;
  duration: string;
};

export type ServiceItemType = {
  name: string;
  icon: string;
};

export type ServiceDataType = {
  name: string;
  banner: string;
  packages: PackageType[];
  serviceItems: ServiceItemType[];
  promises: string[];
};

export const servicesData: Record<string, ServiceDataType> = {
  "spa-for-women": {
    name: "Spa for Women",
    banner: "/assets/spa-banner.webp",
    serviceItems: [
      { name: "Massage", icon: "/assets/spaiconn.webp" },
      { name: "Aromatherapy", icon: "/assets/packagesiconn.webp" },
      { name: "Body Scrub", icon: "/assets/waxingiconn.webp" },
      { name: "Head Massage", icon: "/assets/hairbleachanddetaniconn.webp" },
      { name: "Foot Reflexology", icon: "/assets/facialiconn.webp" },
      { name: "Body Wrap", icon: "/assets/packagesiconn.webp" },
      { name: "Bridal Package", icon: "/assets/facialiconn.webp" },
      { name: "Luxury Spa", icon: "/assets/packagesiconn.webp" },
      { name: "Detox", icon: "/assets/waxingiconn.webp" },
    ],
    promises: [
      "4.5+ Rated Beauticians",
      "Luxury Salon Experience",
      "Premium Branded Products"
    ],
    packages: [
      { title: "Full Body Spa", description: "Relaxing full body massage with aroma oils", price: "₹599", duration: "60 mins" },
      { title: "Back & Shoulder Massage", description: "Deep tissue massage for stress relief", price: "₹349", duration: "30 mins" },
      { title: "Foot Reflexology", description: "Foot massage using acupressure", price: "₹299", duration: "25 mins" },
      { title: "Head Massage", description: "Nourishing oil massage for scalp and hair", price: "₹199", duration: "20 mins" },
      { title: "Bridal Spa Package", description: "Pre-wedding spa combo with body polish", price: "₹1499", duration: "120 mins" },
      { title: "Detox Body Wrap", description: "Seaweed and clay wrap to detox skin", price: "₹799", duration: "45 mins" },
      { title: "Body Scrub & Polish", description: "Skin exfoliation and brightening polish", price: "₹499", duration: "40 mins" },
      { title: "Aromatherapy", description: "Massage with essential oils for relaxation", price: "₹599", duration: "60 mins" },
    ],
  },
  "salon-for-women": {
    name: "Salon for Women",
    banner: "/assets/salon-women-banner.webp",
    serviceItems: [
      { name: "Haircut", icon: "/assets/haircuticonn.webp" },
      { name: "Hair Styling", icon: "/assets/hairbleachanddetaniconn.webp" },
      { name: "Facial", icon: "/assets/facialiconn.webp" },
      { name: "Waxing", icon: "/assets/waxingiconn.webp" },
      { name: "Threading", icon: "/assets/threadingiconn.webp" },
      { name: "Manicure", icon: "/assets/manicureiconn.webp" },
      { name: "Pedicure", icon: "/assets/pedicureiconn.webp" },
      { name: "Hair Color", icon: "/assets/haircoloriconn.webp" },
      { name: "Bridal Package", icon: "/assets/packagesiconn.webp" },
    ],
    promises: [
      "4.7+ Rated Stylists",
      "Hygienic & Comfortable Experience",
      "Genuine Branded Products"
    ],
    packages: [
      { title: "Classic Haircut", description: "Precision haircut with blow dry", price: "₹299", duration: "30 mins" },
      { title: "Layered Haircut", description: "Trendy layers with smooth finish", price: "₹399", duration: "40 mins" },
      { title: "Hair Wash & Blow Dry", description: "Shampoo and professional blow dry", price: "₹249", duration: "25 mins" },
      { title: "Global Hair Color", description: "Full hair coloring with ammonia-free color", price: "₹999", duration: "60 mins" },
      { title: "Root Touch-up", description: "Covers grey roots with perfect blend", price: "₹499", duration: "30 mins" },
      { title: "Fruit Facial", description: "Gentle facial for a fresh glow", price: "₹449", duration: "45 mins" },
      { title: "Gold Facial", description: "Luxury facial for radiant skin", price: "₹699", duration: "60 mins" },
      { title: "Detan Pack - Face & Neck", description: "Removes tan and brightens skin", price: "₹299", duration: "25 mins" },
      { title: "Full Arms Waxing", description: "Smooth hair removal using premium wax", price: "₹299", duration: "25 mins" },
      { title: "Full Legs Waxing", description: "Silky legs with painless waxing", price: "₹399", duration: "30 mins" },
      { title: "Full Body Waxing", description: "Complete waxing with premium care", price: "₹1099", duration: "60 mins" },
      { title: "Eyebrow Threading", description: "Precise shaping for neat brows", price: "₹59", duration: "10 mins" },
      { title: "Upper Lip Threading", description: "Quick and painless hair removal", price: "₹39", duration: "5 mins" },
      { title: "Chin Threading", description: "Defined and smooth chin area", price: "₹49", duration: "5 mins" },
      { title: "Manicure - Basic", description: "Nail trimming, cuticle care & polish", price: "₹349", duration: "30 mins" },
      { title: "Manicure - Spa", description: "Includes mask and massage", price: "₹499", duration: "45 mins" },
      { title: "Pedicure - Basic", description: "Foot soak, scrub and nail clean-up", price: "₹399", duration: "35 mins" },
      { title: "Pedicure - Spa", description: "Relaxing pedicure with massage and pack", price: "₹599", duration: "50 mins" },
      { title: "Bridal Makeup Trial", description: "Trial session for bridal makeup look", price: "₹999", duration: "60 mins" },
      { title: "Bridal Package", description: "Pre-wedding grooming and bridal makeup", price: "₹3499", duration: "120 mins" }
    ]
  },
  "hair-studio": {
    name: "Hair Studio",
    banner: "https://cdn-icons-png.flaticon.com/512/3795/3795360.png",
    serviceItems: [
      { name: "Haircut", icon: "https://cdn-icons-png.flaticon.com/512/12529/12529387.png" },
      { name: "Hair Styling", icon: "https://cdn-icons-png.flaticon.com/512/4325/4325932.png" },
      { name: "Hair Color", icon: "https://cdn-icons-png.flaticon.com/512/3045/3045073.png" },
      { name: "Hair Spa", icon: "https://cdn-icons-png.flaticon.com/512/979/979585.png" },
      { name: "Straightening", icon: "https://cdn-icons-png.flaticon.com/512/9473/9473884.png" },
      { name: "Keratin Treatment", icon: "https://cdn-icons-png.flaticon.com/512/9992/9992136.png" },
      { name: "Smoothening", icon: "https://cdn-icons-png.flaticon.com/512/3795/3795362.png" },
      { name: "Global Color", icon: "https://cdn-icons-png.flaticon.com/512/4339/4339350.png" },
      { name: "Highlights", icon: "https://cdn-icons-png.flaticon.com/512/6576/6576726.png" }
    ],
    promises: [
      "Trained & Certified Stylists",
      "International Products Used",
      "Customized Hair Solutions"
    ],
    packages: [
      { title: "Basic Haircut", description: "Neat, professional cut with blow dry", price: "₹299", duration: "30 mins" },
      { title: "Advanced Haircut & Styling", description: "Trendy cut with personalized styling", price: "₹499", duration: "45 mins" },
      { title: "Hair Spa - Dry Hair", description: "Moisturizing spa with steam & massage", price: "₹599", duration: "45 mins" },
      { title: "Hair Spa - Oily Scalp", description: "Deep cleanse and nourishment", price: "₹649", duration: "50 mins" },
      { title: "Global Hair Color", description: "Complete hair coloring with top brands", price: "₹1499", duration: "90 mins" },
      { title: "Root Touch-Up", description: "Covers grey roots effectively", price: "₹499", duration: "30 mins" },
      { title: "Hair Highlights", description: "Streaks to add dimension and style", price: "₹1799", duration: "90 mins" },
      { title: "Balayage", description: "Hand-painted soft highlights", price: "₹2499", duration: "120 mins" },
      { title: "Keratin Treatment", description: "Frizz control and shine boost", price: "₹2999", duration: "120 mins" },
      { title: "Hair Smoothening", description: "Sleek and manageable hair texture", price: "₹3499", duration: "120 mins" },
      { title: "Hair Straightening", description: "Permanent straight hair look", price: "₹3999", duration: "150 mins" },
      { title: "Anti-Hairfall Treatment", description: "Strengthen roots & reduce hair fall", price: "₹799", duration: "45 mins" },
      { title: "Dandruff Control Therapy", description: "Scalp detox with anti-dandruff solution", price: "₹699", duration: "40 mins" },
      { title: "Hair Detox", description: "Cleanses product build-up & toxins", price: "₹599", duration: "40 mins" },
      { title: "Hair Botox", description: "Revives damaged, dull hair instantly", price: "₹3499", duration: "120 mins" },
      { title: "Hair Oil Massage", description: "Nourishing oil therapy with gentle massage", price: "₹299", duration: "20 mins" },
      { title: "Blow Dry Styling", description: "Glossy finish with volume", price: "₹349", duration: "25 mins" },
      { title: "Ironing (Straight Finish)", description: "Temporary straightening using flat iron", price: "₹399", duration: "30 mins" },
      { title: "Party Hairdo", description: "Curls, buns or braid styling for special occasions", price: "₹799", duration: "45 mins" },
      { title: "Bridal Hair Styling", description: "Custom hairdo with accessories", price: "₹1499", duration: "60 mins" }
    ]
  },
  "salon-for-men": {
  name: "Salon for Men",
  banner: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  serviceItems: [
    { name: "Haircut", icon: "https://cdn-icons-png.flaticon.com/512/12529/12529387.png" },
    { name: "Beard Styling", icon: "https://cdn-icons-png.flaticon.com/512/3470/3470034.png" },
    { name: "Hair Color", icon: "https://cdn-icons-png.flaticon.com/512/3045/3045073.png" },
    { name: "Facial", icon: "https://cdn-icons-png.flaticon.com/512/2884/2884565.png" },
    { name: "Detan", icon: "https://cdn-icons-png.flaticon.com/512/2585/2585563.png" },
    { name: "Threading", icon: "https://cdn-icons-png.flaticon.com/512/2696/2696673.png" },
    { name: "Bleach", icon: "https://cdn-icons-png.flaticon.com/512/10022/10022698.png" },
    { name: "Manicure", icon: "https://cdn-icons-png.flaticon.com/512/2981/2981015.png" },
    { name: "Pedicure", icon: "https://cdn-icons-png.flaticon.com/512/4712/4712110.png" }
  ],
  promises: [
    "Verified Grooming Experts",
    "Top Rated Products",
    "Salon-Grade Hygiene Standards"
  ],
  packages: [
    { title: "Basic Haircut", description: "Neat haircut by a professional stylist", price: "₹199", duration: "25 mins" },
    { title: "Beard Trim & Shape", description: "Stylized trimming with razor finish", price: "₹149", duration: "15 mins" },
    { title: "Hair Wash & Styling", description: "Shampoo, conditioner & styling gel", price: "₹249", duration: "20 mins" },
    { title: "Hair Color - Global", description: "Ammonia-free hair color for full head", price: "₹799", duration: "45 mins" },
    { title: "Grey Touch-Up", description: "Covers grey hair in natural tone", price: "₹299", duration: "20 mins" },
    { title: "Detan Pack - Face", description: "Brightens skin & removes tan", price: "₹199", duration: "20 mins" },
    { title: "Facial - Charcoal", description: "Cleansing & rejuvenating facial", price: "₹399", duration: "40 mins" },
    { title: "Facial - Gold", description: "Glow enhancing gold facial", price: "₹499", duration: "45 mins" },
    { title: "Eyebrow Threading", description: "Sharp, defined brows", price: "₹59", duration: "10 mins" },
    { title: "Forehead Threading", description: "Clean, shaped forehead line", price: "₹49", duration: "10 mins" },
    { title: "Full Face Threading", description: "Complete hair removal", price: "₹199", duration: "25 mins" },
    { title: "Bleach - Face", description: "Brightens skin tone instantly", price: "₹199", duration: "20 mins" },
    { title: "Bleach - Full Face & Neck", description: "Even skin tone for face & neck", price: "₹299", duration: "30 mins" },
    { title: "Basic Manicure", description: "Clean, trim, shape nails with soak", price: "₹299", duration: "30 mins" },
    { title: "Spa Manicure", description: "Includes massage & hydrating mask", price: "₹449", duration: "40 mins" },
    { title: "Basic Pedicure", description: "Cuticle care, foot soak & nail trim", price: "₹349", duration: "35 mins" },
    { title: "Spa Pedicure", description: "Foot massage, scrub, and mask", price: "₹499", duration: "45 mins" },
    { title: "Party Ready Package", description: "Haircut + Beard + Detan combo", price: "₹699", duration: "60 mins" },
    { title: "Face Glow Package", description: "Detan + Bleach + Facial", price: "₹899", duration: "75 mins" },
    { title: "Complete Grooming Pack", description: "Haircut, Beard, Facial, Manicure, Pedicure", price: "₹1499", duration: "90 mins" }
  ]
},
"massage-for-men": {
  name: "Massage for Men",
  banner: "https://cdn-icons-png.flaticon.com/512/4069/4069633.png",
  serviceItems: [
    { name: "Swedish Massage", icon: "https://cdn-icons-png.flaticon.com/512/2936/2936845.png" },
    { name: "Deep Tissue Massage", icon: "https://cdn-icons-png.flaticon.com/512/5774/5774304.png" },
    { name: "Foot Reflexology", icon: "https://cdn-icons-png.flaticon.com/512/4359/4359963.png" },
    { name: "Back & Shoulder Massage", icon: "https://cdn-icons-png.flaticon.com/512/10270/10270909.png" },
    { name: "Head & Neck Massage", icon: "https://cdn-icons-png.flaticon.com/512/979/979577.png" },
    { name: "Aromatherapy", icon: "https://cdn-icons-png.flaticon.com/512/5663/5663927.png" },
    { name: "Hot Stone Therapy", icon: "https://cdn-icons-png.flaticon.com/512/4975/4975303.png" },
    { name: "Body Scrub", icon: "https://cdn-icons-png.flaticon.com/512/4151/4151605.png" },
    { name: "Detox Massage", icon: "https://cdn-icons-png.flaticon.com/512/5663/5663925.png" }
  ],
  promises: [
    "4.8+ Rated Therapists",
    "Discreet & Professional",
    "Therapeutic Techniques"
  ],
  packages: [
    { title: "Swedish Massage", description: "Full body massage with long, gliding strokes to relax muscles", price: "₹699", duration: "60 mins" },
    { title: "Deep Tissue Massage", description: "Firm pressure massage for deep muscle relief", price: "₹799", duration: "60 mins" },
    { title: "Back & Shoulder Massage", description: "Targeted relief for upper body tension", price: "₹399", duration: "30 mins" },
    { title: "Foot Reflexology", description: "Pressure point foot massage for overall well-being", price: "₹349", duration: "25 mins" },
    { title: "Head & Neck Massage", description: "Relieves stress and improves blood flow", price: "₹249", duration: "20 mins" },
    { title: "Aromatherapy Massage", description: "Essential oil massage for deep relaxation", price: "₹749", duration: "60 mins" },
    { title: "Hot Stone Therapy", description: "Warm stones used to ease muscle stiffness", price: "₹999", duration: "75 mins" },
    { title: "Body Scrub & Polish", description: "Exfoliating scrub for smooth, refreshed skin", price: "₹599", duration: "40 mins" },
    { title: "Detox Massage", description: "Lymphatic massage to flush out toxins", price: "₹899", duration: "60 mins" },
    { title: "Upper Body Massage", description: "Focused upper-body relaxation", price: "₹349", duration: "30 mins" },
    { title: "Lower Body Massage", description: "Legs & glutes stress relief", price: "₹349", duration: "30 mins" },
    { title: "Sport Massage", description: "Designed for active body recovery", price: "₹849", duration: "60 mins" },
    { title: "Trigger Point Therapy", description: "Knots & pressure point focus", price: "₹699", duration: "45 mins" },
    { title: "Thai Dry Massage", description: "Stretching-based traditional massage", price: "₹999", duration: "75 mins" },
    { title: "Relaxation Combo", description: "Head + Foot + Back massage combo", price: "₹999", duration: "75 mins" },
    { title: "Express Massage", description: "Quick relief for busy schedules", price: "₹299", duration: "20 mins" },
    { title: "Massage with Scrub", description: "Oil massage + exfoliating scrub", price: "₹899", duration: "70 mins" },
    { title: "Ayurvedic Massage", description: "Ancient Indian healing massage", price: "₹999", duration: "75 mins" },
    { title: "Couple Massage (For Men)", description: "Shared massage session with partner", price: "₹1899", duration: "90 mins" },
    { title: "Premium Relax Pack", description: "Complete relaxation experience", price: "₹1499", duration: "90 mins" }
  ]
},
 "ac-&-appliance": {
    name: "AC & Appliance Services",
    banner: "https://cdn-icons-png.flaticon.com/512/2937/2937787.png",
    serviceItems: [
      { name: "AC Service", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png" },
      { name: "AC Installation", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917256.png" },
      { name: "AC Gas Refill", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917267.png" },
      { name: "Refrigerator Repair", icon: "https://cdn-icons-png.flaticon.com/512/2918/2918128.png" },
      { name: "Washing Machine", icon: "https://cdn-icons-png.flaticon.com/512/2919/2919444.png" },
      { name: "Microwave Repair", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920473.png" },
      { name: "Geyser Service", icon: "https://cdn-icons-png.flaticon.com/512/2921/2921454.png" },
      { name: "Chimney Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2922/2922356.png" },
      { name: "Water Purifier", icon: "https://cdn-icons-png.flaticon.com/512/2923/2923135.png" }
    ],
    promises: [
      "Certified Technicians",
      "Genuine Parts",
      "Same‑Day Service"
    ],
    packages: [
      { title: "Split AC Service", description: "Jet spray, coil clean & filter wash", price: "₹499", duration: "60 mins" },
      { title: "Window AC Service", description: "Deep clean & tuning for window units", price: "₹449", duration: "50 mins" },
      { title: "AC Installation", description: "Indoor/outdoor unit mounting & testing", price: "₹1499", duration: "90 mins" },
      { title: "AC Uninstallation", description: "Safe removal of split AC units", price: "₹799", duration: "60 mins" },
      { title: "AC Gas Refill", description: "Leak check & refrigerant refill", price: "₹1999", duration: "90 mins" },
      { title: "AC Compressor Check", description: "Diagnosis of compressor issues", price: "₹599", duration: "45 mins" },
      { title: "Refrigerator Repair", description: "Cooling issue diagnosis & fix", price: "₹349", duration: "40 mins" },
      { title: "Refrigerator Gas Refill", description: "Restores cooling performance", price: "₹999", duration: "60 mins" },
      { title: "Washing Machine - Top Load", description: "Clean/mend top‑load washers", price: "₹399", duration: "45 mins" },
      { title: "Washing Machine - Front Load", description: "Drum clean & mechanical fixes", price: "₹499", duration: "50 mins" },
      { title: "Microwave Repair", description: "Heating & component fixes", price: "₹299", duration: "30 mins" },
      { title: "Oven Repair", description: "Fixes for electric ovens", price: "₹399", duration: "35 mins" },
      { title: "Chimney Deep Clean", description: "Grease & duct cleaning", price: "₹799", duration: "60 mins" },
      { title: "Chimney Repair", description: "Motor or suction troubleshooting", price: "₹399", duration: "30 mins" },
      { title: "Water Purifier Service", description: "Filter change & sanitation", price: "₹349", duration: "35 mins" },
      { title: "RO Filter Replacement", description: "Full cartridge replacement", price: "₹699", duration: "45 mins" },
      { title: "Geyser Installation", description: "Connection & safety checks", price: "₹499", duration: "40 mins" },
      { title: "Geyser Repair", description: "Thermostat/heater element fix", price: "₹349", duration: "30 mins" },
      { title: "Exhaust Fan Installation", description: "Bathroom/kitchen fan setup", price: "₹299", duration: "30 mins" },
      { title: "Appliance Combo Check", description: "Multi‑appliance health check", price: "₹999", duration: "90 mins" }
    ]
  },
   "laptop": {
    name: "Laptop Services",
    banner: "https://cdn-icons-png.flaticon.com/512/1080/1080745.png",
    serviceItems: [
      { name: "General Service", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972124.png" },
      { name: "OS Installation", icon: "https://cdn-icons-png.flaticon.com/512/2922/2922214.png" },
      { name: "Screen Replacement", icon: "https://cdn-icons-png.flaticon.com/512/1081/1081373.png" },
      { name: "Battery Replacement", icon: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png" },
      { name: "Keyboard Repair", icon: "https://cdn-icons-png.flaticon.com/512/2516/2516955.png" },
      { name: "SSD Upgrade", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920562.png" },
      { name: "RAM Upgrade", icon: "https://cdn-icons-png.flaticon.com/512/2913/2913627.png" },
      { name: "Data Recovery", icon: "https://cdn-icons-png.flaticon.com/512/2977/2977255.png" },
      { name: "Virus Removal", icon: "https://cdn-icons-png.flaticon.com/512/2918/2918299.png" },
      { name: "Diagnostics", icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" }
    ],
    promises: [
      "Skilled IT Technicians",
      "Genuine Components",
      "Fast Turnaround"
    ],
    packages: [
      { title: "General Service", description: "Internal cleaning, thermal paste renewal & fan check", price: "₹699", duration: "60 mins" },
      { title: "OS Installation (Windows)", description: "Fresh Windows install with all essential drivers", price: "₹499", duration: "45 mins" },
      { title: "OS Installation (Mac)", description: "macOS installation with Apple ID setup", price: "₹999", duration: "60 mins" },
      { title: "Screen Replacement", description: "Replace cracked/flickering screen", price: "₹2499", duration: "60 mins" },
      { title: "Battery Replacement", description: "OEM battery with warranty", price: "₹1499", duration: "40 mins" },
      { title: "Keyboard Replacement", description: "Fix or replace non-responsive keyboard", price: "₹999", duration: "50 mins" },
      { title: "SSD Upgrade + Clone", description: "Install SSD and migrate data", price: "₹1299", duration: "60 mins" },
      { title: "RAM Upgrade", description: "Add extra RAM to boost performance", price: "₹799", duration: "30 mins" },
      { title: "Data Recovery", description: "Recover files from crashed or formatted drive", price: "₹1999", duration: "90 mins" },
      { title: "Virus & Malware Removal", description: "Deep clean and antivirus setup", price: "₹399", duration: "40 mins" },
      { title: "Wi‑Fi Troubleshooting", description: "Fix network drivers and connectivity", price: "₹349", duration: "30 mins" },
      { title: "Motherboard Repair", description: "Circuit-level fixes and diagnostics", price: "₹2499", duration: "90 mins" },
      { title: "Hinge/Casing Repair", description: "Repair broken hinges or outer shell", price: "₹1299", duration: "60 mins" },
      { title: "Overheating Fix", description: "Thermal cleaning and fan optimization", price: "₹599", duration: "40 mins" },
      { title: "No Power Boot", description: "Diagnose & repair power-on issues", price: "₹499", duration: "45 mins" },
      { title: "Blue Screen Fix", description: "Resolve BSOD and driver errors", price: "₹449", duration: "40 mins" },
      { title: "Startup Tune‑Up", description: "Speed optimization & junk cleanup", price: "₹399", duration: "30 mins" },
      { title: "External Cleaning", description: "Keyboard, screen & body dust removal", price: "₹199", duration: "20 mins" },
      { title: "Diagnostics Check", description: "Full hardware & software diagnostics", price: "₹549", duration: "50 mins" },
      { title: "Software Installation Bundle", description: "Install up to 5 essential apps", price: "₹349", duration: "30 mins" }
    ]
  },
  "tv": {
  name: "TV Services",
  banner: "https://cdn-icons-png.flaticon.com/512/2937/2937770.png",
  serviceItems: [
    { name: "TV Installation", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917244.png" },
    { name: "Wall Mounting", icon: "https://cdn-icons-png.flaticon.com/512/6190/6190406.png" },
    { name: "Screen Repair", icon: "https://cdn-icons-png.flaticon.com/512/1081/1081373.png" },
    { name: "Display Issue", icon: "https://cdn-icons-png.flaticon.com/512/3790/3790337.png" },
    { name: "Sound Problem", icon: "https://cdn-icons-png.flaticon.com/512/252/252035.png" },
    { name: "Remote Not Working", icon: "https://cdn-icons-png.flaticon.com/512/167/167472.png" },
    { name: "Power Issue", icon: "https://cdn-icons-png.flaticon.com/512/2640/2640994.png" },
    { name: "Port Issue", icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png" },
    { name: "Smart TV Setup", icon: "https://cdn-icons-png.flaticon.com/512/3741/3741857.png" }
  ],
  promises: [
    "Skilled TV Technicians",
    "Wall Mounts Available",
    "90-Day Service Warranty"
  ],
  packages: [
    { title: "LED TV Installation", description: "Standard wall mounting with basic setup", price: "₹499", duration: "45 mins" },
    { title: "LCD TV Installation", description: "Mounting & angle adjustment", price: "₹599", duration: "50 mins" },
    { title: "LED TV Uninstallation", description: "Safely remove wall-mounted TV", price: "₹349", duration: "30 mins" },
    { title: "Smart TV Setup", description: "Wi-Fi, app setup, screen calibration", price: "₹399", duration: "40 mins" },
    { title: "TV Display Issue Check", description: "Flickering, black screen diagnostics", price: "₹249", duration: "30 mins" },
    { title: "TV Sound Repair", description: "Low volume, distorted sound fix", price: "₹299", duration: "30 mins" },
    { title: "Remote Control Fix", description: "Battery/contact issues", price: "₹199", duration: "20 mins" },
    { title: "Screen Panel Replacement", description: "Replace cracked or blank screen", price: "₹2999", duration: "90 mins" },
    { title: "HDMI/USB Port Fix", description: "Loose or non-working ports", price: "₹499", duration: "40 mins" },
    { title: "Power Supply Repair", description: "TV doesn’t turn on", price: "₹699", duration: "60 mins" },
    { title: "Backlight Repair", description: "Fix dim or no backlight issues", price: "₹799", duration: "75 mins" },
    { title: "Panel Cleaning", description: "Internal dust removal", price: "₹399", duration: "30 mins" },
    { title: "TV Software Update", description: "Firmware or OS update", price: "₹299", duration: "30 mins" },
    { title: "Wi‑Fi Connectivity Issue", description: "Fix smart TV network problems", price: "₹349", duration: "35 mins" },
    { title: "Wall Mount (Movable)", description: "Movable mount with alignment", price: "₹899", duration: "60 mins" },
    { title: "Wall Mount (Fixed)", description: "Basic wall bracket setup", price: "₹599", duration: "45 mins" },
    { title: "TV Hinge Repair", description: "Fix broken TV stand/hinge", price: "₹499", duration: "40 mins" },
    { title: "Cracked Frame Fix", description: "Repair outer frame of TV", price: "₹449", duration: "35 mins" },
    { title: "Android TV Setup", description: "App setup, account sync", price: "₹499", duration: "40 mins" },
    { title: "TV Full Diagnosis", description: "Complete check-up before repair", price: "₹299", duration: "30 mins" }
  ]
},
"chimney": {
  name: "Chimney Services",
  banner: "https://cdn-icons-png.flaticon.com/512/9290/9290940.png",
  serviceItems: [
    { name: "Chimney Deep Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/10423/10423978.png" },
    { name: "Filter Replacement", icon: "https://cdn-icons-png.flaticon.com/512/4305/4305574.png" },
    { name: "Chimney Installation", icon: "https://cdn-icons-png.flaticon.com/512/10680/10680499.png" },
    { name: "Motor Repair", icon: "https://cdn-icons-png.flaticon.com/512/4229/4229360.png" },
    { name: "Ducting Fix", icon: "https://cdn-icons-png.flaticon.com/512/10681/10681313.png" },
    { name: "Noise Issue", icon: "https://cdn-icons-png.flaticon.com/512/10682/10682380.png" },
    { name: "Suction Issue", icon: "https://cdn-icons-png.flaticon.com/512/9290/9290941.png" },
    { name: "PCB Board Repair", icon: "https://cdn-icons-png.flaticon.com/512/2696/2696374.png" },
    { name: "Chimney Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917246.png" }
  ],
  promises: [
    "Trained Technicians",
    "Odor-Free Deep Clean",
    "Original Spare Parts"
  ],
  packages: [
    { title: "Standard Chimney Cleaning", description: "Outer cleaning + basic filter wipe", price: "₹499", duration: "30 mins" },
    { title: "Deep Cleaning (Mesh Filter)", description: "Full disassembly and chemical clean", price: "₹899", duration: "60 mins" },
    { title: "Deep Cleaning (Baffle Filter)", description: "Grease removal with hot water flush", price: "₹999", duration: "70 mins" },
    { title: "Auto-Clean Chimney Service", description: "Inner heating plate cleaning", price: "₹1199", duration: "75 mins" },
    { title: "Filter Replacement", description: "Mesh or baffle replacement", price: "₹499", duration: "30 mins" },
    { title: "Motor Repair", description: "Fix humming or jammed motor", price: "₹799", duration: "60 mins" },
    { title: "Suction Problem Fix", description: "Low suction power resolution", price: "₹699", duration: "50 mins" },
    { title: "Noise Problem Diagnosis", description: "Unusual sound investigation", price: "₹299", duration: "30 mins" },
    { title: "Switch Panel Repair", description: "Faulty button or display panel", price: "₹399", duration: "30 mins" },
    { title: "Chimney Installation", description: "Mounting, ducting, and safety check", price: "₹1499", duration: "90 mins" },
    { title: "Chimney Uninstallation", description: "Safe removal and sealing", price: "₹599", duration: "40 mins" },
    { title: "Duct Pipe Replacement", description: "Fix broken or leaking duct", price: "₹499", duration: "45 mins" },
    { title: "PCB Board Repair", description: "Electronic control board fix", price: "₹899", duration: "60 mins" },
    { title: "Chimney Bulb Replacement", description: "Replace inner LED/light", price: "₹149", duration: "15 mins" },
    { title: "Annual Maintenance Plan", description: "3 cleanings + minor fixes/year", price: "₹2499", duration: "1 Year" },
    { title: "Chimney Glass Repair", description: "Replace cracked top or cover glass", price: "₹499", duration: "30 mins" },
    { title: "Grease Trap Cleaning", description: "Interior oil trap removal & wash", price: "₹399", duration: "30 mins" },
    { title: "Touch Panel Repair", description: "Unresponsive display fix", price: "₹599", duration: "45 mins" },
    { title: "Odor Removal Service", description: "Deodorize with anti-grease coat", price: "₹349", duration: "25 mins" },
    { title: "Premium Chimney Care", description: "Full clean + motor + ducts + glass", price: "₹1599", duration: "90 mins" }
  ]
},
"microwave": {
  name: "Microwave Services",
  banner: "https://cdn-icons-png.flaticon.com/512/10685/10685157.png",
  serviceItems: [
    { name: "Microwave Repair", icon: "https://cdn-icons-png.flaticon.com/512/10685/10685135.png" },
    { name: "Microwave Installation", icon: "https://cdn-icons-png.flaticon.com/512/10685/10685145.png" },
    { name: "Door Issue", icon: "https://cdn-icons-png.flaticon.com/512/9839/9839606.png" },
    { name: "Not Heating", icon: "https://cdn-icons-png.flaticon.com/512/9906/9906284.png" },
    { name: "Glass Plate Not Rotating", icon: "https://cdn-icons-png.flaticon.com/512/7827/7827617.png" },
    { name: "Sparking Inside", icon: "https://cdn-icons-png.flaticon.com/512/3645/3645745.png" },
    { name: "Buttons Not Working", icon: "https://cdn-icons-png.flaticon.com/512/6521/6521585.png" },
    { name: "Fuse Replacement", icon: "https://cdn-icons-png.flaticon.com/512/2665/2665171.png" },
    { name: "Touchpad Issue", icon: "https://cdn-icons-png.flaticon.com/512/2991/2991156.png" }
  ],
  promises: [
    "Verified Appliance Technicians",
    "Quick Heating Issue Resolution",
    "90-Day Service Guarantee"
  ],
  packages: [
    { title: "Basic Microwave Repair", description: "Common fixes for non-heating or startup issue", price: "₹299", duration: "30 mins" },
    { title: "Microwave Installation", description: "Install countertop or built-in microwave", price: "₹499", duration: "45 mins" },
    { title: "Microwave Uninstallation", description: "Safe removal from wall/slot", price: "₹299", duration: "25 mins" },
    { title: "Heating Problem Fix", description: "Magnetron and diode check", price: "₹699", duration: "45 mins" },
    { title: "Control Panel Repair", description: "Unresponsive or broken control buttons", price: "₹599", duration: "40 mins" },
    { title: "Touchpad Not Working", description: "Touchpad circuit inspection and fix", price: "₹599", duration: "40 mins" },
    { title: "Microwave Fuse Replacement", description: "Short circuit or no power fix", price: "₹349", duration: "30 mins" },
    { title: "Door Issue Repair", description: "Door lock or latch fix", price: "₹399", duration: "30 mins" },
    { title: "Sparking Inside", description: "Remove burnt residue or faulty mica", price: "₹499", duration: "30 mins" },
    { title: "Glass Plate Not Rotating", description: "Motor or coupling repair", price: "₹349", duration: "30 mins" },
    { title: "Noise Issue Fix", description: "Unusual noise while operating", price: "₹299", duration: "25 mins" },
    { title: "Microwave Bulb Replacement", description: "Replace interior bulb", price: "₹199", duration: "20 mins" },
    { title: "Timer Not Working", description: "Repair stuck or faulty timers", price: "₹299", duration: "30 mins" },
    { title: "Grill Function Not Working", description: "Fix grill coil or switch", price: "₹499", duration: "45 mins" },
    { title: "Convection Repair", description: "Restore convection fan or heater", price: "₹699", duration: "60 mins" },
    { title: "PCB Replacement", description: "Motherboard replacement for control failure", price: "₹999", duration: "60 mins" },
    { title: "Microwave Cleaning", description: "Internal chamber and tray cleaning", price: "₹249", duration: "20 mins" },
    { title: "Display Not Working", description: "Fix digital display or LED", price: "₹299", duration: "30 mins" },
    { title: "Power Fluctuation Issue", description: "Stabilizer and plug fix", price: "₹399", duration: "30 mins" },
    { title: "Comprehensive Service", description: "Includes inspection, heating fix & cleanup", price: "₹799", duration: "60 mins" }
  ]
},
"stove": {
  name: "Stove Services",
  banner: "https://cdn-icons-png.flaticon.com/512/10687/10687850.png",
  serviceItems: [
    { name: "Gas Stove Repair", icon: "https://cdn-icons-png.flaticon.com/512/10687/10687854.png" },
    { name: "Auto Ignition Repair", icon: "https://cdn-icons-png.flaticon.com/512/10687/10687851.png" },
    { name: "Burner Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/10687/10687859.png" },
    { name: "Knob Replacement", icon: "https://cdn-icons-png.flaticon.com/512/3205/3205425.png" },
    { name: "Glass Top Repair", icon: "https://cdn-icons-png.flaticon.com/512/8830/8830311.png" },
    { name: "Gas Leak Check", icon: "https://cdn-icons-png.flaticon.com/512/11024/11024671.png" },
    { name: "Stove Installation", icon: "https://cdn-icons-png.flaticon.com/512/10885/10885391.png" },
    { name: "Burner Replacement", icon: "https://cdn-icons-png.flaticon.com/512/2903/2903922.png" },
    { name: "Stove Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/10507/10507244.png" }
  ],
  promises: [
    "Safety-Checked Repairs",
    "Certified Gas Technicians",
    "Same-Day Service"
  ],
  packages: [
    { title: "2-Burner Stove Cleaning", description: "Burner, nozzle & top plate cleaning", price: "₹349", duration: "30 mins" },
    { title: "3-Burner Stove Cleaning", description: "Deep cleaning of burners and pipes", price: "₹399", duration: "35 mins" },
    { title: "4-Burner Stove Cleaning", description: "Full clean with nozzle inspection", price: "₹499", duration: "40 mins" },
    { title: "Auto Ignition Repair", description: "Fix battery/coil ignition", price: "₹599", duration: "45 mins" },
    { title: "Stove Burner Repair", description: "Burner not lighting or uneven flame", price: "₹399", duration: "30 mins" },
    { title: "Burner Replacement", description: "Replace worn or rusted burner", price: "₹499", duration: "40 mins" },
    { title: "Knob Replacement", description: "Loose or broken knobs", price: "₹149", duration: "20 mins" },
    { title: "Stove Glass Top Repair", description: "Fix cracked or shattered glass", price: "₹799", duration: "60 mins" },
    { title: "Gas Leak Detection", description: "Pressure check & leak resolution", price: "₹299", duration: "30 mins" },
    { title: "Stove Installation", description: "Setup with safety checks", price: "₹399", duration: "40 mins" },
    { title: "Stove Uninstallation", description: "Disconnect and pack safely", price: "₹249", duration: "25 mins" },
    { title: "Flame Adjustment", description: "Improve low/high flame balance", price: "₹199", duration: "20 mins" },
    { title: "Inlet Pipe Fix", description: "Replace cracked/damaged pipe", price: "₹249", duration: "25 mins" },
    { title: "Gas Valve Repair", description: "Fix leaking or jammed valve", price: "₹349", duration: "30 mins" },
    { title: "Outer Body Polish", description: "Remove rust and polish surface", price: "₹199", duration: "20 mins" },
    { title: "Heavy Duty Cleaning", description: "Burnt residue & heavy grime removal", price: "₹599", duration: "45 mins" },
    { title: "Comprehensive Check-up", description: "Gas line + nozzle + burner review", price: "₹449", duration: "35 mins" },
    { title: "Heat Shield Installation", description: "Install or replace inner shield", price: "₹299", duration: "30 mins" },
    { title: "No Flame Issue", description: "Fix gas flow or blockages", price: "₹349", duration: "30 mins" },
    { title: "Annual Stove Maintenance", description: "2 cleaning visits + minor fixes", price: "₹899", duration: "2 Visits" }
  ]
},
"refrigerator": {
  name: "Refrigerator Services",
  banner: "https://cdn-icons-png.flaticon.com/512/10684/10684560.png",
  serviceItems: [
    { name: "Cooling Issue", icon: "https://cdn-icons-png.flaticon.com/512/10684/10684552.png" },
    { name: "Gas Refill", icon: "https://cdn-icons-png.flaticon.com/512/10684/10684551.png" },
    { name: "Compressor Repair", icon: "https://cdn-icons-png.flaticon.com/512/997/997367.png" },
    { name: "Fridge Not Starting", icon: "https://cdn-icons-png.flaticon.com/512/10684/10684559.png" },
    { name: "Door Issue", icon: "https://cdn-icons-png.flaticon.com/512/5995/5995017.png" },
    { name: "Water Leakage", icon: "https://cdn-icons-png.flaticon.com/512/4835/4835255.png" },
    { name: "Noise Issue", icon: "https://cdn-icons-png.flaticon.com/512/7434/7434427.png" },
    { name: "Thermostat Issue", icon: "https://cdn-icons-png.flaticon.com/512/9839/9839575.png" },
    { name: "Defrosting Issue", icon: "https://cdn-icons-png.flaticon.com/512/10684/10684555.png" }
  ],
  promises: [
    "Genuine Spare Parts",
    "Gas Leak Safety Check",
    "Fast & Certified Technicians"
  ],
  packages: [
    { title: "Single Door Fridge Service", description: "Full clean-up + gas check", price: "₹499", duration: "45 mins" },
    { title: "Double Door Fridge Service", description: "Full unit cleaning + cooling check", price: "₹599", duration: "50 mins" },
    { title: "Side-by-Side Fridge Service", description: "Professional deep clean", price: "₹799", duration: "60 mins" },
    { title: "Cooling Issue Repair", description: "Check compressor and gas pressure", price: "₹649", duration: "45 mins" },
    { title: "Compressor Replacement", description: "Genuine parts + testing", price: "₹2499", duration: "90 mins" },
    { title: "Fridge Not Cooling", description: "Thermostat & motor diagnosis", price: "₹349", duration: "30 mins" },
    { title: "Gas Refill", description: "Eco-friendly refrigerant refill", price: "₹1199", duration: "60 mins" },
    { title: "Door Gasket Replacement", description: "Fix broken or leaky door seal", price: "₹499", duration: "30 mins" },
    { title: "Defrosting System Fix", description: "Check auto-defrost & heaters", price: "₹499", duration: "40 mins" },
    { title: "PCB Repair", description: "Control board issue fix", price: "₹899", duration: "60 mins" },
    { title: "Water Leakage Fix", description: "Drain line and tray check", price: "₹349", duration: "30 mins" },
    { title: "Freezer Not Working", description: "Cooling coil and fan fix", price: "₹549", duration: "45 mins" },
    { title: "Noisy Fridge Repair", description: "Compressor or fan noise fix", price: "₹399", duration: "30 mins" },
    { title: "Thermostat Replacement", description: "Set and regulate temp", price: "₹449", duration: "30 mins" },
    { title: "Bulb Replacement", description: "Interior light not working", price: "₹149", duration: "15 mins" },
    { title: "Fridge Body Dent Fix", description: "Minor bodywork & polishing", price: "₹599", duration: "45 mins" },
    { title: "Fridge Cleaning", description: "Internal shelf and tray sanitation", price: "₹299", duration: "30 mins" },
    { title: "Ice Build-up Issue", description: "Defrost timer & vent check", price: "₹349", duration: "30 mins" },
    { title: "Refrigerator Installation", description: "Proper leveling & plug test", price: "₹249", duration: "20 mins" },
    { title: "Fridge Relocation Service", description: "Disconnect, shift, reinstall", price: "₹699", duration: "50 mins" }
  ]
},
"purifier": {
  name: "Water Purifier Services",
  banner: "https://cdn-icons-png.flaticon.com/512/6863/6863547.png",
  serviceItems: [
    { name: "RO Service", icon: "https://cdn-icons-png.flaticon.com/512/3909/3909444.png" },
    { name: "Filter Change", icon: "https://cdn-icons-png.flaticon.com/512/893/893218.png" },
    { name: "Water Leakage", icon: "https://cdn-icons-png.flaticon.com/512/4526/4526843.png" },
    { name: "Installation", icon: "https://cdn-icons-png.flaticon.com/512/3550/3550300.png" },
    { name: "Water Taste Issue", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942698.png" },
    { name: "Noise Issue", icon: "https://cdn-icons-png.flaticon.com/512/7434/7434427.png" },
    { name: "No Water Output", icon: "https://cdn-icons-png.flaticon.com/512/2748/2748614.png" },
    { name: "Pump Repair", icon: "https://cdn-icons-png.flaticon.com/512/10086/10086240.png" },
    { name: "AMC Plan", icon: "https://cdn-icons-png.flaticon.com/512/10490/10490091.png" }
  ],
  promises: [
    "Genuine RO Filters",
    "Water Quality Checked",
    "90-Day Post-Service Warranty"
  ],
  packages: [
    { title: "Basic RO Service", description: "Filter check & minor fixes", price: "₹299", duration: "30 mins" },
    { title: "Standard RO Maintenance", description: "Cleaning, sanitization & leak check", price: "₹499", duration: "40 mins" },
    { title: "Complete Filter Change", description: "Sediment + Carbon + RO membrane", price: "₹1499", duration: "60 mins" },
    { title: "Water Leakage Fix", description: "Resolve pipe or joint leak", price: "₹349", duration: "30 mins" },
    { title: "Installation (Wall Mount)", description: "Includes mounting and plumbing", price: "₹599", duration: "60 mins" },
    { title: "Uninstallation", description: "Disconnect unit safely", price: "₹299", duration: "30 mins" },
    { title: "Water Taste Issue Fix", description: "Filter or TDS adjustment", price: "₹399", duration: "30 mins" },
    { title: "RO Pump Repair", description: "Fix motor and noise issues", price: "₹649", duration: "45 mins" },
    { title: "TDS Controller Adjustment", description: "Balance water mineral content", price: "₹299", duration: "25 mins" },
    { title: "Noise Issue Repair", description: "Pump or valve issue", price: "₹349", duration: "30 mins" },
    { title: "Pre-Filter Installation", description: "Add pre-filter to improve life", price: "₹449", duration: "30 mins" },
    { title: "RO Membrane Replacement", description: "High-quality membrane fitment", price: "₹999", duration: "40 mins" },
    { title: "Water Flow Issue", description: "Check blockages and motor pressure", price: "₹299", duration: "30 mins" },
    { title: "UV Lamp Replacement", description: "Kills harmful germs", price: "₹349", duration: "25 mins" },
    { title: "Booster Pump Installation", description: "For low-pressure areas", price: "₹799", duration: "45 mins" },
    { title: "Tap Replacement", description: "Fix leaky or broken dispenser tap", price: "₹199", duration: "15 mins" },
    { title: "Sediment Filter Replacement", description: "First stage filtration", price: "₹249", duration: "20 mins" },
    { title: "AMC Basic Plan", description: "2 services/year + minor part replacement", price: "₹1499", duration: "1 Year" },
    { title: "Comprehensive AMC", description: "All filters + 3 visits/year", price: "₹2499", duration: "1 Year" },
    { title: "Digital Display Fix", description: "Fix screen & sensor error", price: "₹499", duration: "30 mins" }
  ]
},
"geyser": {
  name: "Geyser Services",
  banner: "https://cdn-icons-png.flaticon.com/512/10932/10932739.png",
  serviceItems: [
    { name: "Geyser Repair", icon: "https://cdn-icons-png.flaticon.com/512/8853/8853504.png" },
    { name: "Installation", icon: "https://cdn-icons-png.flaticon.com/512/10470/10470716.png" },
    { name: "Water Not Heating", icon: "https://cdn-icons-png.flaticon.com/512/5571/5571064.png" },
    { name: "Overheating Issue", icon: "https://cdn-icons-png.flaticon.com/512/993/993834.png" },
    { name: "Noise Issue", icon: "https://cdn-icons-png.flaticon.com/512/7434/7434427.png" },
    { name: "Water Leakage", icon: "https://cdn-icons-png.flaticon.com/512/4526/4526843.png" },
    { name: "Thermostat Replacement", icon: "https://cdn-icons-png.flaticon.com/512/8942/8942283.png" },
    { name: "Anode Rod Replacement", icon: "https://cdn-icons-png.flaticon.com/512/9190/9190011.png" },
    { name: "Geyser Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/10507/10507244.png" }
  ],
  promises: [
    "100% Safe Repairs",
    "Tested for Shock & Overheat",
    "Trusted Certified Technicians"
  ],
  packages: [
    { title: "Instant Geyser Repair", description: "Quick fix for minor issues", price: "₹349", duration: "30 mins" },
    { title: "Storage Geyser Repair", description: "Internal tank or heating issue", price: "₹499", duration: "45 mins" },
    { title: "Water Not Heating", description: "Check coil, thermostat", price: "₹399", duration: "30 mins" },
    { title: "Installation (Instant)", description: "Wall mount & pipe fitting", price: "₹549", duration: "45 mins" },
    { title: "Installation (Storage)", description: "Includes frame & pipe fitment", price: "₹649", duration: "60 mins" },
    { title: "Geyser Uninstallation", description: "Safe removal & packing", price: "₹299", duration: "25 mins" },
    { title: "Overheating Issue Fix", description: "Replace thermostat or coil", price: "₹449", duration: "30 mins" },
    { title: "Water Leakage Fix", description: "Fix tank, pipe or inlet joint", price: "₹349", duration: "30 mins" },
    { title: "Thermostat Replacement", description: "Fix temperature control", price: "₹399", duration: "30 mins" },
    { title: "Anode Rod Replacement", description: "Prevent corrosion in tank", price: "₹499", duration: "30 mins" },
    { title: "Geyser Cleaning", description: "Flush tank to remove scaling", price: "₹399", duration: "30 mins" },
    { title: "Heating Element Replacement", description: "Fix slow or no heating", price: "₹799", duration: "45 mins" },
    { title: "Noise Issue Repair", description: "Vibration or boiling sound fix", price: "₹299", duration: "25 mins" },
    { title: "Dry Heating Fix", description: "Sensor & element check", price: "₹399", duration: "30 mins" },
    { title: "Shock Issue Fix", description: "Insulation and wire check", price: "₹449", duration: "30 mins" },
    { title: "Rust Removal & Tank Polish", description: "Clean inner tank coat", price: "₹499", duration: "40 mins" },
    { title: "Pipe Kit Replacement", description: "Replace inlet/outlet pipe", price: "₹299", duration: "20 mins" },
    { title: "Safety Valve Replacement", description: "Control steam pressure", price: "₹399", duration: "30 mins" },
    { title: "Indicator Light Repair", description: "Fix non-working light", price: "₹199", duration: "15 mins" },
    { title: "Annual Maintenance Pack", description: "2 cleanings + part check", price: "₹899", duration: "1 Year" }
  ]
},
"sofa-&-carpet": {
  name: "Sofa & Carpet Services",
  banner: "https://cdn-icons-png.flaticon.com/512/3917/3917717.png",
  serviceItems: [
    { name: "Sofa Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/3917/3917723.png" },
    { name: "Carpet Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/3917/3917745.png" },
    { name: "Stain Removal", icon: "https://cdn-icons-png.flaticon.com/512/6191/6191110.png" },
    { name: "Deep Steam Clean", icon: "https://cdn-icons-png.flaticon.com/512/6191/6191099.png" },
    { name: "Dry Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/6191/6191102.png" },
    { name: "Deodorizing", icon: "https://cdn-icons-png.flaticon.com/512/3917/3917728.png" },
    { name: "Pet Hair Removal", icon: "https://cdn-icons-png.flaticon.com/512/3917/3917735.png" },
    { name: "Allergy Treatment", icon: "https://cdn-icons-png.flaticon.com/512/6191/6191083.png" },
    { name: "Fabric Protection", icon: "https://cdn-icons-png.flaticon.com/512/3917/3917720.png" }
  ],
  promises: [
    "Eco‑Friendly Cleaners",
    "Quick‑Dry Technology",
    "Stain & Odor Warranty"
  ],
  packages: [
    { title: "Single Seater Sofa Cleaning", description: "Steam deep clean for one-seater sofa", price: "₹599", duration: "45 mins" },
    { title: "Two Seater Sofa Cleaning", description: "Standard clean for two-seater sofa", price: "₹799", duration: "60 mins" },
    { title: "Three Seater Sofa Cleaning", description: "Deep cleansing for 3-seater sofa", price: "₹999", duration: "75 mins" },
    { title: "Leather Sofa Cleaning", description: "Special cleaning for leather upholstery", price: "₹1099", duration: "60 mins" },
    { title: "Fabric Sofa Cleaning", description: "Fabric safe steam clean", price: "₹899", duration: "60 mins" },
    { title: "Carpet Cleaning (Small)", description: "Clean up to 4 sq. yards", price: "₹499", duration: "45 mins" },
    { title: "Carpet Cleaning (Medium)", description: "Clean up to 8 sq. yards", price: "₹899", duration: "60 mins" },
    { title: "Carpet Cleaning (Large)", description: "Clean up to 12 sq. yards", price: "₹1299", duration: "75 mins" },
    { title: "Stain Removal (Sofa)", description: "Targeted stain & spot treatment", price: "₹399", duration: "30 mins" },
    { title: "Stain Removal (Carpet)", description: "Professional spot clean", price: "₹499", duration: "30 mins" },
    { title: "Pet Hair Removal (Sofa)", description: "Removes pet hair & dander", price: "₹499", duration: "45 mins" },
    { title: "Pet Hair Removal (Carpet)", description: "Deep vacuum for pet hair", price: "₹599", duration: "45 mins" },
    { title: "Deodorizing Service", description: "Eliminate odors from fabric", price: "₹399", duration: "30 mins" },
    { title: "Allergen Treatment", description: "Hypoallergenic chemical wash", price: "₹699", duration: "50 mins" },
    { title: "Fabric Protectant Coating", description: "Apply stain-repellent barrier", price: "₹499", duration: "30 mins" },
    { title: "Steam & Deodorize Combo", description: "Steam clean + deodorizing", price: "₹1299", duration: "90 mins" },
    { title: "Dry Cleaning Sofa", description: "Chemical dry clean without water", price: "₹799", duration: "60 mins" },
    { title: "Dry Cleaning Carpet", description: "Dry process for delicate carpets", price: "₹999", duration: "75 mins" },
    { title: "Deep Steam Clean Combo", description: "Sofa + carpet deep steam", price: "₹1999", duration: "120 mins" },
    { title: "Annual Maintenance Pack", description: "4 sofas + 2 carpets clean/year", price: "₹4999", duration: "Annual plan" }
  ]
},
"full-home-cleaning": {
  name: "Full Home Cleaning",
  banner: "https://cdn-icons-png.flaticon.com/512/2913/2913257.png",
  serviceItems: [
    { name: "Kitchen Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2922/2922234.png" },
    { name: "Living Room Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2923/2923264.png" },
    { name: "Bedroom Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2924/2924071.png" },
    { name: "Bathroom Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2925/2925435.png" },
    { name: "Windows & Glass", icon: "https://cdn-icons-png.flaticon.com/512/2926/2926148.png" },
    { name: "Floor Washing", icon: "https://cdn-icons-png.flaticon.com/512/2927/2927704.png" },
    { name: "Dusting", icon: "https://cdn-icons-png.flaticon.com/512/2928/2928843.png" },
    { name: "Vacuuming", icon: "https://cdn-icons-png.flaticon.com/512/2929/2929852.png" },
    { name: "Sofa & Carpet", icon: "https://cdn-icons-png.flaticon.com/512/2930/2930254.png" }
  ],
  promises: [
    "Trained & Honest Staff",
    "Eco-Friendly Supplies",
    "Satisfaction Guaranteed"
  ],
  packages: [
    { title: "1 BHK Deep Clean", description: "Complete home deep clean for 1 BHK", price: "₹2499", duration: "3 hrs" },
    { title: "2 BHK Deep Clean", description: "Thorough clean for 2 BHK home", price: "₹3499", duration: "4 hrs" },
    { title: "3 BHK Deep Clean", description: "Deep cleaning of 3 BHK house", price: "₹4499", duration: "5 hrs" },
    { title: "4 BHK Deep Clean", description: "Extensive clean for 4 BHK home", price: "₹5499", duration: "6 hrs" },
    { title: "Kitchen Intensive Clean", description: "Degrease & sanitize kitchen thoroughly", price: "₹1499", duration: "2 hrs" },
    { title: "Bathroom Intensive Clean", description: "Scale removal & full sanitization", price: "₹999", duration: "1.5 hrs" },
    { title: "Window & Glass Clean", description: "Clear all windows and glass surfaces", price: "₹799", duration: "1 hr" },
    { title: "Sofa & Carpet Combo", description: "Living room fabric deep clean", price: "₹1999", duration: "2.5 hrs" },
    { title: "Puja Room Clean", description: "Specialcare for sacred spaces", price: "₹499", duration: "45 mins" },
    { title: "Balcony Cleaning", description: "Sweep, mop & tidy balcony", price: "₹499", duration: "45 mins" },
    { title: "Cupboard Cleaning", description: "Internal dusting of racks & shelves", price: "₹899", duration: "1 hr" },
    { title: "Floor Wash & Mop", description: "Polish and sanitize all floors", price: "₹599", duration: "1 hr" },
    { title: "Dust & Cobweb Removal", description: "Ceiling corners, fans, false ceilings", price: "₹799", duration: "1 hr" },
    { title: "Full Home Sanitization", description: "Disinfect all surfaces thoroughly", price: "₹2999", duration: "3 hrs" },
    { title: "Move-In Cleaning", description: "Pre-occupancy deep cleaning", price: "₹3999", duration: "4 hrs" },
    { title: "Move-Out Cleaning", description: "Post-tenancy end-of-lease clean", price: "₹3999", duration: "4 hrs" },
    { title: "Post-Construction Clean", description: "Dust & debris removal after renovation", price: "₹5499", duration: "6 hrs" },
    { title: "Annual Home Clean-up", description: "One year of 2 deep cleans", price: "₹7499", duration: "12 hrs total" },
    { title: "Express Clean (2 hrs)", description: "Quick tidy-up session", price: "₹1499", duration: "2 hrs" },
    { title: "Custom Hourly Service", description: "Hourly cleaning as needed", price: "₹499/hr", duration: "Hourly" }
  ]
},
"bathroom-cleaning": {
  name: "Bathroom Cleaning Services",
  banner: "https://cdn-icons-png.flaticon.com/512/3075/3075987.png",
  serviceItems: [
    { name: "Tile & Grout Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2913/2913022.png" },
    { name: "Sanitization", icon: "https://cdn-icons-png.flaticon.com/512/2925/2925435.png" },
    { name: "Shower Glass Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/3075/3075960.png" },
    { name: "Faucet & Fixture Polish", icon: "https://cdn-icons-png.flaticon.com/512/2924/2924126.png" },
    { name: "Drain Unclogging", icon: "https://cdn-icons-png.flaticon.com/512/3076/3076445.png" },
    { name: "Mold & Mildew Removal", icon: "https://cdn-icons-png.flaticon.com/512/2925/2925642.png" },
    { name: "Toilet Deep Clean", icon: "https://cdn-icons-png.flaticon.com/512/3075/3075850.png" },
    { name: "Mirror Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/2926/2926097.png" },
    { name: "Ventilation Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/3077/3077427.png" }
  ],
  promises: [
    "Hospital-Grade Disinfection",
    "Safe on All Surfaces",
    "Visible Shine or We Return"
  ],
  packages: [
    { title: "Basic Bathroom Clean", description: "Standard scrub and rinse of sink, toilet, shower", price: "₹499", duration: "60 mins" },
    { title: "Luxury Bathroom Deep Clean", description: "Tile, grout, fixtures & sealant treatment", price: "₹899", duration: "90 mins" },
    { title: "Toilet Deep Sanitize", description: "Disinfect bowl, seat, and base thoroughly", price: "₹399", duration: "45 mins" },
    { title: "Shower Glass Polish", description: "Remove spots, hard water marks", price: "₹349", duration: "30 mins" },
    { title: "Mold & Mildew Treatment", description: "Full chemical removal from surfaces", price: "₹549", duration: "50 mins" },
    { title: "Faucet & Fixture Shine", description: "Chrome polish and rust reduce", price: "₹299", duration: "25 mins" },
    { title: "Drain Unclogging Service", description: "Clear minor blockages in drain", price: "₹449", duration: "40 mins" },
    { title: "Ventilation Fan Clean", description: "Clean fan and exhaust area", price: "₹399", duration: "35 mins" },
    { title: "Mirror Cleaning & Polish", description: "Streak-free glass shine", price: "₹249", duration: "20 mins" },
    { title: "Full Sanitization Service", description: "Anti-bacterial spray on all surfaces", price: "₹699", duration: "70 mins" },
    { title: "Tile & Grout Restoration", description: "Deep grout clean & seal", price: "₹649", duration: "55 mins" },
    { title: "Ceramic & Porcelain Shine", description: "Bring back original shine", price: "₹549", duration: "45 mins" },
    { title: "Overhead Shower Cleaning", description: "Descale and sanitize shower head", price: "₹299", duration: "25 mins" },
    { title: "Bathroom Deodorizing", description: "Neutralize lingering odors", price: "₹349", duration: "30 mins" },
    { title: "Eco-Friendly Clean", description: "Green cleaners safe for kids/pets", price: "₹599", duration: "60 mins" },
    { title: "Water Stain Removal", description: "Hard-water mark treatment", price: "₹399", duration: "45 mins" },
    { title: "Bathroom Repair Check", description: "Check and fix small leaks/faucet drips", price: "₹449", duration: "50 mins" },
    { title: "Annual Bathroom Package", description: "4 deep cleans a year", price: "₹2499", duration: "Yearly" },
    { title: "Bathroom Refresh", description: "Quick rinse & polish", price: "₹299", duration: "30 mins" },
    { title: "Custom Hourly Clean", description: "Flexible service as per need", price: "₹499/hr", duration: "Hourly" }
  ]
},
"bed-bugs-control": {
  name: "Bed Bugs Control",
  banner: "https://cdn-icons-png.flaticon.com/512/1479/1479309.png",
  serviceItems: [
    { name: "Inspection", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064190.png" },
    { name: "Chemical Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064194.png" },
    { name: "Heat Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064188.png" },
    { name: "Follow-up Visit", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064183.png" },
    { name: "Mattress Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064192.png" },
    { name: "Curtain Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064180.png" },
    { name: "Bed Frame Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064185.png" },
    { name: "Bag Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064176.png" },
    { name: "Sofa Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064182.png" }
  ],
  promises: [
    "EPA‑Approved Insecticides",
    "Trained Pest Experts",
    "Guaranteed 30‑Day Follow‑up"
  ],
  packages: [
    { title: "Basic Inspection Visit", description: "Identify bed bugs in bedroom only", price: "₹499", duration: "45 mins" },
    { title: "1-Room Chemical Spray", description: "Chemical treatment for one room", price: "₹999", duration: "60 mins" },
    { title: "2-Room Chemical Spray", description: "Treat up to two rooms chemically", price: "₹1799", duration: "90 mins" },
    { title: "3-Room Chemical Spray", description: "Chemical treatment for three rooms", price: "₹2499", duration: "120 mins" },
    { title: "Full Home Chemical Spray", description: "All rooms & furnishings treated", price: "₹4999", duration: "240 mins" },
    { title: "Heat Treatment – 1 Room", description: "Thermal kill in one room", price: "₹2999", duration: "4 hrs" },
    { title: "Heat Treatment – 2 Rooms", description: "Heat kill in two rooms", price: "₹4999", duration: "6 hrs" },
    { title: "Heat Treatment – Full Home", description: "Whole-house thermal treatment", price: "₹9999", duration: "8 hrs" },
    { title: "Mattress Only Treatment", description: "Spray & seal mattresses", price: "₹799", duration: "30 mins" },
    { title: "Mattress Deep Heat Treatment", description: "Thermal blast for mattress", price: "₹1499", duration: "60 mins" },
    { title: "Sofa Treatment Spray", description: "Chemical spray for sofas", price: "₹899", duration: "45 mins" },
    { title: "Curtain Treatment", description: "Chemical spray on curtains", price: "₹599", duration: "30 mins" },
    { title: "Bag/Clothes Treatment", description: "Spray/launder items", price: "₹499", duration: "30 mins" },
    { title: "Bed Frame Treatment", description: "Chemical on frame & joints", price: "₹699", duration: "40 mins" },
    { title: "Follow-up Visit", description: "Check and re-treat if needed", price: "₹699", duration: "45 mins" },
    { title: "Prevention Package", description: "Inspection + mattress & frame treatment", price: "₹1499", duration: "90 mins" },
    { title: "Advanced Protection Pack", description: "Chemical + heat combo for one room", price: "₹3499", duration: "4 hrs" },
    { title: "Holiday Cover Combo", description: "Inspection + spray for travel bags", price: "₹999", duration: "60 mins" },
    { title: "Premium Home Pack", description: "2 rooms treated + all follow-ups", price: "₹6999", duration: "6 hrs" },
    { title: "Annual Protection Plan", description: "Inspections + 1 treatment every 6 months", price: "₹11999", duration: "Yearly" },
    { title: "Emergency Call-out", description: "Same-day rapid response", price: "₹1999", duration: "90 mins" }
  ]
},
"termite-control": {
  name: "Termite Control Services",
  banner: "https://cdn-icons-png.flaticon.com/512/1479/1479312.png",
  serviceItems: [
    { name: "Inspection", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064190.png" },
    { name: "Soil Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1078/1078251.png" },
    { name: "Wood Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1078/1078259.png" },
    { name: "Baiting System", icon: "https://cdn-icons-png.flaticon.com/512/1078/1078265.png" },
    { name: "Chemical Spray", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064194.png" },
    { name: "Bore Injection", icon: "https://cdn-icons-png.flaticon.com/512/1078/1078261.png" },
    { name: "Preventive Barrier", icon: "https://cdn-icons-png.flaticon.com/512/1078/1078262.png" },
    { name: "Fill Cracks", icon: "https://cdn-icons-png.flaticon.com/512/1078/1078266.png" },
    { name: "Follow-up Visit", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064183.png" }
  ],
  promises: [
    "IIRR‑Approved Chemicals",
    "Protective Home Barrier",
    "1‑Year Warranty"
  ],
  packages: [
    { title: "Pre-Inspection", description: "Check for termite presence & damage", price: "₹499", duration: "45 mins" },
    { title: "Soil Treatment - 100 sq ft", description: "Chemical barrier around foundation", price: "₹1499", duration: "90 mins" },
    { title: "Soil Treatment - 200 sq ft", description: "Extended ground barrier", price: "₹2799", duration: "2 hrs" },
    { title: "Wood Surface Treatment", description: "Spray on exposed wooden areas", price: "₹899", duration: "60 mins" },
    { title: "Wood Injection Treatment", description: "Bore and treat deep wood", price: "₹1499", duration: "75 mins" },
    { title: "Baiting System Install", description: "Termite trap stations around home", price: "₹1999", duration: "90 mins" },
    { title: "Chemical Spray - Interior", description: "Spray walls and skirting boards", price: "₹999", duration: "60 mins" },
    { title: "Chemical Spray - Exterior", description: "Spray building exteriors", price: "₹1299", duration: "75 mins" },
    { title: "Preventive Barrier Combo", description: "Soil + wood treatment combo", price: "₹3499", duration: "2 hrs" },
    { title: "Crack & Crevice Fill", description: "Seal entry points", price: "₹499", duration: "45 mins" },
    { title: "Annual Inspection Plan", description: "Inspection every 6 months", price: "₹1999", duration: "Yearly" },
    { title: "Follow-up Visit", description: "Re-check & touch-up chemicals", price: "₹699", duration: "60 mins" },
    { title: "Termite Damage Repair", description: "Minor repair of damaged wood", price: "₹2499", duration: "1.5 hrs" },
    { title: "Full Home Treatment", description: "Soil + interior + exterior treatment", price: "₹5499", duration: "3 hrs" },
    { title: "Attic Treatment", description: "Spray or inject attic spaces", price: "₹1499", duration: "60 mins" },
    { title: "Crawl Space Treatment", description: "Protects under-floor areas", price: "₹1999", duration: "90 mins" },
    { title: "Deck/Treasure Wood Treatment", description: "Spray exposed timber deck", price: "₹999", duration: "60 mins" },
    { title: "Soil & Bait Combo", description: "Barrier + bait system installation", price: "₹3999", duration: "2 hrs" },
    { title: "Emergency Call-Out", description: "Rapid termite infestation response", price: "₹2999", duration: "2 hrs" },
    { title: "Comprehensive Warranty Pack", description: "3 visits + annual check", price: "₹6999", duration: "1 Year" }
  ]
},
"general-pest-control": {
  name: "General Pest Control",
  banner: "https://cdn-icons-png.flaticon.com/512/2941/2941665.png",
  serviceItems: [
    { name: "Cockroach Treatment", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953907.png" },
    { name: "Ant Treatment", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953911.png" },
    { name: "Mosquito Control", icon: "https://cdn-icons-png.flaticon.com/512/2941/2941692.png" },
    { name: "Rodent Control", icon: "https://cdn-icons-png.flaticon.com/512/2941/2941681.png" },
    { name: "Fly Control", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953930.png" },
    { name: "Silverfish Treatment", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953925.png" },
    { name: "Termite Inspection", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953903.png" },
    { name: "Bed Bugs", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953909.png" },
    { name: "Web Spider Control", icon: "https://cdn-icons-png.flaticon.com/512/2953/2953929.png" }
  ],
  promises: [
    "Eco‑Safe Insecticides",
    "Certified Technicians",
    "90‑Day Re‑Service Guarantee"
  ],
  packages: [
    { title: "1 BHK Basic Pest Control", description: "Cockroach + ants spray for one-bedroom home", price: "₹1499", duration: "60 mins" },
    { title: "2 BHK Basic Pest Control", description: "Roaches + ants for two-bedroom", price: "₹2499", duration: "90 mins" },
    { title: "3 BHK Basic Pest Control", description: "Up to 3‑bedroom pest spray", price: "₹3499", duration: "2 hrs" },
    { title: "4 BHK Basic Pest Control", description: "Covers larger homes", price: "₹4499", duration: "2.5 hrs" },
    { title: "Mosquito Fogging", description: "Outdoor & indoor fogging service", price: "₹999", duration: "45 mins" },
    { title: "Rodent Baiting", description: "Trap & bait installation", price: "₹799", duration: "40 mins" },
    { title: "Fly Control Spray", description: "Removes flies around home spaces", price: "₹499", duration: "30 mins" },
    { title: "Silverfish Treatment", description: "Protect fabrics and books", price: "₹599", duration: "35 mins" },
    { title: "Complete Pest Cover – 2 BHK", description: "All insect + rodent for two-bedroom", price: "₹3499", duration: "2 hrs" },
    { title: "Complete Pest Cover – 3 BHK", description: "Whole-house insect/rodent control", price: "₹4499", duration: "2.5 hrs" },
    { title: "Ant Nest Treatment", description: "Targeted chemical nest elimination", price: "₹499", duration: "30 mins" },
    { title: "Cockroach Gel Treatment", description: "Internal gel bait for roaches", price: "₹699", duration: "40 mins" },
    { title: "Door-Frame Barrier Spray", description: "Prevent entry barriers for pests", price: "₹399", duration: "25 mins" },
    { title: "Web Spider Removal", description: "Cobweb and spider elimination", price: "₹349", duration: "25 mins" },
    { title: "Quarterly Pest-maintenance", description: "4 visits/year basic spray", price: "₹1999", duration: "Yearly plan" },
    { title: "Half-Year Pest-maintenance", description: "6-month insect/rodent plan", price: "₹2499", duration: "6 months" },
    { title: "Annual Pest-maintenance", description: "12-month protection with 6 visits", price: "₹4499", duration: "1 Year" },
    { title: "Luxury Home Pack – 3 BHK", description: "All pests + rodent + mosquitoes protection", price: "₹6499", duration: "3 hrs" },
    { title: "Emergency Call-Out", description: "Same-day pest control", price: "₹1999", duration: "90 mins" },
    { title: "Custom Hourly Pest Service", description: "Pay-as-you-request", price: "₹499/hr", duration: "Hourly" }
  ]
},
"geyser-work": {
  name: "Geyser Work",
  banner: "https://cdn-icons-png.flaticon.com/512/3946/3946973.png",
  serviceItems: [
    { name: "Installation", icon: "https://cdn-icons-png.flaticon.com/512/2516/2516967.png" },
    { name: "Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/1064/1064190.png" },
    { name: "Water Leakage Fix", icon: "https://cdn-icons-png.flaticon.com/512/2769/2769455.png" },
    { name: "Heating Issue", icon: "https://cdn-icons-png.flaticon.com/512/3946/3946980.png" },
    { name: "Thermostat Replacement", icon: "https://cdn-icons-png.flaticon.com/512/2659/2659980.png" },
    { name: "Wiring Check", icon: "https://cdn-icons-png.flaticon.com/512/2224/2224653.png" },
    { name: "Pipe Replacement", icon: "https://cdn-icons-png.flaticon.com/512/2769/2769470.png" },
    { name: "Overhead Geyser Fix", icon: "https://cdn-icons-png.flaticon.com/512/10025/10025050.png" },
    { name: "Switch & Socket Fix", icon: "https://cdn-icons-png.flaticon.com/512/565/565922.png" }
  ],
  promises: [
    "Verified Electricians & Plumbers",
    "Genuine Spare Parts Used",
    "30-Day Workmanship Guarantee"
  ],
  packages: [
    { title: "Geyser Installation – Wall Mounted", description: "Install geyser up to 25L capacity", price: "₹599", duration: "60 mins" },
    { title: "Geyser Uninstallation", description: "Remove geyser from existing setup", price: "₹399", duration: "45 mins" },
    { title: "Geyser Reinstallation", description: "Install existing geyser at new point", price: "₹499", duration: "60 mins" },
    { title: "Geyser Pipe Replacement", description: "Replace damaged inlet/outlet pipes", price: "₹299", duration: "30 mins" },
    { title: "Geyser Switch Change", description: "Change power switch/socket", price: "₹249", duration: "20 mins" },
    { title: "Leakage Detection & Fix", description: "Fix water leakage around geyser", price: "₹349", duration: "30 mins" },
    { title: "Thermostat Repair", description: "Replace faulty thermostat", price: "₹699", duration: "60 mins" },
    { title: "No Heating Issue Diagnosis", description: "Identify heating failure root cause", price: "₹249", duration: "25 mins" },
    { title: "Overhead Geyser Mounting", description: "Install ceiling/overhead geyser", price: "₹899", duration: "90 mins" },
    { title: "Timer Switch Installation", description: "Smart timer switch for geyser", price: "₹599", duration: "30 mins" },
    { title: "Geyser Cleaning & Descaling", description: "Remove sediment buildup inside tank", price: "₹499", duration: "45 mins" },
    { title: "New Wiring for Geyser", description: "Install new power wiring up to 5m", price: "₹799", duration: "75 mins" },
    { title: "Geyser Pipe Extension", description: "Extend hot/cold pipe connection", price: "₹349", duration: "30 mins" },
    { title: "Earth Leakage Issue", description: "Check & fix earthing problem", price: "₹449", duration: "40 mins" },
    { title: "Wiring & Switch Combo Fix", description: "Combo service: switch & wiring", price: "₹999", duration: "90 mins" },
    { title: "Smart Geyser Controller Install", description: "IoT smart switch setup", price: "₹899", duration: "60 mins" },
    { title: "Wall Bracket Replacement", description: "Replace old mounting bracket", price: "₹299", duration: "30 mins" },
    { title: "Emergency Geyser Repair", description: "Quick fix on short notice", price: "₹1199", duration: "60 mins" },
    { title: "Annual Geyser Service", description: "Cleaning, wiring check & safety test", price: "₹699", duration: "60 mins" },
    { title: "Comprehensive Inspection Pack", description: "Full health check for geyser system", price: "₹399", duration: "45 mins" }
  ]
},
"furniture-assembly": {
  name: "Furniture Assembly",
  banner: "https://cdn-icons-png.flaticon.com/512/5346/5346433.png",
  serviceItems: [
    { name: "Chair Assembly", icon: "https://cdn-icons-png.flaticon.com/512/3641/3641920.png" },
    { name: "Table Assembly", icon: "https://cdn-icons-png.flaticon.com/512/3641/3641964.png" },
    { name: "Sofa Setup", icon: "https://cdn-icons-png.flaticon.com/512/3103/3103773.png" },
    { name: "Bed Installation", icon: "https://cdn-icons-png.flaticon.com/512/5346/5346407.png" },
    { name: "Wardrobe Assembly", icon: "https://cdn-icons-png.flaticon.com/512/5346/5346452.png" },
    { name: "Bookshelf Setup", icon: "https://cdn-icons-png.flaticon.com/512/5346/5346457.png" },
    { name: "TV Unit Assembly", icon: "https://cdn-icons-png.flaticon.com/512/5346/5346436.png" },
    { name: "Dresser Setup", icon: "https://cdn-icons-png.flaticon.com/512/3641/3641962.png" },
    { name: "Wall Mounted Furniture", icon: "https://cdn-icons-png.flaticon.com/512/2598/2598322.png" }
  ],
  promises: [
    "Trained Carpenters",
    "Tools & Hardware Included",
    "Zero Damage Guarantee"
  ],
  packages: [
    { title: "Dining Chair Assembly (per piece)", description: "Assemble standard wooden/plastic chair", price: "₹199", duration: "20 mins" },
    { title: "Dining Table Assembly", description: "Assemble up to 6-seater table", price: "₹499", duration: "45 mins" },
    { title: "Office Chair Setup", description: "Install height-adjustable chair", price: "₹249", duration: "30 mins" },
    { title: "Bed Frame Installation", description: "Assemble wooden/metal bed", price: "₹699", duration: "60 mins" },
    { title: "Double Door Wardrobe Setup", description: "Install modular/flat-pack wardrobe", price: "₹899", duration: "90 mins" },
    { title: "Sofa Assembly", description: "Set up sectional or single sofa", price: "₹499", duration: "45 mins" },
    { title: "TV Unit Assembly", description: "Floor-mounted or compact unit", price: "₹599", duration: "60 mins" },
    { title: "Wall Shelf Installation", description: "Fix wall shelf or corner shelf", price: "₹249", duration: "30 mins" },
    { title: "Bookshelf Setup", description: "Install multi-tier bookshelf", price: "₹499", duration: "45 mins" },
    { title: "Dressing Table Setup", description: "Install mirror + drawers unit", price: "₹699", duration: "60 mins" },
    { title: "Modular Drawer Assembly", description: "Fit drawer units for kitchen/bedroom", price: "₹349", duration: "40 mins" },
    { title: "Study Table Assembly", description: "Assemble flat-pack table", price: "₹399", duration: "45 mins" },
    { title: "Wall-Mounted Table", description: "Install foldable or bracket table", price: "₹499", duration: "45 mins" },
    { title: "Shoe Rack Assembly", description: "Set up shoe organizer", price: "₹299", duration: "30 mins" },
    { title: "Multi-Piece Furniture Set", description: "Combo setup (table, 4 chairs)", price: "₹799", duration: "90 mins" },
    { title: "Children’s Cot/Crib Setup", description: "Assemble baby bed/cot", price: "₹599", duration: "60 mins" },
    { title: "Swing Chair Setup", description: "Install indoor/outdoor swing", price: "₹499", duration: "45 mins" },
    { title: "Adjustable Bed Frame", description: "Setup for motorized beds", price: "₹1199", duration: "90 mins" },
    { title: "L-Shaped Sofa Assembly", description: "Multi-section sofa setup", price: "₹899", duration: "75 mins" },
    { title: "Custom Furniture Fix", description: "Drill, tighten & fit custom items", price: "₹499/hr", duration: "Hourly" }
  ]
},
"fan-installation": {
  name: "Fan Installation",
  banner: "https://cdn-icons-png.flaticon.com/512/8098/8098525.png",
  serviceItems: [
    { name: "Ceiling Fan Install", icon: "https://cdn-icons-png.flaticon.com/512/3716/3716639.png" },
    { name: "Wall Fan Install", icon: "https://cdn-icons-png.flaticon.com/512/6488/6488262.png" },
    { name: "Exhaust Fan Install", icon: "https://cdn-icons-png.flaticon.com/512/7150/7150776.png" },
    { name: "Fan Uninstallation", icon: "https://cdn-icons-png.flaticon.com/512/741/741407.png" },
    { name: "Fan Regulator Fix", icon: "https://cdn-icons-png.flaticon.com/512/1560/1560835.png" },
    { name: "Remote Control Setup", icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
    { name: "Fan Vibration Fix", icon: "https://cdn-icons-png.flaticon.com/512/6815/6815661.png" },
    { name: "Wiring & Mounting", icon: "https://cdn-icons-png.flaticon.com/512/447/447031.png" },
    { name: "Cleaning & Servicing", icon: "https://cdn-icons-png.flaticon.com/512/3650/3650197.png" }
  ],
  promises: [
    "Licensed Electricians Only",
    "Fan Mounting Hardware Included",
    "Same-Day Installation"
  ],
  packages: [
    { title: "Ceiling Fan Installation (Standard)", description: "Install ceiling fan with hook and wiring", price: "₹449", duration: "45 mins" },
    { title: "Wall Fan Installation", description: "Install wall-mounted fan on bracket", price: "₹399", duration: "30 mins" },
    { title: "Exhaust Fan Installation", description: "Fit fan in kitchen/bathroom window", price: "₹349", duration: "40 mins" },
    { title: "Ceiling Fan Uninstallation", description: "Remove ceiling fan safely", price: "₹199", duration: "20 mins" },
    { title: "Fan Regulator Replacement", description: "Install new fan speed controller", price: "₹299", duration: "25 mins" },
    { title: "Ceiling Fan with Rod Extension", description: "Mount fan with 12”–24” rod", price: "₹499", duration: "50 mins" },
    { title: "Remote-Control Fan Setup", description: "Install fan with remote system", price: "₹599", duration: "45 mins" },
    { title: "Ceiling Fan Rewiring", description: "Replace/repair internal wiring", price: "₹349", duration: "40 mins" },
    { title: "Fan Vibration Troubleshooting", description: "Diagnose & balance fan blades", price: "₹299", duration: "30 mins" },
    { title: "Dual Fan Install Combo", description: "Install 2 ceiling fans", price: "₹849", duration: "90 mins" },
    { title: "False Ceiling Mounting", description: "Install on false ceiling with anchor", price: "₹649", duration: "60 mins" },
    { title: "Wall Fan Rewiring", description: "Fix internal wiring or socket", price: "₹299", duration: "30 mins" },
    { title: "Bracket Supply + Install", description: "Install fan with new bracket", price: "₹199", duration: "25 mins" },
    { title: "Exhaust Fan Removal", description: "Uninstall fan from wall/window", price: "₹249", duration: "25 mins" },
    { title: "New Wiring to Fan Point", description: "Wire extension up to 5m", price: "₹499", duration: "45 mins" },
    { title: "Fan Cleaning & Maintenance", description: "Dust and oil fan motor/blades", price: "₹349", duration: "30 mins" },
    { title: "Decorative Fan Install", description: "Special handling of designer fans", price: "₹599", duration: "60 mins" },
    { title: "Chandelier + Fan Combo Install", description: "Install fan with lighting", price: "₹999", duration: "90 mins" },
    { title: "Emergency Repair Visit", description: "Fix faulty fan same-day", price: "₹599", duration: "60 mins" },
    { title: "Full House Fan Setup", description: "Install up to 5 fans", price: "₹1999", duration: "3 hrs" }
  ]
},
"plumber": {
  name: "Plumber Services",
  banner: "https://cdn-icons-png.flaticon.com/512/8082/8082342.png",
  serviceItems: [
    { name: "Tap Fix", icon: "https://cdn-icons-png.flaticon.com/512/8072/8072113.png" },
    { name: "Sink Repair", icon: "https://cdn-icons-png.flaticon.com/512/8072/8072101.png" },
    { name: "Toilet Flush Repair", icon: "https://cdn-icons-png.flaticon.com/512/8082/8082379.png" },
    { name: "Water Leakage", icon: "https://cdn-icons-png.flaticon.com/512/2769/2769455.png" },
    { name: "Shower Installation", icon: "https://cdn-icons-png.flaticon.com/512/6033/6033366.png" },
    { name: "Drain Blockage", icon: "https://cdn-icons-png.flaticon.com/512/8072/8072110.png" },
    { name: "Mixer Tap Install", icon: "https://cdn-icons-png.flaticon.com/512/8082/8082390.png" },
    { name: "Toilet Seat Install", icon: "https://cdn-icons-png.flaticon.com/512/6033/6033365.png" },
    { name: "Pipe Replacement", icon: "https://cdn-icons-png.flaticon.com/512/2769/2769470.png" }
  ],
  promises: [
    "Experienced Local Plumbers",
    "Upfront Pricing",
    "30-Day Work Guarantee"
  ],
  packages: [
    { title: "Tap Repair", description: "Fix leaking or broken tap", price: "₹249", duration: "30 mins" },
    { title: "Tap Installation", description: "Install new tap (kitchen/washroom)", price: "₹299", duration: "40 mins" },
    { title: "Shower Installation", description: "Fit new wall-mounted shower", price: "₹399", duration: "45 mins" },
    { title: "Toilet Flush Repair", description: "Fix/replace flush system", price: "₹399", duration: "45 mins" },
    { title: "Toilet Seat Installation", description: "Replace/install toilet seat", price: "₹349", duration: "30 mins" },
    { title: "Wash Basin Installation", description: "Install wall/floor mount basin", price: "₹649", duration: "75 mins" },
    { title: "Water Pipe Leakage Fix", description: "Seal leaking pipe/fitting", price: "₹299", duration: "30 mins" },
    { title: "Blocked Sink Drain Repair", description: "Remove food clogs in kitchen sink", price: "₹349", duration: "30 mins" },
    { title: "Geyser Pipe Installation", description: "Fit inlet/outlet pipe for geyser", price: "₹249", duration: "30 mins" },
    { title: "Bathroom Fittings Setup", description: "Install towel rod, soap dish etc.", price: "₹349", duration: "30 mins" },
    { title: "PVC Pipe Replacement (up to 5ft)", description: "Replace broken plastic pipe", price: "₹499", duration: "40 mins" },
    { title: "Mixer Tap Installation", description: "Fit dual-flow tap for sink", price: "₹499", duration: "45 mins" },
    { title: "Water Tank Overflow Fix", description: "Adjust float valve & overflow", price: "₹449", duration: "30 mins" },
    { title: "Sink Installation", description: "Install new kitchen sink", price: "₹699", duration: "60 mins" },
    { title: "Angle Valve Replacement", description: "Fix tap control valve", price: "₹299", duration: "25 mins" },
    { title: "Drainage Pipe Unclogging", description: "Clear clogged bathroom drain", price: "₹499", duration: "45 mins" },
    { title: "Washing Machine Water Inlet Setup", description: "Tap + pipe + connection", price: "₹449", duration: "40 mins" },
    { title: "Instant Water Heater Pipe Setup", description: "Connect pipes to mini geyser", price: "₹299", duration: "25 mins" },
    { title: "Toilet Jet Spray Installation", description: "Fit jet spray & connection", price: "₹199", duration: "20 mins" },
    { title: "Emergency Plumber Visit", description: "Urgent call-out for leak or burst", price: "₹799", duration: "60 mins" }
  ]
},
"electrician-&-plumber": {
  name: "Electrician & Plumber",
  banner: "https://cdn-icons-png.flaticon.com/512/2942/2942909.png",
  serviceItems: [
    { name: "Geyser Work", icon: "https://cdn-icons-png.flaticon.com/512/3946/3946973.png" },
    { name: "Furniture Assembly", icon: "https://cdn-icons-png.flaticon.com/512/5346/5346433.png" },
    { name: "Fan Installation", icon: "https://cdn-icons-png.flaticon.com/512/8098/8098525.png" },
    { name: "Plumbing", icon: "https://cdn-icons-png.flaticon.com/512/8082/8082342.png" }
  ],
  promises: [
    "Verified Technicians",
    "Upfront Pricing",
    "30-Day Service Guarantee"
  ],
  packages: [
    { title: "Geyser Installation", description: "Install geyser (wall-mounted)", price: "₹599", duration: "60 mins" },
    { title: "Furniture Chair Assembly", description: "Standard wooden/plastic chair setup", price: "₹199", duration: "20 mins" },
    { title: "Ceiling Fan Installation", description: "Install ceiling fan with mounting", price: "₹449", duration: "45 mins" },
    { title: "Tap Repair", description: "Fix leaking or broken tap", price: "₹249", duration: "30 mins" },
    { title: "Geyser Uninstallation", description: "Remove old geyser", price: "₹399", duration: "45 mins" },
    { title: "Double Wardrobe Assembly", description: "Flat-pack wardrobe setup", price: "₹899", duration: "90 mins" },
    { title: "Exhaust Fan Fitting", description: "Install fan in kitchen/bathroom", price: "₹349", duration: "40 mins" },
    { title: "Toilet Flush Repair", description: "Repair or replace flush mechanism", price: "₹399", duration: "45 mins" },
    { title: "Geyser Leak Fix", description: "Fix water leakage around geyser", price: "₹349", duration: "30 mins" },
    { title: "TV Unit Assembly", description: "Install floor or wall-mounted unit", price: "₹599", duration: "60 mins" },
    { title: "Wall Fan Mounting", description: "Bracket installation & wiring", price: "₹399", duration: "30 mins" },
    { title: "Blocked Sink Repair", description: "Clear kitchen/bathroom drain", price: "₹349", duration: "30 mins" },
    { title: "Thermostat Replacement", description: "Replace faulty geyser thermostat", price: "₹699", duration: "60 mins" },
    { title: "Bed Frame Assembly", description: "Setup of wooden or metal bed", price: "₹699", duration: "60 mins" },
    { title: "Remote Fan Setup", description: "Install fan with remote control", price: "₹599", duration: "45 mins" },
    { title: "Mixer Tap Install", description: "Install dual flow mixer tap", price: "₹499", duration: "45 mins" },
    { title: "New Wiring to Fan", description: "Provide fan point wiring", price: "₹499", duration: "45 mins" },
    { title: "Bathroom Fitting Install", description: "Soap holder, towel rod etc.", price: "₹349", duration: "30 mins" },
    { title: "Toilet Seat Installation", description: "Replace/install seat & lid", price: "₹349", duration: "30 mins" },
    { title: "Emergency Technician Visit", description: "Urgent plumbing/electrical help", price: "₹799", duration: "60 mins" }
  ]
},
"painting-&-waterproofing": {
  name: "Painting & Waterproofing",
  banner: "https://cdn-icons-png.flaticon.com/512/3159/3159617.png",
  serviceItems: [
    { name: "Interior Painting", icon: "https://cdn-icons-png.flaticon.com/512/4221/4221332.png" },
    { name: "Exterior Painting", icon: "https://cdn-icons-png.flaticon.com/512/2522/2522510.png" },
    { name: "Waterproof Coating", icon: "https://cdn-icons-png.flaticon.com/512/5504/5504821.png" },
    { name: "Crack Filling", icon: "https://cdn-icons-png.flaticon.com/512/7285/7285911.png" },
    { name: "Damp Treatment", icon: "https://cdn-icons-png.flaticon.com/512/1090/1090924.png" },
    { name: "Roof Waterproofing", icon: "https://cdn-icons-png.flaticon.com/512/999/999284.png" },
    { name: "Bathroom Waterproofing", icon: "https://cdn-icons-png.flaticon.com/512/1579/1579930.png" },
    { name: "Terrace Coating", icon: "https://cdn-icons-png.flaticon.com/512/2622/2622670.png" },
    { name: "Wall Putty", icon: "https://cdn-icons-png.flaticon.com/512/1980/1980946.png" }
  ],
  promises: [
    "Experienced Painters",
    "Waterproofing with Warranty",
    "Dust-Free & Hassle-Free Work"
  ],
  packages: [
    { title: "Interior Wall Painting (1 Room)", description: "Painting with 2 coats using premium paint", price: "₹1499", duration: "4 hrs" },
    { title: "Ceiling Painting", description: "White ceiling paint using roller", price: "₹699", duration: "2 hrs" },
    { title: "2BHK Full Painting", description: "Wall & ceiling paint with 2 coats", price: "₹7999", duration: "2 days" },
    { title: "3BHK Interior Repainting", description: "Repaint 3BHK house (labour + material)", price: "₹10499", duration: "3 days" },
    { title: "Exterior Wall Painting (per sq.ft.)", description: "Weatherproof exterior finish", price: "₹25/sq.ft", duration: "Varies" },
    { title: "Crack Filling", description: "Seal cracks with waterproof material", price: "₹499", duration: "30 mins" },
    { title: "Damp Wall Treatment", description: "Anti-damp primer + paint", price: "₹899", duration: "1 hr" },
    { title: "Roof Waterproofing (per 100 sq.ft.)", description: "Acrylic/PU coating on terrace", price: "₹1499", duration: "3 hrs" },
    { title: "Bathroom Waterproofing", description: "Chemical coating for walls/floor", price: "₹1999", duration: "2 hrs" },
    { title: "Kitchen Damp Proofing", description: "Anti-damp coat for kitchen wall", price: "₹799", duration: "1 hr" },
    { title: "Terrace Crack Repair", description: "Fill & coat terrace cracks", price: "₹999", duration: "2 hrs" },
    { title: "Wall Putty Application (per 100 sq.ft.)", description: "Smoothen wall before painting", price: "₹399", duration: "2 hrs" },
    { title: "Metal Grills Painting", description: "Rust-free enamel paint on grills", price: "₹599", duration: "2 hrs" },
    { title: "Wooden Door Painting", description: "Polish/paint door (2 sides)", price: "₹499", duration: "1 hr" },
    { title: "Window Frame Painting", description: "Interior window panel painting", price: "₹349", duration: "45 mins" },
    { title: "Full House Waterproofing Package", description: "Walls + roof + terrace protection", price: "₹12499", duration: "3 days" },
    { title: "Exterior Damp Fix + Paint", description: "Patch damp & repaint area", price: "₹1499", duration: "2 hrs" },
    { title: "Basement Leakage Fix", description: "Waterproof base walls/floor", price: "₹2999", duration: "3 hrs" },
    { title: "Parapet Wall Waterproofing", description: "Waterproof side walls on terrace", price: "₹1299", duration: "2 hrs" },
    { title: "Anti-Algae Exterior Coating", description: "Prevent fungus & algae buildup", price: "₹1599", duration: "2 hrs" }
  ]
}






















  // You can follow this format to update the rest of the entries like 'hair-studio', 'salon-for-women', etc.
  // Add their unique `serviceItems` and `promises`.
};
