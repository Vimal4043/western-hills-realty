import { BRAND } from "../../data/projects.js";
import { Reveal } from "../../components/Reveal.jsx";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  const phones = BRAND.phones || [BRAND.phone];

  return (
    <section
      data-testid="about-cta"
      className="scroll-mt-24 bg-white px-5 py-10 md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-[#d9e2ef]">
            <div className="grid lg:grid-cols-[1.4fr_0.9fr]">
              <div className="p-8 md:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                  Contact Us
                </p>

                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
                  Looking for your next home?
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#667085] md:text-lg">
                  Explore our available residential projects or speak with our
                  team to understand pricing, availability and site visit
                  options.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy"
                  >
                    View Projects
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#0B2A4A]/15 px-7 py-3.5 text-sm font-bold text-[#0B2A4A] transition hover:bg-[#0B2A4A] hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-[#0B2A4A] p-8 text-white md:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b82f6]">
                  Speak With Us
                </p>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  Have questions about a project? Give us a call.
                </p>

                <div className="mt-6 space-y-3">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 text-base font-bold text-white transition hover:text-[#3b82f6]"
                    >
                      <Phone className="h-4 w-4 text-[#3b82f6]" />
                      {phone}
                    </a>
                  ))}
                </div>

                {BRAND.email && (
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="mt-4 break-all text-md text-white/80 transition hover:text-[#3b82f6]"
                  >
                    <Mail className="mr-2 inline h-4 w-4 text-[#3b82f6]" />
                    {BRAND.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
