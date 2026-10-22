import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal, Overline } from './Reveal.jsx'

const AGENT =
  'https://images.pexels.com/photos/8292786/pexels-photo-8292786.jpeg?w=900&auto=compress'

const REVIEWS = [
  {
    quote:
      "Western Hills Realty understood what we wanted before we could articulate it. They showed us three homes in Lonavala â€” and the second was the one we have loved ever since.",
    name: 'Margaret Chen',
    role: 'Bought in Lonavala',
  },
  {
    quote:
      'Discreet, patient and remarkably well-connected. They showed us a hillside residence that was never publicly listed. That access made all the difference.',
    name: 'Jonathan Wells',
    role: 'Bought in Khandala',
  },
  {
    quote:
      'They sold our shop in eleven days, above asking, with a marketing package that genuinely made our space look the part.',
    name: 'Priya Anand',
    role: 'Sold in Malavli',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const r = REVIEWS[i]
  const go = (d) => setI((p) => (p + d + REVIEWS.length) % REVIEWS.length)

  return (
    <section
      data-testid="testimonials-section"
      className="relative overflow-hidden bg-gradient-to-br from-[#071E35] via-[#0B2A4A] to-[#174EA6] px-5 py-8 text-[#eaf2f8] md:px-10 md:py-12"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-350 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img src={AGENT} alt="Senior advisor" className="aspect-4/5 w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#3b82f6] px-7 py-5 text-[#0B2A4A] md:right-6">
            <p className="font-heading text-3xl font-extrabold tracking-tight">4.98</p>
            <p className="text-xs font-semibold uppercase tracking-wider">Avg. client rating</p>
          </div>
        </Reveal>

        <div>
          <Overline light>Client stories</Overline>
          <Quote className="mt-8 h-12 w-12 text-[#3b82f6]" />
          <div className="mt-6 min-h-55 md:min-h-50">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-2xl font-bold leading-snug tracking-tight md:text-3xl"
              >
                &ldquo;{r.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-base font-semibold">{r.name}</p>
              <p className="mt-1 text-sm text-white/50">{r.role}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:bg-white hover:text-[#0B2A4A]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:bg-white hover:text-[#0B2A4A]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}