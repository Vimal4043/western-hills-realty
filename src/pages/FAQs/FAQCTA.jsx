import { BRAND } from "../../data/projects.js";
import { Reveal } from "../../components/Reveal.jsx";
import { Phone, Mail } from "lucide-react";

export default function FAQCTA() {
  const phones = BRAND.phones || [BRAND.phone];

  return (
    <section
      data-testid="faq-cta"
      className="scroll-mt-12 bg-gradient-to-r from-navy via-[#0B2A4A] to-royal px-5 py-8 text-white md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3b82f6]">
            Need More Information?
          </p>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Still have questions about a home?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Our team can help you with project details, pricing, site visits,
            availability and the buying process.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phones[0].replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0B2A4A]"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>

          {/* <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/60">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="transition-colors hover:text-[#3b82f6]"
              >
                {phone}
              </a>
            ))}
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}
