import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PROJECTS, PROPERTIES } from '../../data/projects.js'
import ProjectGallery from './sections/ProjectGallery.jsx'
import ProjectOverview from './sections/ProjectOverview.jsx'
import ProjectSpecifications from './sections/ProjectSpecifications.jsx'
import ProjectDescription from './sections/ProjectDescription.jsx'
import ProjectFeatures from './sections/ProjectFeatures.jsx'
import ProjectSuitableFor from './sections/ProjectSuitableFor.jsx'
import ProjectLocation from './sections/ProjectLocation.jsx'
import ProjectEnquiry from './sections/ProjectEnquiry.jsx'
import SimilarProjects from './sections/SimilarProjects.jsx'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.id === id)
  const projectUnits = PROPERTIES.filter((p) => p.projectId === id)

  if (!project) {
    return (
      <>
        <div className="bg-[#eaf2f8] px-5 pt-[76px] pb-8 text-center md:px-10 md:pt-[112px] md:pb-12">
          <h1 className="font-heading text-3xl font-extrabold text-[#0B2A4A] md:text-5xl">Project not found</h1>
          <p className="mt-4 text-base text-[#667085] md:text-lg">
            The project you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#3b82f6] hover:text-[#0B2A4A]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        <ProjectGallery project={project} />
        <ProjectOverview project={project} />
        <ProjectSpecifications project={project} />
        <ProjectDescription project={project} />
        <ProjectFeatures project={project} />
        <ProjectSuitableFor project={project} />
        <ProjectLocation project={project} />
        {/* <ProjectMedia project={project} /> */}
        <ProjectEnquiry project={project} />

        {/* Available units in this project */}
        <section className="scroll-mt-12 bg-[#d9e2ef] px-5 py-8 md:px-10 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#071E35]">
                  Available Properties
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-[#0B2A4A] md:text-3xl">
                  Units in {project.title}
                </h3>
              </div>
              <p className="text-sm text-[#667085]">
                {projectUnits.length} unit{projectUnits.length !== 1 ? 's' : ''} available
              </p>
            </div>
            {projectUnits.length === 0 ? (
              <p className="text-sm text-[#667085]">No units currently listed for this project.</p>
            ) : (
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projectUnits.map((unit) => (
                  <Link
                    key={unit.id}
                    to={`/properties/${unit.id}`}
                    className="block rounded-2xl border border-[#c7d7ea] bg-white p-5 text-left transition-colors duration-300 hover:border-[#3b82f6]"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#667085]">
                      {unit.location}
                    </p>
                    <h4 className="mt-1 font-heading text-lg font-bold text-[#0B2A4A]">
                      {unit.unitNumber}
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#071E35]">
                      {unit.type}
                    </p>
                    <p className="mt-2 text-sm text-[#667085]">
                      {unit.price}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#3b82f6] hover:text-[#0B2A4A]">
                      View unit
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <SimilarProjects currentId={project.id} />
      </main>
    </>
  )
}
