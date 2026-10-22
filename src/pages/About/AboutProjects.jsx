import { motion } from "framer-motion";
import {
  Building2,
  Home,
  KeyRound,
  MapPin,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { Reveal, Overline } from "../../components/Reveal.jsx";

const FEATURES = [
  {
    icon: Home,
    title: "1 RK & 1 BHK Homes",
    body: "Comfortable residential options for individuals, couples and small families.",
  },
  {
    icon: Building2,
    title: "2 BHK Homes",
    body: "Spacious homes designed for families looking for additional room and comfort.",
  },
  {
    icon: MapPin,
    title: "Lonavala & Khandala",
    body: "Properties located in well-connected hill-station localities with strong tourist demand.",
  },
  {
    icon: ShieldCheck,
    title: "Approvals On Request",
    body: "Approval and project details are shared directly with buyers on enquiry.",
  },
  {
    icon: KeyRound,
    title: "Ready-to-Move Homes",
    body: "Explore homes that are ready for possession without waiting for construction.",
  },
  {
    icon: Ruler,
    title: "Different Home Sizes",
    body: "Options across different configurations and sizes to suit different requirements.",
  },
];

export default function AboutProjects() {
  return (
    <section
      data-testid="about-projects"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline>What We Offer</Overline>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Residential projects made for everyday living.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#667085] md:text-lg">
            Explore thoughtfully selected homes across Lonavala and Khandala,
            with options for different family sizes, budgets and lifestyles.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-[#c7d7ea] bg-[#d9e2ef] p-7 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6] text-[#0B2A4A]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h4 className="font-heading text-xl font-bold">
                    {item.title}
                  </h4>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-[#667085]">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
