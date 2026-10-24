import { motion } from 'framer-motion'
import { Shield, Clock, Award } from 'lucide-react'

const BENEFITS = [
  {
    icon: Shield,
    title: 'Verified & clear title',
    body: 'We share clear project, pricing and approval information so you can explore homes with confidence.',
  },
  {
    icon: Clock,
    title: 'Efficient process',
    body: 'From shortlisting and site visits to documentation, we help make every stage of your home search easier.',
  },
  {
    icon: Award,
    title: 'Right home, right location',
    body: 'Find residential options that match your preferred home type, budget and location in Lonavala and nearby hill-station areas.',
  },
]

export default function Benefits() {
  return (
    <section data-testid="benefits-section" className="scroll-mt-24 bg-[#d9e2ef] py-8 text-[#0B2A4A] md:py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="max-w-5xl font-heading text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
          Why Choose Western Hills Realty
        </h2>
        <p className="mt-4 max-w-5xl text-base leading-relaxed text-[#0B2A4A]/60 md:text-lg">
          A homebuying service built on clear information, local knowledge and helpful support.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#3b82f6] text-[#0B2A4A]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-xl font-bold">{b.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#667085]">{b.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
