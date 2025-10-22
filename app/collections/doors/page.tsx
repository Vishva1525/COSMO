'use client'

import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";

export default function DoorsCollection() {
  const brands = [
    {
      id: "fletcher-windows",
      name: "Fletcher Windows",
      description: "Precision-engineered aluminum fenestration systems for high-rise façades, villas, and commercial spaces.",
      coverImage: "/assets/doors/fletcher-windows.png",
      href: "/collections/doors/fletcher-windows"
    },
    {
      id: "aluk",
      name: "AluK Doors & Windows",
      description: "European minimalism meets Indian craftsmanship. Exceptional energy efficiency and slim-profile elegance.",
      coverImage: "/assets/doors/aluk.png",
      href: "/collections/doors/aluk"
    }
  ];

  return (
    <div className="min-h-screen bg-cosmo-cream text-dark">
      {/* Back Navigation */}
      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton label="Back to Collections" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-accent-cosmo-red mb-6">
            Doors & Windows
          </h1>
          <p className="text-xl text-cosmo-gray max-w-4xl mx-auto leading-relaxed">
            Architectural excellence redefined through precision-engineered aluminum systems. 
            Discover our curated selection of premium fenestration solutions that combine 
            structural strength, thermal performance, and timeless aesthetics.
          </p>
        </motion.div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.2 // Staggered animation delays
              }}
            >
              <Link href={brand.href}>
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 cursor-pointer min-h-[500px] hover-tilt"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.coverImage}
                      alt={`${brand.name} showcase`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 gradient-overlay-hero group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <motion.div 
                        className="transform group-hover:translate-y-[-8px] transition-transform duration-500"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4 drop-shadow-lg">
                          {brand.name}
                        </h2>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6 drop-shadow-md">
                          {brand.description}
                        </p>
                        
                        {/* CTA Arrow */}
                        <motion.div 
                          className="flex items-center space-x-2 text-white group-hover:text-red-300 transition-colors duration-300"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-sm font-medium uppercase tracking-wide">Explore Collection</span>
                          <svg 
                            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-heading mb-6 text-dark">
            Ready to Transform Your Space?
          </h3>
          <p className="text-cosmo-gray font-body mb-8 max-w-2xl mx-auto text-lg">
            Our specialists are here to help you select the perfect doors and windows 
            for your project, ensuring beauty, performance, and lasting value.
          </p>
          <Link href="/#contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-cosmo-red text-white font-body font-semibold rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg text-lg"
            >
              Book a Consultation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}