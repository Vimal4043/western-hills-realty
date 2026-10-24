import { matchesLocation } from "./locations.js";

export { normalizeLocation, splitLocality, matchesLocation } from "./locations.js";

const IMAGES = Object.values(import.meta.glob("../assets/properties/LONAVALA/*", {
  eager: true,
  query: "?url",
  import: "default",
})).sort();
const coverImage = IMAGES[0];

export const BRAND = {
  name: "Western Hills Realty",
  legalName: "WESTERN HILLS REALTY",
  slug: "western-hills-realty",
  tagline: "Real Estate Consultant — Sale, Purchase | Rental of Flat, Shop & Offices",
  owner: "Abdul Hameed",
  contactPersons: [{ name: "Abdul Hameed", phone: "9822260050" }],
  phone: "9822260050",
  altPhone: "9822260050",
  phones: ["9822260050"],
  email: "info@westernhillsrealty.in",
  address: "#5, D.N. Valley Complex, Valvan, Lonavala - 410 403",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=%235%2C+D.N.+Valley+Complex%2C+Valvan%2C+Lonavala+-+410+403",
};

export const PROJECT_TYPES = ["1 RK", "1 BHK", "2 BHK", "Commercial", "Villa"];
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
    image: coverImage,
    gallery: IMAGES,
    description: "A villa property in Lonavala. Contact Western Hills Realty for more information.",
  },
];

export const listingLabel = (value) => value || "";
export const CITIES = LOCATIONS.map((name, index) => ({
  name,
  filter: name,
  image: IMAGES[index % IMAGES.length],
  count: PROPERTIES.filter((property) => matchesLocation(property, name)).length,
}));
