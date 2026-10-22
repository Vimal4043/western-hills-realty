import { Reveal } from "../../../components/Reveal.jsx";
import { Home, Users } from "lucide-react";

export default function ProjectSuitableFor({ project }) {
  if (!project.suitableFor?.length) return null;

  return (
    <section
      data-testid="project-suitable-for"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
            Ideal For
          </p>

          <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
            Perfect For Your Lifestyle
          </h3>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.suitableFor.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c7d7ea] bg-[#d9e2ef] px-5 py-3 text-sm font-semibold text-[#0B2A4A]">
                {index % 2 === 0 ? (
                  <Home className="h-4 w-4 text-[#3b82f6]" />
                ) : (
                  <Users className="h-4 w-4 text-[#3b82f6]" />
                )}
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
