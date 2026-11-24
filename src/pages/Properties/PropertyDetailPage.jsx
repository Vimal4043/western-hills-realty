import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  Bed,
  Building,
  Check,
  CheckCheck,
  Droplets,
  Factory,
  Home,
  MapPin,
  PlugZap,
  Ruler,
  Wifi,
} from "lucide-react";
import { Reveal } from "../../components/Reveal.jsx";
import {
  PLACEHOLDER_IMAGE,
  PROJECTS,
  PROPERTIES,
} from "../../data/projects.js";

const ICONS = {
  bedrooms: <Bed className="h-4 w-4" />,
  bathrooms: <Bath className="h-4 w-4" />,
  plotArea: <Ruler className="h-4 w-4" />,
  carpetArea: <Home className="h-4 w-4" />,
  builtUpArea: <Building className="h-4 w-4" />,
  category: <Building className="h-4 w-4" />,
  listingType: <Home className="h-4 w-4" />,
  legalStatus: <CheckCheck className="h-4 w-4" />,
  gst: <Droplets className="h-4 w-4" />,
  airConditioning: <Wifi className="h-4 w-4" />,
  utilities: <PlugZap className="h-4 w-4" />,
  possession: <Home className="h-4 w-4" />,
  amenities: <Check className="h-4 w-4" />,
  facilities: <Factory className="h-4 w-4" />,
  suitableFor: <Building className="h-4 w-4" />,
};

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);
  const project =
    property && PROJECTS.find((p) => p.id === property.projectId);

  const category = property.subtype || property.type;
  const coverImage = property.image || PLACEHOLDER_IMAGE;
  const gallery = property?.gallery?.length
    ? property.gallery
    : [coverImage].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState(coverImage);

  /* Scalar specification rows to render, skipping anything not provided. */
  const specRows = [
    property.type && {
      key: "category",
      label: "Property Category",
      value: category,
    },
    property.listingType && {
      key: "listingType",
      label: "Listing Type",
      value: property.listingType,
    },
    property.bedrooms && {
      key: "bedrooms",
      label: "Bedrooms",
      value: `${property.bedrooms} BHK`,
    },
    property.bathrooms && {
      key: "bathrooms",
      label: "Bathrooms",
      value: String(property.bathrooms),
    },
    property.plotArea && {
      key: "plotArea",
      label: "Plot Area",
      value: property.plotArea,
    },
    property.carpetArea && {
      key: "carpetArea",
      label: "Carpet Area",
      value: property.carpetArea,
    },
    property.builtUpArea && {
      key: "builtUpArea",
      label: "Built-up Area",
      value: property.builtUpArea,
    },
    property.legalStatus && {
      key: "legalStatus",
      label: "Legal Status",
      value: property.legalStatus,
    },
    property.gst && {
      key: "gst",
      label: "GST",
      value: property.gst,
    },
    property.airConditioning && {
      key: "airConditioning",
      label: "Air Conditioning",
      value: property.airConditioning,
    },
    property.utilities?.length && {
      key: "utilities",
      label: "Utilities",
      value: property.utilities.join(", "),
    },
    property.possession && {
      key: "possession",
      label: "Possession",
      value: property.possession,
    },
  ].filter(Boolean);

  if (!property) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#eaf2f8] px-5 py-8 md:py-12">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-extrabold text-[#0B2A4A] md:text-5xl">
            Property not found
          </h1>
          <p className="mt-4 text-base text-[#667085] md:text-lg">
            The property you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/properties"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] hover:text-[#0B2A4A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        {/* Image gallery */}
        <section className="bg-white px-5 py-6 md:px-10 md:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-[#c7d7ea] bg-white overflow-hidden">
              <div className="relative aspect-video bg-[#d9e2ef]">
                <img
                  src={selectedImage}
                  alt={`${property.title || property.unitNumber}, ${property.location}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                {!property.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-[#667085]">
                    No images available
                  </div>
                )}
                {property.listingType && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
                    {property.listingType}
                  </span>
                )}
                {property.type === "Commercial" && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#0B2A4A]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Commercial
                  </span>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2 snap-x snap-proximity">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`snap-start shrink-0 rounded-xl border overflow-hidden ${
                        selectedImage === img
                          ? "border-[#0B2A4A] ring-2 ring-[#0B2A4A]"
                          : "border-transparent hover:border-[#c7d7ea]"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-16 w-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Property information */}
        <section className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  {property.availabilityNote && (
                    <span className="rounded-full bg-[#3b82f6] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0B2A4A]">
                      {property.availabilityNote}
                    </span>
                  )}

                  {property.tagline && (
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#3b82f6]">
                      {property.tagline}
                    </p>
                  )}

                  <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
                    {property.title || property.unitNumber}
                  </h2>

                  <p className="mt-4 flex items-center gap-2 text-base text-[#667085] md:text-lg">
                    <MapPin className="h-5 w-5 shrink-0 text-[#3b82f6]" />
                    {property.location}
                  </p>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#667085] md:text-lg">
                    {property.description}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#c7d7ea] bg-[#d9e2ef] p-5 lg:min-w-65">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#667085]">
                    Price
                  </p>

                  <p className="mt-2 font-heading text-3xl font-extrabold text-[#0B2A4A]">
                    {property.price || "Price on request"}
                  </p>

                </div>
              </div>

              {/* Property specifications */}
              {specRows.length && (
                <section
                  data-testid="property-specifications"
                  className="mt-10 scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
                >
                  <div className="mx-auto max-w-6xl">
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                        Property Details
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
                        Specification
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {specRows.map((row) => (
                        <div
                          key={row.key}
                          className="h-full rounded-2xl border border-[#c7d7ea] bg-white p-5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#0B2A4A]">
                              {ICONS[row.key]}
                            </div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#071E35]">
                              {row.label}
                            </p>
                          </div>
                          <p className="mt-3 text-base font-bold leading-6 text-[#0B2A4A]">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Amenities (villas) */}
              {property.amenities?.length && (
                <section
                  data-testid="property-amenities"
                  className="mt-10 scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
                >
                  <div className="mx-auto max-w-6xl">
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                        Amenities
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
                        Amenities
                      </h3>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {property.amenities.map((amenity, index) => (
                        <Reveal key={amenity} delay={index * 0.03}>
                          <div className="flex items-center gap-4 rounded-2xl border border-[#c7d7ea] bg-white p-5">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-[#0B2A4A]">
                              {ICONS.amenities}
                            </span>
                            <p className="text-sm font-semibold text-[#0B2A4A]">
                              {amenity}
                            </p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Facilities (factories) */}
              {property.facilities?.length && (
                <section
                  data-testid="property-facilities"
                  className="mt-10 scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
                >
                  <div className="mx-auto max-w-6xl">
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                        Facilities
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
                        Facilities
                      </h3>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {property.facilities.map((facility, index) => (
                        <Reveal key={facility} delay={index * 0.03}>
                          <div className="flex items-center gap-4 rounded-2xl border border-[#c7d7ea] bg-white p-5">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-[#0B2A4A]">
                              {ICONS.facilities}
                            </span>
                            <p className="text-sm font-semibold text-[#0B2A4A]">
                              {facility}
                            </p>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Suitable for (factories) */}
              {property.suitableFor?.length && (
                <section
                  data-testid="property-suitable-for"
                  className="mt-10 scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
                >
                  <div className="mx-auto max-w-6xl">
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                        Suitable For
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
                        Ideal For
                      </h3>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {property.suitableFor.map((item, index) => (
                        <Reveal key={item} delay={index * 0.03}>
                          <div className="inline-flex items-center gap-2 rounded-full border border-[#c7d7ea] bg-[#d9e2ef] px-5 py-3 text-sm font-semibold text-[#0B2A4A]">
                            {ICONS.suitableFor} {item}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </Reveal>
          </div>
        </section>

        {/* Parent project link */}
        {project && (
          <section className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="rounded-2xl border border-[#c7d7ea] bg-white p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                        Part of Project
                      </p>
                      <h3 className="mt-1 font-heading text-xl font-bold text-[#0B2A4A]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#667085]">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] hover:text-[#0B2A4A]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      View {project.title}
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
