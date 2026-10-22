import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "What types of homes are available?",
    a: "We work with 1 RK, 1 BHK and 2 BHK homes across Lonavala, Valvan, Khandala and Malavli, depending on availability.",
  },
  {
    q: "Are the homes ready to move in?",
    a: "Yes. Our current residential listings in Lonavala and Khandala are ready-to-move homes.",
  },
  {
    q: "Where are your projects located?",
    a: "Our listings are located in Lonavala, Valvan, Khandala and Malavli, providing convenient access to the market, schools, shopping and the Mumbai–Pune highway.",
  },
  {
    q: "Are the projects approved?",
    a: "Approval details are shared on each listing page. Please contact our team for the current approvals and documentation relating to the property you are interested in.",
  },
];

export default function FAQProjectInfo() {
  return (
    <section
      data-testid="faq-project-info"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>About Our Homes</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Questions about our residential projects
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#667085] md:text-lg">
            Find answers to common questions about our homes, projects and
            locations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
