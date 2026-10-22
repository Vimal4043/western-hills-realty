import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ABOUT_IMG from "../../assets/HomeAbousUs.jpg";
import { BRAND } from "../../data/projects.js";

export default function AboutUs() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-cream-dark py-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={ABOUT_IMG}
              alt="Modern residential apartment building"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </motion.div> */}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3b82f6]">
              About Us
            </p> */}

            <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-forest sm:text-4xl md:text-5xl">
              About Western Hills Realty
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-sage md:text-base">
              <p>
                Western Hills Realty is a real estate consultancy based in
                Lonavala, helping people find the right home across Lonavala,
                Valvan, Khandala, Malavli and the wider hill-station belt. We
                bring together available homes, shops and offices so buyers,
                sellers and tenants can explore real options in one place.
              </p>

              <p>
                From 1 RK and 1 BHK apartments to spacious 2 BHK hillside
                residences, we guide you through each available configuration
                with honest guidance on pricing, possession status and
                approvals â€” making the search simple and transparent.
              </p>

              <p>
                We also support property owners and sellers in listing their
                properties, from photography and pricing to buyer coordination
                and site visits. Led by {BRAND.owner}, the process stays
                personal, direct and easy to follow from first enquiry to
                handover.
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gold-dark"
            >
              Know More About Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={ABOUT_IMG}
              alt="Modern residential apartment building"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
