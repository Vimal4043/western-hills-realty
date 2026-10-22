import { Reveal } from "../../../components/Reveal.jsx";

export default function ProjectSpecifications({ project }) {
  if (!project.specifications?.length) return null;

  return (
    <section
      data-testid="project-specifications"
      className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
            Project Details
          </p>

          <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
            Project Specifications
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.specifications.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.03}>
              <div className="h-full rounded-2xl border border-[#c7d7ea] bg-white p-5 transition-shadow duration-300 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#071E35]">
                  {item.label}
                </p>

                <p className="mt-3 text-base font-bold leading-6 text-[#0B2A4A]">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
