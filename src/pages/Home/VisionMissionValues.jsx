import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Vision",
    text: "Western Hills Realty helps buyers and investors find suitable residential and commercial properties in Lonavala with clear, practical guidance.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "We make the home-search process simpler by understanding each buyer's preferred configuration, location and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Values",
    text: "We value transparency, reliability and responsive support from your first enquiry through property visits and booking.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function VisionMissionValues() {
  return (
    <section
      id="vision-mission-values"
      data-testid="vision-mission-values-section"
      className="bg-cream py-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Heading */}
        {/* <div className="mb-10 max-w-3xl md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            What drives us
          </p>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-[#0B2A4A] sm:text-4xl md:text-5xl">
            Built on trust.
            <br />
            Focused on business.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#0B2A4A]/60 md:text-base">
            We focus on making commercial and industrial property decisions
            simpler by connecting businesses with spaces that match their
            operational needs.
          </p>
        </div> */}

        {/* =====================================================
            VISION / MISSION / VALUES
        ===================================================== */}
        <div className="grid overflow-hidden rounded-3xl md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            const isMiddle = index === 1;

            return (
              <motion.article
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`relative flex min-h-75 flex-col items-center overflow-hidden px-7 py-10 text-center transition-all duration-500 sm:px-10 sm:py-12 ${
                  isMiddle
                    ? "bg-linear-to-b from-[#0B2A4A] to-royal text-cream"
                    : "bg-navy text-cream"
                }`}
              >
                <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent" />
                {/* Icon */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${
                    isMiddle
                      ? "border-gold bg-linear-to-b from-gold to-[#60a5fa] text-navy"
                      : "border-gold/60 bg-white/10 text-gold-light"
                  }`}
                >
                  <Icon
                    className="h-9 w-9"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                {/* Divider */}
                <div
                  className={`mt-3 h-px w-11 ${
                    isMiddle ? "bg-white/80" : "bg-white/40"
                  }`}
                />

                {/* Description */}
                <p
                  className={`mt-6 max-w-sm text-sm leading-7 ${
                    isMiddle ? "text-white/90" : "text-white/70"
                  }`}
                >
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
