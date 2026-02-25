import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SolutionsCarousel from './components/sections/SolutionsCarousel'
import PartnersSection from './components/sections/PartnersSection'
import SegmentsSection from './components/sections/SegmentsSection'
import BrandSection from './components/sections/BrandSection'
import ServicesGrid from './components/sections/ServicesGrid'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '89px' }}>
        <HeroSection />
        <AboutSection />
        <SolutionsCarousel />
        <PartnersSection />
        <SegmentsSection />
        <BrandSection />
        <ServicesGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
