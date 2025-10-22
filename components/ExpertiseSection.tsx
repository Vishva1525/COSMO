'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ExpertiseSection() {
  const [counts, setCounts] = useState({ years: 0, gallery: 0, projects: 0 })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const expertiseData = useMemo(() => [
    {
      number: 33,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Three decades of craftsmanship and innovation'
    },
    {
      number: 16000,
      suffix: ' sq.m',
      label: 'Gallery Size',
      description: 'India&apos;s largest luxury stone showcase'
    },
    {
      number: 5000,
      suffix: '+',
      label: 'Client Projects',
      description: 'Transforming spaces across India'
    }
  ], [])

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      expertiseData.forEach((item, index) => {
        let current = 0
        const increment = item.number / steps
        const timer = setInterval(() => {
          current += increment
          if (current >= item.number) {
            current = item.number
            clearInterval(timer)
          }
          setCounts(prev => ({
            ...prev,
            [index === 0 ? 'years' : index === 1 ? 'gallery' : 'projects']: Math.floor(current)
          }))
        }, stepDuration)
      })
    }
  }, [isInView, expertiseData])

  return (
    <section className="py-24 bg-gradient-to-b from-cosmo-cream to-white relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg-subtle"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-dark font-semibold mb-6">
            Our Expertise
          </h2>
          <p className="text-lg text-cosmo-gray font-body max-w-3xl mx-auto leading-relaxed">
            Three decades of excellence, innovation, and unwavering commitment to transforming 
            spaces with the world's finest materials.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt">
                {/* Ambient Lighting Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/10 group-hover:to-white/20 transition-all duration-500 rounded-2xl"></div>
                
                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <motion.div
                    className="text-4xl md:text-5xl font-heading text-accent-cosmo-red font-bold mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {index === 0 && counts.years}
                    {index === 1 && counts.gallery.toLocaleString()}
                    {index === 2 && counts.projects.toLocaleString()}
                    <span className="text-2xl md:text-3xl">{item.suffix}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-heading text-dark font-semibold mb-3">
                    {item.label}
                  </h3>
                  
                  <p className="text-cosmo-gray font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-heading text-dark italic leading-relaxed max-w-4xl mx-auto">
            &ldquo;Excellence is not a destination, it&apos;s a journey of continuous refinement and passion for perfection.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-lg text-cosmo-gray font-body">
            — Cosmo Granites Legacy
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
