import AboutIntroduction from './AboutIntroduction.jsx'
import AboutStory from './AboutStory.jsx'
import AboutProjects from './AboutProjects.jsx'
import AboutValues from './AboutValues.jsx'
import AboutCTA from './AboutCTA.jsx'

export default function AboutPage() {
  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        <AboutIntroduction />
        <AboutStory />
        <AboutProjects />
        <AboutValues />
        <AboutCTA />
      </main>
    </>
  )
}
