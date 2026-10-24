import { Reveal, Overline } from './Reveal.jsx'
import { BRAND, PROPERTIES, CITIES } from '../data/projects.js'

const CHAPTERS = [
  {
    n: '01',
    title: 'A smaller portfolio',
    body: 'We represent a strictly limited number of projects at any one time, so every home gets the attention it deserves.',
  },
  {
    n: '02',
    title: 'Unpublished listings',
    body: 'A number of the properties we handle are never listed on public portals, so it is always worth asking us what is currently available.',
  },
  {
    n: '03',
    title: 'Total discretion',
    body: 'From first viewing to final signature, your privacy is protected at every stage.',
  },
]

/* The figures are derived from the published inventory so they can never
   drift away from the listings we actually offer. */
const STATS = [
  { v: String(PROPERTIES.length), l: 'Live listings in Lonavala' },
  { v: String(CITIES.length), l: 'Localities we serve' },
  { v: '100%', l: 'Direct owner contact' },
]

export default function Manifesto() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="scroll-mt-24 bg-[#d9e2ef] py-8 md:py-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Overline>Our philosophy</Overline>
            <h2 className="mt-6 max-w-md font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-5xl">
              A home is the longest relationship you&apos;ll ever choose.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[#667085] md:text-lg">
              {BRAND.name} was founded on a simple belief â€” that finding where you live should
              feel less like a transaction and more like being understood.
            </p>
          </Reveal>
        </div>

        <div>
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05}>
              <div className="flex gap-8 border-t border-black/6 py-8 first:border-t-0 md:py-9">
                <span className="font-heading text-sm font-extrabold text-[#071E35]">{c.n}</span>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#0B2A4A] md:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#667085] md:text-base">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-black/6 pt-10 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.05}>
                <p className="font-heading text-4xl font-extrabold tracking-tight text-[#0B2A4A] md:text-5xl">
                  {s.v}
                </p>
                <p className="mt-2 text-sm text-[#667085]">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
