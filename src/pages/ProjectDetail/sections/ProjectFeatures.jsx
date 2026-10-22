import { Reveal } from "../../../components/Reveal.jsx";
import { Check } from "lucide-react";

export default function ProjectFeatures({ project }) {
  if (!project.features?.length) return null;

  return (
    <section
      data-testid="project-features"
      className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
            Comfort & Convenience
          </p>

          <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
            Amenities
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.04}>
              <div className="flex items-center gap-4 rounded-2xl border border-[#c7d7ea] bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-[#0B2A4A]">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>

                <p className="text-sm font-semibold text-[#0B2A4A]">
                  {feature}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
