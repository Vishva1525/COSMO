'use client'

import { motion } from 'framer-motion'
import { Award, Building2, CheckCircle2 } from 'lucide-react'

export default function SocialProofSection() {
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

  return (
    <section className="relative py-16 bg-gradient-to-b from-transparent to-cosmo-cream">
      {/* Background Video Continuation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay-hero z-10"></div>

      {/* Social Proof Pills */}
      <div className="relative z-20 flex justify-center flex-wrap gap-6 mt-12 px-4">
        {socialProofItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut", 
              delay: 0.1 + (index * 0.1) 
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 backdrop-blur-md bg-white/10 text-white border border-white/20 rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            <span className="font-medium text-sm md:text-base whitespace-nowrap">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
