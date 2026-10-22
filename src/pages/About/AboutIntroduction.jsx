import { BRAND } from "../../data/projects.js";
import { Reveal } from "../../components/Reveal.jsx";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpeg";

export default function AboutIntroduction() {
  return (
    <section
      data-testid="about-intro"
      className="scroll-mt-24 overflow-hidden bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            PAGE TITLE
            ===================================================== */}
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-forest md:text-4xl">
            About Us
          </h2>
        </Reveal>

        {/* =====================================================
            BREADCRUMB
            ===================================================== */}
        <Reveal delay={0.05}>
          <div className="mt-4 flex items-center gap-2 border border-forest/5 bg-cream-dark px-4 py-3 text-sm">
            <Link to="/" className="text-gold hover:text-forest">
              Home
            </Link>

            <span className="text-forest/30">›</span>

            <Link to="/about" className="font-medium text-forest">
              About Us
            </Link>
          </div>
        </Reveal>

        {/* =====================================================
            ABOUT CONTENT
            ===================================================== */}
        <Reveal delay={0.1}>
          <div className="mt-5">
            {/* =================================================
              FIRST CONTENT ROW
              ================================================= */}
            <div className="text-[15px] leading-7 text-ink md:text-base md:leading-7">
              {/* Image floated to the right on desktop.
                  Container keeps the image's natural 502x539 aspect
                  ratio so the photo is never awkwardly cropped. */}
              <div className="ml-0 mb-3 w-full max-w-sm md:float-right md:mx-0 md:ml-7 md:max-w-none md:w-[38%] lg:w-[40%]">
                <div className="overflow-hidden rounded-xl border-2 border-gold">
                  <img
                    src={hero}
                    alt="Western Hills Realty"
                    className="block aspect-602/589 w-full object-cover"
                  />
                </div>
              </div>

              {/* Main introduction */}
              <p>
                {BRAND.name} is focused on helping people find properties that
                match their needs, lifestyle and budget. We bring together
                selected homes and commercial spaces in hill-station
                locations such as Lonavala, Valvan, Khandala and Malavli.
              </p>

              <p className="mt-5">
                We understand that buying a home is an important decision.
                That's why we focus on understanding each customer's
                requirements and helping them explore suitable projects
                based on their preferences and budget.
              </p>

              <p className="mt-5">
                From understanding your requirement to sharing project
                details and arranging a site visit, we aim to keep the
                home-buying journey simple, clear and comfortable.
              </p>

              <p className="mt-5">
                Our goal is to make the project search process easier by
                providing clear information and practical assistance at every
                stage. Whether you are looking for a compact home or a
                comfortable family residence, we help you explore options that
                suit your needs.
              </p>

              <p className="mt-5">
                We bring together projects in locations that offer
                convenience, connectivity and opportunities for future growth.
                Our approach is centred around making project information
                easier to understand so that customers can make informed
                decisions.
              </p>

              <p className="mt-5">
                We believe that every home search is different. Our team takes
                the time to understand your preferred location, configuration
                and budget before helping you explore the available
                possibilities.
              </p>

              {/* Clear the float */}
              <div className="clear-both" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}