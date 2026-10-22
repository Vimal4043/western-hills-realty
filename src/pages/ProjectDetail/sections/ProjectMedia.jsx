import { Reveal } from '../../../components/Reveal.jsx'

export default function ProjectMedia({ project }) {
  const videos = project.videos || []
  if (videos.length === 0) return null

  return (
    <section data-testid="project-media" className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] md:text-4xl">
            Videos
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-black/6">
                <video
                  src={v}
                  controls
                  preload="metadata"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}