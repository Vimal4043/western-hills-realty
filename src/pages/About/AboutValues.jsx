import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Compass } from "lucide-react";
import { Reveal, Overline } from "../../components/Reveal.jsx";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    body: "We believe homebuyers should have clear information about pricing, location and project details before making a decision.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Guidance",
    body: "Buying a home is an important decision. We listen to your requirements and help you understand the options that best fit your needs.",
  },
  {
    icon: Compass,
    title: "Right Direction",
    body: "Our goal is not simply to show you projects, but to help you make a confident and informed choice for your future home.",
  },
];

export default function AboutValues() {
  return (
    <section
      data-testid="about-values"
      className="scroll-mt-24 bg-forest px-5 py-10 text-white md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline light>What Matters To Us</Overline>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            A home is more than a property.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            We focus on making the home-buying experience comfortable,
            straightforward and trustworthy.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {VALUES.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-forest">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h4 className="font-heading text-xl font-bold">
                    {value.title}
                  </h4>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  {value.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
