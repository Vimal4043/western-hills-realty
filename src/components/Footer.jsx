import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "../data/projects.js";
import logo from "../assets/logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="border-t-2 border-gold bg-navy pb-4 pt-10 text-white md:pt-14"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          {/* Brand / About */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label={`${BRAND.name} - Home`}
            >
              <img
                src={logo}
                alt={BRAND.name}
                className="h-18 w-auto object-contain md:h-20"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {BRAND.name} is a real estate consultancy led by{" "}
              <span className="font-semibold text-white/90">{BRAND.owner}</span>.
              We help families and investors find verified homes, shops and
              offices across Lonavala and the wider Pune hills — with honest
              guidance from the first site visit to key handover.
            </p>

            <a
              href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-light"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />

              Talk to {BRAND.owner}
            </a>

            {/* <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-[#0B2A4A] transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Navigate
            </h4>
            <div className="mt-3 h-px w-12 bg-gold/60" />

            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors duration-300 hover:text-gold-light"
                  >
                    {n.label}

                    <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.28em] text-gold">
              Contact
            </h4>
            <div className="mt-3 h-px w-12 bg-gold/60" />

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="break-all transition-colors duration-300 hover:text-gold-light"
                >
                  {BRAND.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="space-y-1">
                  {(BRAND.contactPersons || []).map((person) => (
                    <span key={person.phone} className="block">
                      <a
                        href={`tel:${person.phone}`}
                        className="transition-colors duration-300 hover:text-gold-light"
                      >
                        {person.phone}
                      </a>
                      <span className="block text-xs text-white/60">
                        {person.name}
                      </span>
                    </span>
                  ))}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-white/70 transition-colors duration-300 hover:text-gold-light"
                >
                  {BRAND.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gold/30 py-6 text-center text-xs text-white/60 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {BRAND.name} — {BRAND.legalName}.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
