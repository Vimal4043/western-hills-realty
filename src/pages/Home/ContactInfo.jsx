import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { BRAND } from "../../data/projects.js";

const contactItems = [
  {
    icon: MapPin,
    title: "Office",
    content: BRAND.address,
    href: BRAND.mapsUrl,
  },
  {
    icon: Phone,
    title: "Mobile",
    persons: BRAND.contactPersons,
  },
  {
    icon: Mail,
    title: "Email",
    content: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: UserRound,
    title: "Proprietor",
    content: BRAND.owner,
  },
];

export default function ContactInfo() {
  return (
    <section
      id="contact-info"
      data-testid="contact-info-section"
      className="bg-[#d9e2ef] text-[#0B2A4A]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex h-full min-h-30 flex-col items-center justify-start rounded-2xl border border-[#3b82f6]/40 bg-white px-6 pb-8 pt-8 text-center shadow-[0_2px_12px_rgba(11,42,74,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(11,42,74,0.12)]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#3b82f6]/40 bg-[#eaf2f8] text-[#0B2A4A]">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </div>

                <h4 className="mt-4 font-heading text-xl font-semibold tracking-wide text-[#0B2A4A]">
                  {item.title}
                </h4>
                <div className="mt-2 h-px w-10 shrink-0 bg-[#3b82f6]/60" />

                {item.persons ? (
                  <div className="mt-3 w-full max-w-60 space-y-1 text-sm leading-relaxed">
                    {item.persons.map((person) => (
                      <div key={person.phone}>
                        <a
                          href={`tel:${person.phone}`}
                          className="font-semibold text-[#17202A] transition-colors duration-300 hover:text-[#3b82f6]"
                        >
                          {person.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                ) : item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-3 w-full max-w-60 break-all text-sm leading-relaxed text-[#17202A] transition-colors duration-300 hover:text-[#3b82f6]"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="mt-3 w-full max-w-60 text-sm leading-relaxed text-[#667085]">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
