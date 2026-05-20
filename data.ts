import aureliaImg from "./assets/images/project_aurelia_1779277525953.png";
import obsidianImg from "./assets/images/project_obsidian_1779277549827.png";
import marinaImg from "./assets/images/project_marina_1779277568278.png";
import luminaImg from "./assets/images/project_lumina_1779277585981.png";

import roomSunsetImg from "./assets/images/room_sunset_1779277614345.png";
import roomDarkImg from "./assets/images/room_dark_1779277636117.png";
import roomBeigeImg from "./assets/images/room_reading_1779277655302.png";
import roomOceanImg from "./assets/images/room_ocean_1779277677895.png";

import { Project, Amenity, Testimonial, FeatureCard } from "./types";

export const BRAND_NAME = "Veloxa Skyline";
export const PHONE_NUMBER = "9518326261";
export const EMAIL_ADDRESS = "info@veloxaskyline.com";
export const OFFICE_ADDRESS = "Veloxa Skyline, Baner Road, Pune, Maharashtra";

export const WHATSAPP_LINK = "https://wa.me/919518326261";
export const WHATSAPP_PREFILLED_MSG = "Hello Veloxa Skyline, I’m interested in your luxury projects. Please share more details.";

export const PROJECTS: Project[] = [
  {
    id: "aurelia",
    name: "Aurelia Sky Residence",
    tagline: "Ultra-Premium Elevated Penthouses",
    location: "Baner Highway View, Pune",
    type: "Sky Penthouse",
    configuration: "4.5 & 5 BHK Duplexes",
    startingPrice: "₹4.8 Cr*",
    image: aureliaImg,
    builtArea: "4,600 - 5,800 Sq. Ft.",
    features: ["Private Infinity Sky Pool", "Double-Height Lounge", "360° Neon City Skyline Views", "Custom Butler Service Desk"]
  },
  {
    id: "obsidian",
    name: "The Obsidian Grand",
    tagline: "Sleek Architectural Masterpiece",
    location: "Premium Baner Enclave, Pune",
    type: "Modernist Suites",
    configuration: "3 & 4 BHK Architectural Suites",
    startingPrice: "₹2.9 Cr*",
    image: obsidianImg,
    builtArea: "2,850 - 3,600 Sq. Ft.",
    features: ["Linear Warm LED System", "Brutalist Matte Charcoal Facade", "Integrated Smart Automation", "Soundproof Private Movie Lounge"]
  },
  {
    id: "marina",
    name: "The Horizon Marina",
    tagline: "Panoramic Sea-Breeze Styled Mansions",
    location: "Premium Bay-View Hills, Pune",
    type: "Sky Mansions",
    configuration: "4 BHK Ultra Mansions",
    startingPrice: "₹3.6 Cr*",
    image: marinaImg,
    builtArea: "3,900 - 4,400 Sq. Ft.",
    features: ["14-Feet Ultra-High Ceilings", "Statuary Italian Marble Floors", "Dual Panoramic Sundecks", "Private Temperature-Controlled Wine Vault"]
  },
  {
    id: "lumina",
    name: "Lumina Woodlands",
    tagline: "Bespoke Glass & Steel Private Villa Estates",
    location: "Baner Hills reserve, Pune",
    type: "Bespoke Villa Estate",
    configuration: "5 BHK Custom Luxury Estates",
    startingPrice: "₹8.5 Cr*",
    image: luminaImg,
    builtArea: "6,200 - 8,000 Sq. Ft.",
    features: ["Forest-Reserve Direct Overlook", "Bespoke Modular Glass Skin", "Private Elevator, 4-Car Parking", "Triple-level Entertainment Decks"]
  }
];

export const FEATURES: FeatureCard[] = [
  {
    title: "Premium Living",
    description: "Every residence features double-height architectures, bespoke fitments, and world-renowned Italian marble layouts.",
    iconName: "Sparkles"
  },
  {
    title: "Prime Locations",
    description: "Strategically situated in the most desirable postcodes of Pune, providing unparalleled views of hills and city skylines.",
    iconName: "MapPin"
  },
  {
    title: "Trust & Quality",
    description: "A solid legacy of structural excellence, zero-wait clearances, and premium construction timelines guaranteed.",
    iconName: "ShieldCheck"
  },
  {
    title: "Value For Life",
    description: "An asset built for generations, appreciate-ready and engineered with future-proof sustainable engineering.",
    iconName: "Award"
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "pool",
    name: "Infinity Pool",
    description: "Suspended over the skyline with crystal temperature-modulated waters and designer cabanas.",
    iconName: "Waves"
  },
  {
    id: "gym",
    name: "Gymnasium",
    description: "Equipped with state-of-the-art cinematic workout equipment and dynamic elite personal assistance.",
    iconName: "Dumbbell"
  },
  {
    id: "gardens",
    name: "Landscaped Gardens",
    description: "Zen water-feature gardens designed to clear the mind and soothe busy modern lifestyles.",
    iconName: "Trees"
  },
  {
    id: "clubhouse",
    name: "The Velvet Clubhouse",
    description: "Includes private single-malt bars, fine-dining facilities, and custom corporate meeting halls.",
    iconName: "Wine"
  },
  {
    id: "children",
    name: "Children's Play Area",
    description: "Safe, sensory-rich play equipment created using completely organic and hazard-free elements.",
    iconName: "Gamepad"
  },
  {
    id: "security",
    name: "24/7 Intel Security",
    description: "Biometric authentication thresholds, 4K night-vision perimeter control, and dedicated concierge.",
    iconName: "ShieldAlert"
  },
  {
    id: "parking",
    name: "Premium Parking Space",
    description: "Equipped with automated vehicle elevators and fast EV charging docks for every single bay.",
    iconName: "Car"
  }
];

export const LIFESTYLE_ROOMS = [
  {
    id: "room-sunset",
    title: "The Golden Sunset Living Sphere",
    description: "Experience the calming sensation of the evening sun casting glowing hues across custom-crafted Scandinavian lounges.",
    image: roomSunsetImg,
    meta: "Available at Lumina Court"
  },
  {
    id: "room-dark",
    title: "The Obsidian Media Salon",
    description: "An elegant, low-profile entertainment setup accented with warm continuous light elements and architectural wood trims.",
    image: roomDarkImg,
    meta: "Available at The Obsidian Grand"
  },
  {
    id: "room-beige",
    title: "The Sandstone Reading Lounge",
    description: "Symmetrical timber-slat backing paired with warm floor lighting establishes the ultimate quiet refuge.",
    image: roomBeigeImg,
    meta: "Available at Lumina Woodlands"
  },
  {
    id: "room-ocean",
    title: "The Double-Height Grand Saloon",
    description: "Sweeping floor-to-ceiling panoramic views framed by luxury leathers and statutory classic white marble columns.",
    image: roomOceanImg,
    meta: "Available at The Horizon Marina"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Singhania",
    role: "Industrialist & Managing Director",
    rating: 5,
    content: "Veloxa Skyline has truly redefined elite living in Western Pune. The attention to volumetric heights, material finishes, and night lighting creates an unprecedented luxury experience. Site visits are fully automated and transparent."
  },
  {
    id: "t2",
    name: "Dr. Ananya Deshmukh",
    role: "Senior Neurosurgeon",
    rating: 5,
    content: "The Obsidian Grand exceeds every benchmark in structural craft and minimalist aesthetic. Stepping into the flat delivers an instantaneous wave of calm, completely isolated from Pune's urban energy."
  },
  {
    id: "t3",
    name: "Vikram & Sneha Rawat",
    role: "Tech Venture Partners",
    rating: 5,
    content: "From our very first inquiry on WhatsApp to selecting our penthouse configuration, the luxury guidance team treated us like VIP partners. The 14ft high-ceilings at the Horizon Marina feel genuinely cosmic."
  }
];
