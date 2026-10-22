import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import SearchBar from './SearchBar.jsx'

const HERO_IMG =
  'https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?w=1800&auto=compress'
const LINES = ['Where architecture', 'becomes a way', 'of living.']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.25 },
  },
}

const lineVar = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-25 flex min-h-svh items-center justify-center overflow-hidden"
    >
      <motion.img
        src={HERO_IMG}
        alt="Luxury residence at dusk"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#071E35]/80 via-[#0B2A4A]/55 to-[#0B2A4A]/30" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative z-10 flex flex-col items-center px-5 text-center text-white">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-heading text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {LINES.map((line, i) => (
            <motion.span key={line} variants={lineVar} className="block">
              {i === 2 ? <em className="text-[#3b82f6]">{line}</em> : line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          A curated portfolio of the most extraordinary residences â€” sourced, vetted and
          represented with the discretion your next home deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SearchBar variant="hero" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-floaty" />
      </motion.div>
    </section>
  )
}