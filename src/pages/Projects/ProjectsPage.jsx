import { useSearchParams } from "react-router-dom";
import Project from "./Project.jsx";
import ProjectsFilters from "./ProjectsFilters.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";
import { PROJECTS, matchesLocation } from "../../data/projects.js";
import { matchesBudget, readPropertyFilters } from "../../lib/propertyFilters.js";

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = readPropertyFilters(searchParams);
  const setFilter = (key) => (value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value); else next.delete(key);
    setSearchParams(next, { replace: true });
  };
  const projects = PROJECTS.filter((project) => {
    if (filters.type && !project.type.toLowerCase().includes(filters.type.toLowerCase())) return false;
    if (filters.location && !matchesLocation(project, filters.location)) return false;
    if (filters.listingType && !project.listingType.toLowerCase().includes(filters.listingType.toLowerCase())) return false;
    if (!matchesBudget(project.minPrice, filters.budget)) return false;
    const text = [project.title, project.location, project.type, project.description, ...(project.highlights || [])].join(" ").toLowerCase();
    return !filters.keyword || text.includes(filters.keyword.toLowerCase());
  });
  return <main className="pt-19 md:pt-28"><Project /><ProjectsFilters filters={filters} onChange={setFilter} onReset={() => setSearchParams(new URLSearchParams(), { replace: true })} /><ProjectsGrid projects={projects} /></main>;
}
