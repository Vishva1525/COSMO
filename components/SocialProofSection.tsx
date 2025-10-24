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
      {/* Debug: Temporary visible element */}
      <div className="text-center py-4 bg-red-500 text-white">
        SOCIAL PROOF SECTION IS WORKING!
      </div>
      
      {/* Social Proof Pills */}
      <div className="relative z-20 flex justify-center flex-wrap gap-6 py-8 px-4">
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
            className="flex items-center gap-2 backdrop-blur-md bg-black/20 text-white border border-white/30 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
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
