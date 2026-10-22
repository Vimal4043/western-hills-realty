import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BRAND, PROJECTS } from "../../data/projects.js";

/* ============================================================
   PROPERTY SHOWCASE
   Presents the property types Western Hills Realty deals in, so
   the homepage stays accurate without inventing project names or
   prices that have not been confirmed by the client.

   The cards are derived from the published listings so the
   homepage can never drift away from the actual inventory.
   ============================================================ */

const SHOWCASE = PROJECTS.map((project) => ({
  id: project.id,
  title: project.title,
  location: project.localities.join(" Â· "),
  descriptor: project.tagline,
  image: project.images[0],
  highlights: project.highlights.slice(0, 3),
  type: project.type,
}));

export default function FeaturedProjects() {
  return (
    <section
      id="featured"
      data-testid="featured-section"
      className="scroll-mt-12 bg-white py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            Our Portfolio
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-4xl">
            Property we help you find
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#0B2A4A]/65 md:text-base">
            From compact apartments to hillside residences and commercial
            space â€” {BRAND.name} guides you through sale, purchase and rental
            with clear pricing and direct contact.
          </p>
        </div>


        {/* =====================================================
            SHOWCASE GRID
        ===================================================== */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {SHOWCASE.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#c7d7ea] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,42,74,0.12)]"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  {item.location}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold text-[#0B2A4A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  {item.descriptor}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[#c7d7ea] px-3 py-1 text-xs font-semibold text-[#0B2A4A]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  <Link
                    to={`/projects/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#071E35] transition-colors duration-300 hover:text-[#3b82f6]"
                  >
                    View project

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}
        <div className="mt-10 flex flex-col items-center gap-3 md:mt-12">
          <Link
            to="/projects"
            data-testid="featured-view-all"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#0B2A4A]/15 bg-[#0B2A4A] px-7 py-3.5 text-sm font-semibold text-white"
          >
            {/* Yellow hover sweep */}
            <span className="absolute inset-y-0 left-0 w-[115%] translate-x-[-105%] -skew-x-12 rounded-full bg-[#3b82f6] transition-transform duration-500 ease-out group-hover:translate-x-[-5%]" />

            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#0B2A4A]">
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          <p className="text-xs text-[#667085]">
            Prefer to talk first? Call{" "}
            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="font-semibold text-[#0B2A4A] underline decoration-gold underline-offset-4 hover:text-gold"
            >
              {BRAND.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
