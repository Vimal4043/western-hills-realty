import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PROJECTS } from '../../data/projects.js'
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
        <SimilarProjects currentId={project.id} />
      </main>
    </>
  )
}
