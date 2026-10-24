import { Reveal } from '../../components/Reveal.jsx'
import { Link } from 'react-router-dom'

export default function ProjectsCTA() {
  return (
    <section data-testid="projects-cta" className="scroll-mt-12 bg-gradient-to-r from-navy via-[#0B2A4A] to-royal px-5 py-8 text-white md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Need a space that fits your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Tell us your requirement — area, type, power and location — and our advisors will
            shortlist the right projects and arrange site visits.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              Enquire about a project
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#0B2A4A]"
            >
              Browse Properties
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}