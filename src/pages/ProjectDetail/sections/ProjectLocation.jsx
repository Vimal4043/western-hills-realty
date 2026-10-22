import { Reveal, Overline } from "../../../components/Reveal.jsx";
import { MapPin, ArrowUpRight, Navigation } from "lucide-react";

export default function ProjectLocation({ project }) {
  const hasConnectivity = project.connectivity?.length > 0;

  const locationText = [project.location, project.city, project.state]
    .filter(Boolean)
    .join(", ");

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationText,
  )}`;

  return (
    <section
      data-testid="project-location"
      className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline>Location</Overline>

          <h3 className="mt-4 flex items-center gap-2 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
            <MapPin className="h-7 w-7 shrink-0 text-[#3b82f6]" />
            {project.location}
          </h3>

          <p className="mt-3 text-base text-[#667085] md:text-lg">
            {project.city}
            {project.state ? `, ${project.state}` : ""}
          </p>
        </Reveal>

        {hasConnectivity && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.connectivity.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-[#c7d7ea] bg-white p-5">
                  <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-[#3b82f6]" />

                  <p className="text-sm font-semibold leading-6 text-[#0B2A4A]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#c7d7ea] bg-white">
            <div className="flex min-h-70 items-center justify-center bg-[#d9e2ef] p-8 text-center md:min-h-88">
              <div className="max-w-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3b82f6] text-[#0B2A4A]">
                  <MapPin className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-bold text-[#0B2A4A]">
                  {project.location}
                </h3>

                <p className="mt-2 text-sm text-[#667085]">
                  {project.city}
                  {project.state ? `, ${project.state}` : ""}
                </p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-bold text-white transition hover:bg-navy"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
