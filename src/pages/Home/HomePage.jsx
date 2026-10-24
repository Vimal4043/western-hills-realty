import Hero from './Hero.jsx'
import FeaturedProjects from './FeaturedProjects.jsx'
import Form from './Form.jsx'
import AboutUs from './AboutUs.jsx'
import ContactInfo from './ContactInfo.jsx'
import Locations from '../../components/Locations.jsx'
import Services from '../../components/Services.jsx'
import VisionMissionValues from './VisionMissionValues.jsx'
import Benefits from './Benefits.jsx'
import Testimonials from '../../components/Testimonials.jsx'

export default function HomePage() {
  return (
    <>
      <main className="pt-[76px] md:pt-[112px]">
        <Hero />
        <FeaturedProjects />
        <Locations />
        <AboutUs />
        <Services />
        <VisionMissionValues />
        <Benefits />
        <Testimonials />
        <Form />
        <ContactInfo />
      </main>
    </>
  )
}
