import { useSearchParams } from "react-router-dom";
import Property from "./Property.jsx";
import PropertiesFilters from "./PropertiesFilters.jsx";
import PropertiesGrid from "./PropertiesGrid.jsx";
import { PROPERTIES, matchesLocation } from "../../data/projects.js";
import { matchesBudget, readPropertyFilters } from "../../lib/propertyFilters.js";

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = readPropertyFilters(searchParams);

  const setFilter = (key) => (value) => {
    const next = new URLSearchParams(searchParams);

    if (!value) {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    setSearchParams(next, { replace: true });
  };

  const resetFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const filteredProperties = PROPERTIES.filter((property) => {
    if (filters.type) {
      const propertyType = (property.type || "").toLowerCase();
      if (!propertyType.includes(filters.type.toLowerCase())) return false;
    }

    if (filters.listingType) {
      const listingType = (property.listingType || "").toLowerCase();
      if (!listingType.includes(filters.listingType.toLowerCase())) return false;
    }

    if (filters.location) {
      if (!matchesLocation(property, filters.location)) return false;
    }

    if (!matchesBudget(property.priceValue, filters.budget)) return false;

    if (filters.keyword.trim()) {
      const query = filters.keyword.trim().toLowerCase();
      const searchableText = [
        property.unitNumber,
        property.type,
        property.location,
        property.listingType,
        property.price,
        property.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (!searchableText.includes(query)) return false;
    }

    return true;
  });

  return (
    <main className="pt-19 md:pt-28">
      <Property />
      <PropertiesFilters
        filters={filters}
        onChange={setFilter}
        onReset={resetFilters}
      />
      <PropertiesGrid properties={filteredProperties} />
    </main>
  );
}
