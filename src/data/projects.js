import { matchesLocation } from "./locations.js";

export { normalizeLocation, splitLocality, matchesLocation } from "./locations.js";

/* ============================================================
   PROPERTY IMAGES
   ============================================================ */

const LONAVALA_IMAGES = Object.values(
  import.meta.glob("../assets/properties/LONAVALA/*", {
    eager: true,
    query: "?url",
    import: "default",
  })
).sort();

/* ============================================================
   BRAND
   ============================================================ */

export const BRAND = {
  name: "Western Hills Realty",
  legalName: "WESTERN HILLS REALTY",
  slug: "western-hills-realty",

  tagline:
    "Real Estate Consultant — Sale, Purchase | Rental of Flat, Shop & Offices",

  owner: "Abdul Hameed",

  contactPersons: [
    {
      name: "Abdul Hameed",
      phone: "9822260050",
    },
  ],

  phone: "9822260050",
  altPhone: "9822260050",
  phones: ["9822260050"],

  email: "info@westernhillsrealty.in",

  address: "#5, D.N. Valley Complex, Valvan, Lonavala - 410 403",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%235%2C+D.N.+Valley+Complex%2C+Valvan%2C+Lonavala+-+410+403",
};

/* ============================================================
   FILTER DATA
   ============================================================ */

export const PROJECT_TYPES = [
  "4 BHK",
];

export const BUDGETS = [
  "Above ₹5 Cr",
];

export const LOCATIONS = [
  "Tungarli, Lonavala",
];

export const AVAILABILITY = [
  "For Sale",
];

/* ============================================================
   PROJECTS
   ============================================================ */

export const PROJECTS = [
  {
    id: "lonavala-ultra-luxury-4-bhk-villas",

    title: "Ultra-Luxury 4 BHK Villas",

    location: "Tungarli, Lonavala",

    city: "Lonavala",

    state: "Maharashtra",

    localities: [
      "Tungarli",
      "Lonavala",
    ],

    type: "4 BHK",

    listingType: "For Sale",

    availabilityNote: "Available on Request",

    area: "Ultra-Luxury 4 BHK Villas",

    tagline:
      "Luxury hillside villas with private pools and breathtaking valley views",

    price: "Starting From ₹5.25 Cr",

    minPrice: 52500000,

    maxPrice: 0,

    approvals: "Details available on request",

    contact: [
      "+91 9822260050",
    ],

    description:
      "Ultra-luxury fully furnished 4 BHK villas in Tungarli, Lonavala, crafted for those who seek elegance, privacy and a true resort-style lifestyle. Wake up to misty hills, breathtaking valley views and unmatched serenity, with premium interiors, private swimming pools and modern amenities.",

    images: LONAVALA_IMAGES,

    videos: [],

    specifications: [
      {
        label: "Configuration",
        value: "4 BHK",
      },
      {
        label: "Property Type",
        value: "Luxury Villa",
      },
      {
        label: "Status",
        value: "Available on Request",
      },
      {
        label: "Location",
        value: "Tungarli, Lonavala",
      },
      {
        label: "Furnishing",
        value: "Fully Furnished",
      },
      {
        label: "Starting Price",
        value: "₹5.25 Cr",
      },
    ],

    highlights: [
      "Ultra-Luxury 4 BHK Villas",
      "Private Swimming Pool",
      "Fully Furnished",
      "Premium White Goods Included",
      "Misty Hills & Valley Views",
      "Elegant Modern Interiors",
      "Luxury Finishes",
      "Peaceful Green Surroundings",
    ],

    features: [
      "Private Swimming Pool",
      "Premium Modular Kitchen",
      "AC in All Bedrooms",
      "Large Living & Dining Spaces",
      "Landscaped Gardens",
      "24x7 CCTV Security",
      "Ample Parking Space",
      "Clubhouse & Indoor Recreation",
      "Solar Power Enabled Community",
    ],

    suitableFor: [
      "Luxury Home Buyers",
      "Weekend Home Buyers",
      "Vacation Home Buyers",
      "Luxury Property Investors",
    ],

    connectivity: [
      "5 Minutes from Lonavala Railway Station",
      "Easy Access to Mumbai–Pune Expressway",
      "Close to Schools, Hospitals & Restaurants",
      "Located in the Serene Tungarli Area",
    ],

    whiteGoods: [
      "Refrigerator",
      "Washing Machine",
      "Microwave",
      "Television",
      "Geyser",
      "Air Conditioners",
    ],

    amenities: [
      "Landscaped Gardens",
      "24x7 CCTV Security",
      "Ample Parking Space",
      "Clubhouse",
      "Indoor Recreation",
      "Solar Power Enabled Community",
      "Private Swimming Pool",
    ],

    featured: true,
  },
];

/* ============================================================
   LISTING LABEL
   ============================================================ */

export const listingLabel = (value) => value || "";

/* ============================================================
   AREAS WE SERVE
   ============================================================ */

const CITY_AREAS = [
  // {
  //   name: "Lonavala",
  //   filter: "Lonavala",
  //   image: LONAVALA_IMAGES[0],
  // },
  {
    name: "Tungarli",
    filter: "Tungarli, Lonavala",
    image: LONAVALA_IMAGES[1] || LONAVALA_IMAGES[0],
  },
];

/* ============================================================
   LISTING COUNTS
   ============================================================ */

const countListingsFor = (area) =>
  PROJECTS.filter((project) =>
    matchesLocation(project, area)
  ).length;

/* ============================================================
   CITIES
   ============================================================ */

export const CITIES = CITY_AREAS.map((area) => ({
  ...area,
  count: countListingsFor(area.filter),
}));