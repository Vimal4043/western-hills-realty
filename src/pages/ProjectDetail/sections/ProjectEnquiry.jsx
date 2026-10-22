import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "../../../components/Reveal.jsx";
import { ArrowUpRight, Phone } from "lucide-react";
import { sendForm } from "../../../lib/formsubmit.js";

const inputCls =
  "w-full rounded-xl border border-[#c7d7ea] bg-white px-4 py-3.5 text-sm text-[#17202A] outline-none transition-colors duration-300 placeholder:text-[#888888] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20";

export default function ProjectEnquiry({ project }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
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
      phone: "",
      requirement: "",
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await sendForm(
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          project: project.title,
          location: [project.location, project.city].filter(Boolean).join(", "),
          type: project.type,
          price: project.price,
          requirement: form.requirement,
        },
        `Western Hills Realty enquiry: ${project.title}`,
      );

      toast.success(
        `Thank you. Our team will contact you shortly about ${project.title}.`,
      );

      resetForm();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      data-testid="project-enquiry"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-[#c7d7ea] bg-[#d9e2ef]">
            <div className="bg-[#0B2A4A] px-6 py-8 text-white md:px-10 md:py-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b82f6]">
                Interested in this home?
              </p>

              <h3 className="mt-3 font-heading text-3xl font-extrabold md:text-4xl">
                Enquire About {project.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
                Share your details and our team will contact you with pricing,
                availability and site visit information.
              </p>
            </div>

            <form
              onSubmit={submit}
              data-testid="project-enquiry-form"
              className="p-6 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#0B2A4A]">
                    Full Name
                  </span>

                  <input
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Enter your full name"
                    required
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#0B2A4A]">
                    Phone Number
                  </span>

                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="Enter your phone number"
                    required
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#0B2A4A]">
                    Email Address
                  </span>

                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="Enter your email"
                    required
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#0B2A4A]">
                    Project
                  </span>

                  <input
                    type="text"
                    value={project.title}
                    readOnly
                    className={`${inputCls} bg-[#d9e2ef]`}
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-semibold text-[#0B2A4A]">
                  Your Requirement
                </span>

                <textarea
                  value={form.requirement}
                  onChange={set("requirement")}
                  rows={4}
                  placeholder="Tell us about your requirement, preferred budget, or anything you'd like to know..."
                  required
                  className={`${inputCls} resize-none`}
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-8 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-navy disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {sending ? "Sending..." : "Send Enquiry"}

                  {!sending && (
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>

                {project.contact?.[0] && (
                  <a
                    href={`tel:${project.contact[0].replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B2A4A] px-8 py-3.5 text-sm font-bold text-[#0B2A4A] transition hover:bg-[#0B2A4A] hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                )}
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
