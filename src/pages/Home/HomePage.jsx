import Hero from './Hero.jsx'
import FeaturedProjects from './FeaturedProjects.jsx'
import Form from './Form.jsx'
import AboutUs from './AboutUs.jsx'
import ContactInfo from './ContactInfo.jsx'
import Locations from '../../components/Locations.jsx'

export default function HomePage() {
  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        <Hero />
        <FeaturedProjects />
        {/* <Locations /> */}
        <AboutUs />
        <Form />
        {/* <Services /> */}
        {/* <VisionMissionValues /> */}
        {/* <Benefits /> */}
        {/* <TopProjects /> */}
        {/* <Testimonials /> */}
        <ContactInfo />
      </main>
    </>
  )
}
