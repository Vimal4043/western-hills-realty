import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, Overline } from './Reveal.jsx'
import { CITIES } from '../data/projects.js'

export default function Locations() {
  return (
    <section
      data-testid="locations-section"
      className="border-y border-[#c7d7ea] bg-[#d9e2ef] py-12 md:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <Overline>Where we work</Overline>
          <h2 className="mt-6 max-w-5xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
            Neighbourhoods worth knowing.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/properties?location=${encodeURIComponent(c.filter)}`}
                data-testid={`location-${c.name.toLowerCase().replace(/\s/g, '-')}`}
                className="group relative block aspect-4/5 overflow-hidden rounded-3xl ring-1 ring-[#0B2A4A]/10"
              >
                <img
                  src={c.image}
                  alt={`${c.name} residences`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                  <div>
                    <h3 className="font-heading text-xl font-extrabold tracking-tight">{c.name}</h3>
                    <p className="mt-1 text-xs text-white/70">
                      {c.count} {c.count === 1 ? 'listing' : 'listings'}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors duration-300 group-hover:bg-[#3b82f6] group-hover:text-[#0B2A4A]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
