import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import CatalogueGrid from '@/components/CatalogueGrid'
import ExpertiseSection from '@/components/ExpertiseSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        <SocialProofSection />
        <CatalogueGrid />
        <ExpertiseSection />
        <TestimonialSlider />
        <AboutSection />
        <ContactSection />
      </div>
    </PageTransition>
  )
}
