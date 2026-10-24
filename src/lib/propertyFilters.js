export const EMPTY_PROPERTY_FILTERS = {
  keyword: "",
  type: "",
  location: "",
  listingType: "",
  budget: "",
};

export const readPropertyFilters = (searchParams) =>
  Object.keys(EMPTY_PROPERTY_FILTERS).reduce(
    (filters, key) => ({ ...filters, [key]: searchParams.get(key) || "" }),
    EMPTY_PROPERTY_FILTERS,
  );

export const filtersToSearchParams = (filters) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  return params;
};

export const matchesBudget = (priceValue, budget) => {
  if (!budget || !priceValue) return true;
  const ranges = {
    "Up to ₹30 Lakhs": [0, 3000000],
    "₹30 - ₹50 Lakhs": [3000000, 5000000],
    "₹50 - ₹70 Lakhs": [5000000, 7000000],
    "₹70 Lakhs - ₹1 Cr": [7000000, 10000000],
    "Above ₹1 Cr": [10000000, Infinity],
  };
  const range = ranges[budget];
  return !range || (priceValue >= range[0] && priceValue <= range[1]);
};
