import { motion } from 'framer-motion'
import { House, KeyRound, Building2 } from 'lucide-react'
import { Reveal, Overline } from './Reveal.jsx'

const SERVICES = [
  {
    icon: House,
    title: 'Buy a residence',
    body: 'Discover architect-led homes matched to how you actually live, with an advisor beside you from first viewing to keys.',
  },
  {
    icon: KeyRound,
    title: 'Sell with intent',
    body: 'Considered staging, editorial photography and a private buyer network that positions your home for its true worth.',
  },
  {
    icon: Building2,
    title: 'Invest & advise',
    body: 'Data-led guidance on emerging neighbourhoods and yields, so every acquisition strengthens your portfolio.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="scroll-mt-24 bg-[#eaf2f8] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>What we do</Overline>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Full-service, start to signature.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                data-testid={`service-card-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#3b82f6]/30 bg-white p-8 shadow-[0_2px_10px_rgba(11,42,74,0.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#0B2A4A] hover:shadow-[0_24px_60px_rgba(11,42,74,0.3)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-royal text-white transition-colors duration-500 group-hover:bg-[#3b82f6] group-hover:text-[#071E35]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-heading text-xl font-bold text-[#0B2A4A] transition-colors duration-500 group-hover:text-[#eaf2f8]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#667085] transition-colors duration-500 group-hover:text-[#eaf2f8]/70">
                  {s.body}
                </p>
                <div className="mt-6 h-px w-12 bg-gradient-to-r from-[#3b82f6] to-transparent" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}