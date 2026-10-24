import { Search, X } from "lucide-react";
import {
  PROJECT_TYPES,
  BUDGETS,
  LOCATIONS,
  AVAILABILITY,
} from "../../data/projects.js";

const inputCls =
  "w-full rounded-xl border border-[#c7d7ea] bg-[#d9e2ef] px-4 py-3 text-sm text-[#17202A] outline-none transition-colors duration-300 focus:border-[#071E35] focus:ring-2 focus:ring-[#071E35]/20";
const Field = ({ label, children }) => (
  <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#071E35]">
    {label}
    <span className="mt-2 block">{children}</span>
  </label>
);

export default function ProjectsFilters({ filters, onChange, onReset }) {
  const set = (key) => (event) => onChange(key)(event.target.value);
  const select = (key, values, placeholder) => (
    <select
      value={filters[key]}
      onChange={set(key)}
      data-testid={`project-filter-${key}`}
      className={inputCls}
    >
      <option value="">{placeholder}</option>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
  return (
    <section
      data-testid="projects-filters"
      className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[#c7d7ea] bg-white p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Field label="Configuration">
              {select("type", PROJECT_TYPES, "All configurations")}
            </Field>
            <Field label="Budget">
              {select("budget", BUDGETS, "All budgets")}
            </Field>
            <Field label="Location">
              {select("location", LOCATIONS, "All locations")}
            </Field>
            <Field label="Listing Type">
              {select("listingType", AVAILABILITY, "For Sale / Rent")}
            </Field>
            <Field label="Keyword">
              <span className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#667085]" />
                <input
                  value={filters.keyword}
                  onChange={set("keyword")}
                  placeholder="Search projects"
                  data-testid="project-filter-keyword"
                  className={`${inputCls} pl-10`}
                />
              </span>
            </Field>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onReset}
              data-testid="project-filter-reset"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B2A4A]/15 px-5 py-2.5 text-sm font-semibold text-[#0B2A4A] transition-colors duration-300 hover:bg-[#0B2A4A] hover:text-white"
            >
              <X className="h-4 w-4" />
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
