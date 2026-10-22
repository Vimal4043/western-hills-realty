import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "What amenities are available?",
    a: "Amenities vary by property. Current listings include facilities such as lifts, CCTV surveillance, security, power backup and kids play areas. Please confirm the exact amenity list for the home you are interested in.",
  },
  {
    q: "Is parking available?",
    a: "Parking availability can vary by property and should be confirmed for the specific home you are interested in.",
  },
  {
    q: "Are the properties suitable for families?",
    a: "Yes. We offer 1 RK, 1 BHK and 2 BHK homes along with shops and offices, located close to everyday facilities such as schools, hospitals, shopping and transport.",
  },
  {
    q: "Is public transport easily accessible?",
    a: "Yes. Our listings are located in and around Lonavala with access to the railway station, the Mumbaiâ€“Pune highway, taxis and shared auto services. Exact connectivity varies by property.",
  },
  {
    q: "Are schools and hospitals nearby?",
    a: "Yes. Nearby facilities vary by locality. Contact our team for details on schools, hospitals and daily conveniences near the property you are considering.",
  },
];

export default function FAQAmenities() {
  return (
    <section
      data-testid="faq-amenities"
      className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>Amenities &amp; Location</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Questions about amenities and connectivity
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
