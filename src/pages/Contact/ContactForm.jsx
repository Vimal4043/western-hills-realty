import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

import { Reveal } from "../../components/Reveal.jsx";
import { PROJECT_TYPES, BRAND } from "../../data/projects.js";
import { sendForm } from "../../lib/formsubmit.js";

const inputCls =
  "w-full border border-[#0B2A4A]/15 bg-[#d9e2ef] px-4 py-3 text-sm text-[#0B2A4A] outline-none transition-colors duration-300 placeholder:text-[#0B2A4A]/40 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/15";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Office Address",
    value: BRAND.address,
    href: BRAND.mapsUrl,
  },
  {
    icon: Phone,
    label: "Proprietor",
    value: BRAND.owner,
    href: `tel:${BRAND.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "India",
    phone: "",
    interest: "Buy a Home",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const set = (key) => (e) =>
    setForm((current) => ({
      ...current,
      [key]: e.target.value,
    }));

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      country: "India",
      phone: "",
      interest: "Buy a Home",
      message: "",
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await sendForm(
        {
          name: form.name,
          email: form.email,
          country: form.country,
          phone: form.phone,
          interest: form.interest,
          message: form.message,
        },
        "Western Hills Realty contact enquiry",
      );

      toast.success("Thanks â€” we'll be in touch within one business day.");

      resetForm();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      data-testid="contact-form-section"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-heading text-3xl font-bold leading-tight text-[#0B2A4A] md:text-4xl">
          Contact Us
        </h2>

        <div className="mt-4 flex items-center gap-2 border border-[#0B2A4A]/5 bg-[#d9e2ef] px-4 py-3 text-sm">
          <Link to="/" className="text-[#3b82f6] hover:text-[#0B2A4A]">
            Home
          </Link>

          <span className="text-[#0B2A4A]/30">â€º</span>

          <span className="font-medium text-[#0B2A4A]">Contact Us</span>
        </div>

        <div className="mt-6">

          {/* =====================================================
            CONTACT CONTAINER
          ===================================================== */}
        <div className="grid overflow-hidden rounded-2xl border border-[#0B2A4A]/10 shadow-[0_12px_45px_rgba(11,42,74,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* ===================================================
              LEFT â€” CONTACT INFORMATION
          =================================================== */}
          <div className="bg-[#0B2A4A] px-7 py-8 md:px-10 md:py-10 lg:px-12">
            <Reveal>
              <h3 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                {BRAND.name}
              </h3>

              <div className="mt-4 h-0.5 w-20 bg-[#3b82f6]" />
            </Reveal>

            <div className="mt-5">
              {CONTACT_ITEMS.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <>
                    {/* ICON */}
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-[#0B2A4A]">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h6 className="font-heading text-lg font-semibold text-white">
                        {item.label}
                      </h6>

                      <p
                        className={`mt-1 text-sm leading-6 ${
                          item.href ? "text-[#3b82f6]" : "text-white/70"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <Reveal key={`${item.label}-${index}`} delay={index * 0.05}>
                    <div
                      className={`flex gap-4 border-b border-dashed border-white/20 py-4 ${
                        index === 0 ? "pt-0" : ""
                      }`}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.label === "Address" ||
                            item.label === "Web Address" ||
                            item.label === "Web Page"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.label === "Address" ||
                            item.label === "Web Address" ||
                            item.label === "Web Page"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex min-w-0 gap-4"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              RIGHT â€” CONTACT FORM
          =================================================== */}
          <div className="bg-white px-7 py-8 md:px-10 md:py-10 lg:px-12">
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="space-y-4"
            >
              {/* =================================================
                  NAME
              ================================================= */}
              <label className="block">
                <span className="mb-2 block font-heading text-base text-[#0B2A4A]">
                  Your Name <span className="text-red-500">*</span>
                </span>

                <input
                  data-testid="contact-name"
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your Name"
                  required
                  className={inputCls}
                />
              </label>

              {/* =================================================
                  EMAIL
              ================================================= */}
              <label className="block">
                <span className="mb-2 block font-heading text-base text-[#0B2A4A]">
                  Email <span className="text-red-500">*</span>
                </span>

                <input
                  data-testid="contact-email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Email"
                  required
                  className={inputCls}
                />
              </label>

              {/* =================================================
                  COUNTRY
              ================================================= */}
              <label className="block">
                <span className="mb-2 block font-heading text-base text-[#0B2A4A]">
                  Select Country <span className="text-red-500">*</span>
                </span>

                <select
                  data-testid="contact-country"
                  value={form.country}
                  onChange={set("country")}
                  required
                  className={inputCls}
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                </select>
              </label>

              {/* =================================================
                  PHONE
              ================================================= */}
              <label className="block">
                <span className="mb-2 block font-heading text-base text-[#0B2A4A]">
                  Phone / Mobile <span className="text-red-500">*</span>
                </span>

                <div className="flex gap-1">
                  <div className="flex h-11.5 w-16 shrink-0 items-center justify-center border border-[#0B2A4A]/15 bg-[#d9e2ef] text-sm text-[#0B2A4A]/60">
                    +91
                  </div>

                  <input
                    data-testid="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="Phone / Mobile"
                    required
                    className={`${inputCls} flex-1`}
                  />
                </div>
              </label>

              {/* =================================================
                  INTEREST
              ================================================= */}
              <label className="block">
                <span className="mb-2 block font-heading text-base text-[#0B2A4A]">
                  I want to
                </span>

                <select
                  data-testid="contact-interest"
                  value={form.interest}
                  onChange={set("interest")}
                  className={inputCls}
                >
                  <option value="Buy a Home">Buy a Home</option>

                  <option value="Rent a Home">Rent a Home</option>

                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}

                  <option value="Other">Other</option>
                </select>
              </label>

              {/* =================================================
                  ENQUIRY DETAILS
              ================================================= */}
              <label className="block">
                <span className="mb-2 block font-heading text-base text-[#0B2A4A]">
                  Enquiry Details <span className="text-red-500">*</span>
                </span>

                <textarea
                  data-testid="contact-message"
                  value={form.message}
                  onChange={set("message")}
                  rows={5}
                  placeholder="Your Requirement"
                  required
                  className={`${inputCls} resize-none`}
                />
              </label>

              {/* =================================================
                  BUTTONS
              ================================================= */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  data-testid="contact-submit"
                  disabled={sending}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-7 font-heading text-sm font-semibold text-[#0B2A4A] transition-colors duration-300 hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Submit"}

                  {!sending && <Send className="h-4 w-4" />}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  disabled={sending}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B2A4A]/15 px-7 font-heading text-sm font-semibold text-[#0B2A4A] transition-colors duration-300 hover:bg-[#d9e2ef] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
