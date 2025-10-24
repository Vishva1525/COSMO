'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import CatalogueGrid from '@/components/CatalogueGrid'
import ExpertiseSection from '@/components/ExpertiseSection'
import TestimonialSlider from '@/components/TestimonialSlider'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import PageTransition from '@/components/PageTransition'
import ProductRangeModal from '@/components/ProductRangeModal'

export default function Home() {
  const [showProductModal, setShowProductModal] = useState(false)

  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        <CatalogueGrid onViewAllProducts={() => setShowProductModal(true)} />
        <ExpertiseSection />
        <TestimonialSlider />
        <AboutSection />
        <ContactSection />
        
        {/* Product Range Modal */}
        <ProductRangeModal 
          isOpen={showProductModal} 
          onClose={() => setShowProductModal(false)} 
        />
      </div>
    </PageTransition>
  )
}
