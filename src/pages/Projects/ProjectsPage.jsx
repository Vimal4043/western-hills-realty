import { useSearchParams } from "react-router-dom";
import Project from "./Project.jsx";
import ProjectsFilters from "./ProjectsFilters.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";
import { PROJECTS, matchesLocation } from "../../data/projects.js";

const DEFAULT_FILTERS = {
  type: "all",
  budget: "all",
  location: "all",
  availability: "all",
  query: "",
};

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  /* The URL is the single source of truth for the active filters. This keeps
     a filtered view shareable and bookmarkable, and makes navigation from
     elsewhere (e.g. a Home location card linking to /projects?location=...)
     apply automatically. */
  const filters = {
    type: searchParams.get("type") || DEFAULT_FILTERS.type,
    budget: searchParams.get("budget") || DEFAULT_FILTERS.budget,
    location: searchParams.get("location") || DEFAULT_FILTERS.location,
    availability:
      searchParams.get("availability") || DEFAULT_FILTERS.availability,
    query: searchParams.get("query") || DEFAULT_FILTERS.query,
  };

  const setFilter = (key) => (value) => {
    const next = new URLSearchParams(searchParams);

    if (!value || value === DEFAULT_FILTERS[key]) {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    setSearchParams(next, { replace: true });
  };

  const resetFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const filteredProjects = PROJECTS.filter((project) => {
    if (filters.type !== "all") {
      const projectType = (project.type || "").toLowerCase();
      if (!projectType.includes(filters.type.toLowerCase())) return false;
    }

    if (filters.budget !== "all") {
      const minPrice = Number(project.minPrice || 0);
      // Listings priced "on request" have no numeric price, so they stay
      // visible under every budget band instead of silently disappearing.
      if (!minPrice) return true;
      const budgetMatches = {
        "Under ₹30 Lakhs": minPrice < 3000000,
        "₹30 - ₹40 Lakhs": minPrice >= 3000000 && minPrice <= 4000000,
        "₹40 - ₹50 Lakhs": minPrice >= 4000000 && minPrice <= 5000000,
        "₹50 - ₹70 Lakhs": minPrice >= 5000000 && minPrice <= 7000000,
        "Above ₹70 Lakhs": minPrice > 7000000,
      };
      if (!budgetMatches[filters.budget]) return false;
    }

    if (filters.location !== "all") {
      if (!matchesLocation(project, filters.location)) return false;
    }

    if (filters.availability !== "all") {
      const listingType = (project.listingType || "").toLowerCase();
      if (!listingType.includes(filters.availability.toLowerCase())) return false;
    }

    if (filters.query.trim()) {
      const query = filters.query.trim().toLowerCase();
      const searchableText = [
        project.title,
        project.location,
        project.city,
        project.state,
        project.type,
        project.area,
        project.price,
        project.description,
        ...(project.highlights || []),
        ...(project.features || []),
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
      <Project />
      <ProjectsFilters filters={filters} onChange={setFilter} onReset={resetFilters} />
      <ProjectsGrid projects={filteredProjects} />
    </main>
  );
}
