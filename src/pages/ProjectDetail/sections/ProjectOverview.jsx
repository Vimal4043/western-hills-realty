import { Reveal } from "../../../components/Reveal.jsx";
import { MapPin, Home, BadgeCheck } from "lucide-react";

export default function ProjectOverview({ project }) {
  return (
    <section
      data-testid="project-overview"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {project.availabilityNote && (
                  <span className="rounded-full bg-[#3b82f6] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0B2A4A]">
                    {project.availabilityNote}
                  </span>
                )}

                {project.approvals && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2A4A] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {project.approvals}
                  </span>
                )}
              </div>

              <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl lg:text-6xl">
                {project.title}
              </h2>

              <p className="mt-4 flex items-center gap-2 text-base text-[#667085] md:text-lg">
                <MapPin className="h-5 w-5 shrink-0 text-[#3b82f6]" />
                {project.location}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#667085] md:text-lg">
                {project.description}
              </p>
            </div>

            <div className="rounded-2xl border border-[#c7d7ea] bg-[#d9e2ef] p-5 lg:min-w-65">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#667085]">
                Starting From
              </p>

              <p className="mt-2 font-heading text-3xl font-extrabold text-[#0B2A4A]">
                {project.price || "Price on request"}
              </p>

              {project.area && (
                <div className="mt-4 flex items-center gap-2 border-t border-[#c7d7ea] pt-4 text-sm font-semibold text-[#071E35]">
                  <Home className="h-4 w-4" />
                  {project.area}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
