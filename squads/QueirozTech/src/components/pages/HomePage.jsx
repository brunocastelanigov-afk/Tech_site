import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SolutionsCarousel from '../sections/SolutionsCarousel'
import PartnersSection from '../sections/PartnersSection'
import SegmentsSection from '../sections/SegmentsSection'
import BrandSection from '../sections/BrandSection'
import ServicesGrid from '../sections/ServicesGrid'
import ContactSection from '../sections/ContactSection'

function HomePage() {
    return (
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
    )
}

export default HomePage
