'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  project: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Architect',
    company: 'Design Studio Mumbai',
    content: 'Working with Cosmo Granites has been exceptional. Their material quality and installation expertise transformed our luxury residential project. The Botticino marble they supplied exceeded our expectations.',
    project: 'Luxury Villa, Bandra West'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    company: 'Elegant Spaces',
    content: 'The team at Cosmo understands design vision. Their Carrara White marble selection and precision installation brought our client\'s dream kitchen to life. Professional service from start to finish.',
    project: 'Penthouse Kitchen, Gurgaon'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Project Manager',
    company: 'Commercial Builders Ltd',
    content: 'For our corporate headquarters project, Cosmo delivered on time and within budget. Their Absolute Black granite flooring creates a sophisticated, professional atmosphere that impresses our clients.',
    project: 'Corporate Headquarters, Delhi'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Homeowner',
    company: 'Private Residence',
    content: 'From consultation to completion, Cosmo made our home renovation seamless. Their engineered oak flooring is beautiful and practical. The team\'s attention to detail and customer service is outstanding.',
    project: 'Family Home, Bangalore'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Developer',
    company: 'Premium Properties',
    content: 'Cosmo\'s Fletcher aluminum systems elevated our high-rise project. The thermal efficiency and modern aesthetics exceeded our specifications. Their technical expertise and project management are top-notch.',
    project: 'High-Rise Residential, Chennai'
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cosmo-cream relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg-subtle"></div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-dark font-semibold mb-6">
            Client Stories
          </h2>
          <p className="text-lg text-cosmo-gray font-body max-w-3xl mx-auto leading-relaxed">
            Hear from architects, designers, and homeowners who have transformed their spaces with Cosmo&apos;s premium materials.
          </p>
        </motion.div>

        {/* Testimonial Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Ambient Lighting Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/10"></div>
              
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mb-6"
                >
                  <Quote size={48} className="text-accent-cosmo-red/20" />
                </motion.div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl font-heading text-dark leading-relaxed mb-8 italic">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-heading text-dark font-semibold">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-cosmo-gray font-body">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                    <p className="text-sm text-accent-cosmo-red font-body font-medium mt-1">
                      {currentTestimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-cosmo-red scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-cosmo-gray font-body mb-6">
            Ready to create your own success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent-cosmo-red text-white font-body font-semibold rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
