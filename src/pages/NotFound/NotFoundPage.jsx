import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-[#3b82f6] sm:text-6xl md:text-7xl">
          404
        </h2>

        <h2 className="mt-5 mb-5 font-heading text-3xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-5xl">
          Page not found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#667085] sm:text-lg">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to our projects.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 rounded-full bg-[#0B2A4A] px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#3b82f6]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back Home
          </Link>

          {/* <Link
            to="/projects"
            className="group flex items-center justify-center gap-2 rounded-full border border-[#0B2A4A]/20 px-7 py-3.5 font-semibold text-[#0B2A4A] transition-colors duration-300 hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link> */}
        </div>
      </motion.div>
    </section>
  )
}
