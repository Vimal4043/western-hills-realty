import { useState } from 'react'
import { toast } from 'sonner'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import { Reveal, Overline } from './Reveal.jsx'
import { BRAND } from '../data/projects.js'

const inputCls =
  'w-full rounded-xl border border-[#c7d7ea] bg-[#d9e2ef] px-4 py-3.5 text-[#17202A] outline-none transition-colors duration-300 placeholder:text-[#667085] focus:border-[#071E35] focus:ring-2 focus:ring-[#071E35]/20'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying',
    message: '',
  })

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    toast.success("Thanks â€” we'll be in touch within one business day.")
    setForm({ name: '', email: '', phone: '', interest: 'Buying', message: '' })
  }

  const infos = [
    { icon: Phone, label: 'Call us', value: BRAND.phone },
    { icon: Mail, label: 'Email', value: BRAND.email },
    { icon: MapPin, label: 'Studio', value: BRAND.address },
  ]

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="scroll-mt-24 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto grid max-w-350 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <Reveal>
            <Overline>Get in touch</Overline>
            <h2 className="mt-6 max-w-md font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
              Let&apos;s talk about your next address.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[#667085] md:text-lg">
              Share a little about what you&apos;re looking for. A senior advisor will respond
              within one business day &mdash; no automated funnels, no pressure.
            </p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {infos.map((c) => {
              const Icon = c.icon
              return (
                <Reveal key={c.label} delay={0.05}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d9e2ef] text-[#0B2A4A]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#071E35]">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#0B2A4A]">{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        <form
          onSubmit={submit}
          data-testid="contact-form"
          className="flex flex-col rounded-3xl border border-black/6 bg-[#d9e2ef] p-6 md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0B2A4A]">Full name</span>
              <input
                data-testid="contact-name"
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Jane Doe"
                required
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0B2A4A]">Email</span>
              <input
                data-testid="contact-email"
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="jane@email.com"
                required
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0B2A4A]">Phone</span>
              <input
                data-testid="contact-phone"
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="+1 (___) ___-____"
                className={inputCls}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#0B2A4A]">
                I&apos;m interested in
              </span>
              <select
                data-testid="contact-interest"
                value={form.interest}
                onChange={set('interest')}
                className={inputCls}
              >
                <option>Buying</option>
                <option>Selling</option>
                <option>Investing</option>
                <option>Just exploring</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-[#0B2A4A]">Message</span>
            <textarea
              data-testid="contact-message"
              value={form.message}
              onChange={set('message')}
              rows={4}
              placeholder="Tell us about your ideal homeâ€¦"
              className={`${inputCls} resize-none`}
            />
          </label>

          <button
            type="submit"
            data-testid="contact-submit"
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-royal px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy hover:-translate-y-0.5 sm:w-auto"
          >
            Send enquiry
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>
    </section>
  )
}