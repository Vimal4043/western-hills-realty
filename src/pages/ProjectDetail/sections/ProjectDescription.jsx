import { Reveal } from "../../../components/Reveal.jsx";

export default function ProjectDescription({ project }) {
  if (!project.description) return null;

  return (
    <section
      data-testid="project-description"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
              About the Project
            </p>

            <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] md:text-4xl">
              About {project.title}
            </h3>

            <p className="mt-6 text-base leading-8 text-[#667085] md:text-lg">
              {project.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
