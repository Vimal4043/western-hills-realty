import { Reveal, Overline } from "../../components/Reveal.jsx";

const STORY = [
  {
    n: "01",
    title: "Understanding Your Needs",
    body: "Every homebuyer has different priorities. We take the time to understand your preferred location, home configuration, budget and requirements before helping you explore suitable projects.",
  },
  {
    n: "02",
    title: "Homes in Hill-Station Locations",
    body: "Our current listings are located across Lonavala, Valvan, Khandala and Malavli, giving buyers and investors access to well-connected localities with everyday conveniences and strong holiday-demand potential.",
  },
  {
    n: "03",
    title: "A Simple Buying Experience",
    body: "We believe finding a home should be straightforward. From your first enquiry to property visits and understanding the project details, we aim to make every step easier and more transparent.",
  },
];

export default function AboutStory() {
  return (
    <section
      data-testid="about-story"
      className="scroll-mt-12 bg-cream-dark px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline>Our Approach</Overline>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-forest md:text-5xl">
            Making the search for your next home simpler.
          </h2>
        </Reveal>

        <div className="mt-5">
          {STORY.map((item, index) => (
            <Reveal key={item.n} delay={index * 0.05}>
              <div className="flex gap-6 border-t border-[#c7d7ea] py-8 first:border-t-0 md:gap-10 md:py-10">
                <span className="shrink-0 font-heading text-sm font-extrabold text-gold">
                  {item.n}
                </span>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-forest md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-4xl text-[15px] leading-7 text-sage md:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
