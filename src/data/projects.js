import { matchesLocation } from "./locations.js";

export { normalizeLocation, splitLocality, matchesLocation } from "./locations.js";

const LuxuryVilla = Object.values(import.meta.glob("../assets/properties/LuxuryVilla/*", {
  eager: true,
  query: "?url",
  import: "default",
})).sort();
const LuxuryVillaImage = LuxuryVilla[0] || null;

const MountainViewVilla = Object.values(import.meta.glob("../assets/properties/MountainViewVilla/*", {
  eager: true,
  query: "?url",
  import: "default",
})).sort();
const MountainViewVillaImage = MountainViewVilla[0] || null;

const LonavalaFactory29000 = Object.values(import.meta.glob("../assets/properties/LonavalaFactory29000/*", {
  eager: true,
  query: "?url",
  import: "default",
})).sort();
const LonavalaFactory29000Image = LonavalaFactory29000[0] || null;

const LonavalaFactory5000 = Object.values(import.meta.glob("../assets/properties/LonavalaFactory5000/*", {
  eager: true,
  query: "?url",
  import: "default",
})).sort();
const LonavalaFactory5000Image = LonavalaFactory5000[0] || null;

/* Fallback cover shown when a property folder has no images. */
export const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23d9e2ef' width='400' height='300'/%3E%3Cpath d='M175 110a7.5 7.5 0 0 1 7.5 7.5v57a7.5 7.5 0 0 1-7.5 7.5h-57a7.5 7.5 0 0 1-7.5-7.5v-57a7.5 7.5 0 0 1 7.5-7.5zM212 185h-87l-23-47h133z' fill='%23667085'/%3E%3Ccircle cx='200' cy='95' r='7' fill='%23667085'/%3E%3C/svg%3E";

export const BRAND = {
  name: "Western Hills Realty",
  legalName: "WESTERN HILLS REALTY",
  slug: "western-hills-realty",
  tagline: "Real Estate Consultant — Sale, Purchase | Rental of Flat, Shop & Offices",
  contactPersons: [{ phone: "9822260050" }],
  phone: "9822260050",
  altPhone: "9822260050",
  phones: ["9822260050"],
  email: "info@westernhillsrealty.in",
  address: "#5, D.N. Valley Complex, Valvan, Lonavala - 410 403",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=%235%2C+D.N.+Valley+Complex%2C+Valvan%2C+Lonavala+-+410+403",
};

export const PROJECT_TYPES = ["1 RK", "1 BHK", "2 BHK", "Commercial", "Factory", "Villa"];
export const BUDGETS = ["Up to ₹30 Lakhs", "₹30 - ₹50 Lakhs", "₹50 - ₹70 Lakhs", "₹70 Lakhs - ₹1 Cr", "Above ₹1 Cr"];
export const LOCATIONS = ["Lonavala"];
export const AVAILABILITY = ["For Sale", "For Rent"];

// No projects are currently listed. This inventory is a standalone property.
export const PROJECTS = [];

export const PROPERTIES = [
  {
    id: "lonavala-luxury-villa",
    unitNumber: "Luxury Villa",
    type: "Villa",
    location: "Lonavala",
    localities: ["Lonavala"],
    listingType: "For Sale",
    price: "Starting from ₹5.25 Cr",
    priceValue: 52500000,
    bedrooms: 4,
    bathrooms: 4,
    area: "Available on request",
    // Listing and featured cards use this cover. PropertyDetailPage alone renders gallery.
    image: LuxuryVillaImage,
    gallery: LuxuryVilla,
    description: "A villa property in Lonavala. Contact Western Hills Realty for more information.",
  },
  {
    id: "mountain-view-villa-lonavala",
    title: "MOUNTAIN VIEW – Ultra Luxury 4 BHK Villa Lonavala",
    tagline: "Mountain View | Private Pool | Lawn | Game Zone | Parking",
    type: "Villa",
    location: "Kunegaon, Lonavala",
    localities: ["Lonavala", "Kunegaon"],
    listingType: "For Sale",
    price: "₹4.60 Crore",
    priceValue: 46000000,
    bedrooms: 4,
    plotArea: "4,200 sq.ft",
    carpetArea: "2,400 sq.ft",
    legalStatus: "OC Received",
    gst: "No GST",
    airConditioning: "6 Daikin ACs",
    utilities: ["Separate Water Line", "3-Phase Meter"],
    amenities: ["Private Pool", "Lawn", "Game Zone", "Parking"],
    description:
      "A luxury villa suitable as a holiday home and a potential vacation rental investment.",
    image: MountainViewVillaImage,
    gallery: MountainViewVilla,
  },
  {
    id: "lonavala-factory-29000-sqft",
    title: "Factory for Sale – Lonavala",
    type: "Commercial",
    subtype: "Factory",
    location: "Lonavala",
    localities: ["Lonavala"],
    listingType: "For Sale",
    price: "₹12 Crore",
    priceValue: 120000000,
    plotArea: "29,000 sq.ft",
    builtUpArea: "16,700 sq.ft",
    facilities: ["Power", "Water"],
    suitableFor: ["Manufacturing", "Industrial Use", "Warehouse", "Investment"],
    description:
      "A 29,000 sq.ft factory in Lonavala suitable for manufacturing, industrial use, warehousing and investment.",
    image: LonavalaFactory29000Image,
    gallery: LonavalaFactory29000,
  },
  {
    id: "lonavala-factory-5000-sqft",
    title: "Factory for Sale – Lonavala",
    type: "Commercial",
    subtype: "Factory",
    location: "Lonavala",
    localities: ["Lonavala"],
    listingType: "For Sale",
    price: "₹1.90 Crore",
    priceValue: 19000000,
    plotArea: "5,000 sq.ft",
    builtUpArea: "2,900 sq.ft",
    facilities: ["Power", "Water"],
    possession: "Ready to Move In",
    description:
      "A 5,000 sq.ft factory in Lonavala with power and water available, ready to move in.",
    image: LonavalaFactory5000Image,
    gallery: LonavalaFactory5000,
  },
];

export const listingLabel = (value) => value || "";

/* Cover images that actually exist on disk, used for location cards. */
export const IMAGES = [
  LuxuryVillaImage,
  MountainViewVillaImage,
  LonavalaFactory29000Image,
  LonavalaFactory5000Image,
].filter(Boolean);

export const CITIES = LOCATIONS.map((name, index) => ({
  name,
  filter: name,
  image: IMAGES[index % IMAGES.length],
  count: PROPERTIES.filter((property) => matchesLocation(property, name)).length,
}));
