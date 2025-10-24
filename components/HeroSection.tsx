'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Building2, CheckCircle2 } from 'lucide-react'

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const { scrollY } = useScroll()
  
  // Parallax effect for video background
  const y = useTransform(scrollY, [0, 500], [0, -50])

  const socialProofItems = [
    {
      icon: Award,
      text: "25 Years of Expertise in Natural Stone",
      iconColor: "text-yellow-400"
    },
    {
      icon: Building2,
      text: "Tamil Nadu's Largest Display Gallery Spanning 4 Acres",
      iconColor: "text-blue-400"
    },
    {
      icon: CheckCircle2,
      text: "Each Slab Undergoes a Stringent Quality Check",
      iconColor: "text-green-400"
    }
  ]

  useEffect(() => {
    // Simulate video load for animation timing
    const timer = setTimeout(() => setVideoLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-hidden pt-16">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay-hero z-20"></div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-10 z-30"></div>

      {/* Social Proof Pills - Above Everything */}
      <div className="absolute top-28 left-0 right-0 z-40 px-4">
        <div className="flex justify-center flex-wrap gap-3 max-w-7xl mx-auto">
          {socialProofItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.2 + (index * 0.1) 
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <item.icon className={`w-4 h-4 flex-shrink-0 ${item.iconColor}`} />
              <span className="font-medium text-xs whitespace-nowrap">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content with Framer Motion */}
      <div className="relative z-40 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-lg whitespace-nowrap"
        >
          Crafted by Nature. Perfected by Cosmo.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl font-body max-w-3xl mb-8 drop-shadow-md text-gray-200"
        >
          India&apos;s largest luxury stone gallery, offering exquisite marble, granite, wood flooring, and architectural solutions since 1992.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Track CTA click
              if (typeof window !== 'undefined' && window.trackCTA) {
                window.trackCTA('explore_collections')
              }
              const element = document.getElementById('collections')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 bg-accent-cosmo-red text-white font-body font-semibold rounded-full hover:bg-red-800 transition-all duration-300 shadow-lg"
          >
            Explore Collections
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Track CTA click
              if (typeof window !== 'undefined' && window.trackCTA) {
                window.trackCTA('book_visit')
              }
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-dark font-body font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            Book a Visit
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}