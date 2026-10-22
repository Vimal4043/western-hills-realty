import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { FORM_ENDPOINT, assertDelivered } from "../../lib/formsubmit.js";
import { PROJECT_TYPES, LOCATIONS, BUDGETS } from "../../data/projects.js";

const ENQUIRY_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // HTTP 200 is not enough: FormSubmit reports un-activated inboxes and
      // rejected submissions inside the JSON body, so verify before telling
      // the visitor their enquiry was received.
      await assertDelivered(response);

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquiry"
      data-testid="inquiry-section"
      className="scroll-mt-12 bg-white py-12 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION INTRO
            ===================================================== */}
        <div className="mb-8 text-center md:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            Get In Touch
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-forest md:text-4xl">
            Find Your <span className="text-gold">Dream Home</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-forest/60 md:text-base">
            Tell us what you're looking for and our team will help you find the
            right project.
          </p>
        </div>

        {/* =====================================================
            MAIN ENQUIRY CARD
            ===================================================== */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_45px_rgba(11,42,74,0.08)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* =================================================
                LEFT IMAGE
                ================================================= */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative min-h-90 overflow-hidden sm:min-h-110 lg:min-h-162.5"
            >
              <img
                src={ENQUIRY_IMAGE}
                alt="Modern residential property"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Theme overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-forest/90 via-forest/25 to-transparent" />

              {/* Left image content */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  WESTERN HILLS REALTY
                </p>

                <h3 className="mt-3 max-w-md font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  Let's find a place you'll love to call home.
                </h3>

                <div className="mt-4 h-0.5 w-16 bg-gold" />

                <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
                  Share your requirements with us and our team will help you
                  explore suitable homes, shops and offices in Lonavala and
                  nearby hill-station locations.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT FORM
                ================================================= */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white p-6 sm:p-8 md:p-10 lg:p-12"
            >
              {submitted ? (
                <div className="flex min-h-130 flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-gold" />

                  <h3 className="mt-6 font-heading text-2xl font-extrabold text-forest md:text-3xl">
                    Thank you for your enquiry.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-forest/60 md:text-base">
                    We've received your details and will get back to you shortly
                    to help you find the right home.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest transition-colors duration-300 hover:bg-gold-dark"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  {/* Form heading */}
                  <div className="mb-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                      Quick Enquiry
                    </p>

                    <h3 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-forest md:text-4xl">
                      Tell us what you need.
                    </h3>

                    <div className="mt-3 h-0.5 w-16 bg-gold" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* FormSubmit */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Residential Project Enquiry"
                    />

                    <input type="hidden" name="_captcha" value="false" />

                    <input type="hidden" name="_template" value="table" />

                    {/* =========================================
                        NAME + EMAIL
                        ========================================= */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        aria-label="Name"
                        className="w-full rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest outline-none transition-all placeholder:text-forest/40 focus:border-gold focus:ring-2 focus:ring-gold/10"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        aria-label="Email"
                        className="w-full rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest outline-none transition-all placeholder:text-forest/40 focus:border-gold focus:ring-2 focus:ring-gold/10"
                      />
                    </div>

                    {/* =========================================
                        PHONE + HOME TYPE
                        ========================================= */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        aria-label="Phone"
                        className="w-full rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest outline-none transition-all placeholder:text-forest/40 focus:border-gold focus:ring-2 focus:ring-gold/10"
                      />

                      <select
                        id="requirement"
                        name="requirement"
                        required
                        defaultValue=""
                        aria-label="Project type"
                        className="w-full appearance-none rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/10"
                      >
                        <option value="" disabled>
                          Select Home Type
                        </option>

                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}

                        <option value="Any">Any Home Type</option>
                      </select>
                    </div>

                    {/* =========================================
                        LOCATION + BUDGET
                        ========================================= */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <select
                        id="location"
                        name="location"
                        required
                        defaultValue=""
                        aria-label="Preferred location"
                        className="w-full appearance-none rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/10"
                      >
                        <option value="" disabled>
                          Preferred Location
                        </option>

                        {LOCATIONS.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}

                        <option value="Any">Any Location</option>
                      </select>

                      <select
                        id="budget"
                        name="budget"
                        required
                        defaultValue=""
                        aria-label="Budget"
                        className="w-full appearance-none rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/10"
                      >
                        <option value="" disabled>
                          Select Budget
                        </option>

                        {BUDGETS.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* =========================================
                        COUNTRY
                        ========================================= */}
                    <select
                      id="country"
                      name="country"
                      required
                      defaultValue=""
                      aria-label="Country"
                      className="w-full appearance-none rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest/60 outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/10"
                    >
                      <option value="" disabled>
                        Select Country
                      </option>

                      <option value="India">India</option>

                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>

                      <option value="United States">United States</option>

                      <option value="United Kingdom">United Kingdom</option>

                      <option value="Other">Other</option>
                    </select>

                    {/* =========================================
                        MESSAGE
                        ========================================= */}
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your requirements"
                      aria-label="Additional details"
                      className="w-full resize-none rounded-none border border-forest/15 bg-white px-4 py-3.5 text-sm text-forest outline-none transition-all placeholder:text-forest/40 focus:border-gold focus:ring-2 focus:ring-gold/10"
                    />

                    {/* =========================================
                        SUBMIT
                        ========================================= */}
                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <span>{loading ? "Sending..." : "Send Enquiry"}</span>

                        {!loading && (
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
