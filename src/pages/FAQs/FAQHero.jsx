import { motion } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85&auto=format&fit=crop";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
    },
  },
};

const lineVar = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FAQHero() {
  return (
    <section
      data-testid="faq-hero"
      className="relative flex min-h-[55vh] items-center justify-center overflow-hidden md:min-h-[65vh]"
    >
      <motion.img
        src={HERO_IMG}
        alt="Modern residential home interior"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#0B2A4A]/75 via-[#0B2A4A]/45 to-[#0B2A4A]/25" />

      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 flex flex-col items-center px-5 text-center text-white">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <motion.span variants={lineVar} className="block">
            Frequently Asked
          </motion.span>

          <motion.span variants={lineVar} className="block">
            Questions
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Everything you need to know about our homes, pricing, locations,
          approvals and buying process.
        </motion.p>
      </div>
    </section>
  );
}
