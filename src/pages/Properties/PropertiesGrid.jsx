import PropertyCard from "./PropertyCard.jsx";
import { Reveal } from "../../components/Reveal.jsx";

export default function PropertiesGrid({ properties }) {
  return (
    <section
      id="properties-grid"
      data-testid="properties-grid"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                Available Properties
              </p>

              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
                Find your next home
              </h2>
            </div>

            <p className="text-sm text-[#667085]">
              Showing{" "}
              <span className="font-semibold text-[#0B2A4A]">
                {properties.length}
              </span>{" "}
              property
            </p>
          </div>
        </Reveal>

        {properties.length === 0 ? (
          <Reveal>
            <div
              data-testid="no-properties"
              className="mt-12 rounded-3xl border border-[#c7d7ea] bg-[#d9e2ef] p-10 text-center md:p-14"
            >
              <h3 className="font-heading text-xl font-bold text-[#0B2A4A] md:text-2xl">
                No properties match your search
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#667085] md:text-base">
                We couldn't find a property matching all your selected filters.
                Try changing the property type, location, listing type or
                budget.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
