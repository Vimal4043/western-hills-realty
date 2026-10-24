import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Project() {

  return (
    <section
      id="find-project"
      data-testid="find-project-section"
      className="scroll-mt-12 overflow-hidden bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight text-forest md:text-4xl">
          Find Projects
        </h2>

        {/* =====================================================
            BREADCRUMB
            ===================================================== */}
        <div className="mt-4 flex items-center gap-2 border border-forest/5 bg-cream-dark px-4 py-3 text-sm">
          <Link to="/" className="text-gold hover:text-forest">
            Home
          </Link>

          <span className="text-forest/30">›</span>

          <Link to="/projects" className="font-medium text-forest">
            projects
          </Link>
        </div>

        {/* =====================================================
            INTRODUCTION
            ===================================================== */}
        <p className="mt-4 max-w-6xl text-sm leading-7 text-ink md:text-base">
          Explore properties available in and around Lonavala — from compact
          1 RK homes to spacious 2 BHK residences and commercial shops &
          offices. Choose the location, property type and budget that match
          your requirements, and find a space that suits your needs.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects-grid"
            data-testid="projects-hero-cta"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-navy"
          >
            Explore projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-white"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </section>
  );
}
