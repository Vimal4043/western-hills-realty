import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "Can I arrange a site visit?",
    a: "Yes. Contact our team or submit an enquiry through the website and we can coordinate a convenient time for a site visit.",
  },
  {
    q: "What should I do before booking a home?",
    a: "We recommend visiting the project, reviewing the available configuration and pricing, checking the relevant project approvals and understanding the complete payment and documentation requirements before booking.",
  },
  {
    q: "Can I get more details about a particular project?",
    a: "Yes. Each project page provides available specifications, pricing, amenities, connectivity and other project information. You can also contact us for additional details.",
  },
  {
    q: "How can I book a site visit?",
    a: "You can submit an enquiry through the project page or contact us directly using the phone numbers provided on the website.",
  },
];

export default function FAQBuyingProcess() {
  return (
    <section
      data-testid="faq-buying-process"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>Buying Process</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Questions about buying a home
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
