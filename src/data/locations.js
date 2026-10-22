/* ============================================================
   LOCATION MATCHING
   Lives in its own module so the filter logic stays independent
   of the project assets and can be reasoned about in isolation.
   ============================================================ */

/* Normalised form of a location value, used for comparison. */
export const normalizeLocation = (value) =>
  (value || "").trim().toLowerCase();

/* Split a locality string into its individual parts so a listing such as
   "Lonavala & Malavli" can be matched by either name. */
export const splitLocality = (value) =>
  (value || "")
    .toLowerCase()
    .split(/[,&/]/)
    .map((part) => part.trim())
    .filter(Boolean);

/* The localities a listing belongs to, normalised for comparison. */
const listingLocalities = (project) =>
  (project.localities?.length
    ? project.localities
    : splitLocality(project.location)
  ).map((value) => normalizeLocation(value));

/* True when a listing belongs to the given filter value.
   Filter values may be composite (e.g. "Valvan, Lonavala"); the first
   locality is treated as the specific one, so selecting "Valvan, Lonavala"
   returns only Valvan listings and not every other Lonavala property. */
export const matchesLocation = (project, filterValue) => {
  if (!filterValue || filterValue === "all") return true;

  const target = splitLocality(filterValue)[0];
  if (!target) return true;

  return listingLocalities(project).includes(target);
};
