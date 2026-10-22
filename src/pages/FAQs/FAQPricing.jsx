import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "What is the starting price of the homes?",
    a: "Pricing is shared per property and varies by configuration, location and size. Please contact our team for the current price of the specific home you are interested in.",
  },
  {
    q: "Are the quoted prices all inclusive?",
    a: "It depends on the property. Some listings are quoted all-inclusive while others are quoted separately from government taxes and charges. We confirm the complete payable amount with you before any booking.",
  },
  {
    q: "Do the prices vary based on configuration?",
    a: "Yes. Pricing depends on the configuration and size of the home. For example, 1 RK, 1 BHK and 2 BHK homes have different price ranges depending on the project.",
  },
  {
    q: "Can I enquire about a specific budget?",
    a: "Yes. You can use the budget filter on our Projects page to explore homes according to your preferred price range, or contact our team directly for current availability.",
  },
];

export default function FAQPricing() {
  return (
    <section
      data-testid="faq-pricing"
      className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>Pricing</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Questions about prices and budgets
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
