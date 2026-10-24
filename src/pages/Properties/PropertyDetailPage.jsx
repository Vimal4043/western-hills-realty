import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Reveal } from "../../components/Reveal.jsx";
import { PROJECTS, PROPERTIES } from "../../data/projects.js";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = PROPERTIES.find((p) => p.id === id);
  const project =
    property && PROJECTS.find((p) => p.id === property.projectId);

  const [selectedImage, setSelectedImage] = useState(
    property?.image || ""
  );
  const gallery = property?.gallery || [property?.image].filter(Boolean);

  if (!property) {
    return (
      <div className="bg-[#eaf2f8] px-5 pt-[76px] pb-8 text-center md:px-10 md:pt-[112px] md:pb-12">
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
                  alt={`${property.unitNumber || property.title}, ${property.location}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
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

                  <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
                    {property.unitNumber || property.title}
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

                  <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm font-semibold text-[#071E35]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#071E35]">{property.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {property.bedrooms > 0 && (
                        <>
                          <span className="text-[#667085]">{property.bedrooms} BHK</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
