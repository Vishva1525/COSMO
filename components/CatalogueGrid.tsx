'use client'

import Link from 'next/link'
import Image from 'next/image'
import PlaceholderImage from '@/components/PlaceholderImage'
import { motion } from 'framer-motion'

export default function CatalogueGrid() {

  const collections = [
    {
      id: 'marble',
      title: 'Marble Collection',
      subtitle: 'Beiges. Greys. Whites. Blacks. Onyx.',
      image: '/assets/collections/marble.png',
      href: '/collections/marble'
    },
    {
      id: 'granite',
      title: 'Granite Collection',
      subtitle: 'Premium stones from around the world.',
      image: '/assets/collections/granite.png',
      href: '/collections/granite'
    },
    {
      id: 'wood',
      title: 'Wooden Flooring',
      subtitle: 'Engineered luxury for every space.',
      image: '/assets/collections/wood.png',
      href: '/collections/wood'
    },
    {
      id: 'doors',
      title: 'Doors & Windows',
      subtitle: 'Architectural excellence redefined.',
      image: '/assets/collections/doors.png',
      href: '/collections/doors'
    }
  ]

  return (
    <section id="collections" className="pt-24 pb-16 bg-cosmo-cream relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg-subtle"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-dark font-semibold mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg text-cosmo-gray font-body max-w-3xl mx-auto">
            Discover our premium range of architectural surfaces, each carefully curated for exceptional quality and timeless beauty.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => {
            // Check if collection image exists
            const imageExists = true; // Real images are now uploaded
            
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut",
                  delay: index * 0.1 // Staggered animation delays
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={collection.href}>
                  <motion.div 
                    className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 min-h-[320px] cursor-pointer hover-tilt"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Background Image */}
                    {imageExists ? (
                      <Image
                        src={collection.image}
                        alt={`${collection.title} collection`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={index < 2}
                      />
                    ) : (
                      <PlaceholderImage 
                        alt={`${collection.title} collection`}
                        className="h-full w-full"
                      />
                    )}
                
                    {/* Ambient Lighting Effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/10 group-hover:to-white/20 transition-all duration-500"></div>
                    
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 gradient-overlay group-hover:from-black/70 transition-all duration-500"></div>
                    
                    {/* Hover Lighting Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                         style={{ filter: 'hue-rotate(10deg) brightness(1.1)' }}></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <motion.h3
                        className="text-2xl font-heading text-white font-semibold mb-2 group-hover:translate-y-[-8px] transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {collection.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm text-gray-200 font-body opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {collection.subtitle}
                      </motion.p>
                      
                      {/* Hover Arrow */}
                      <motion.div
                        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 -translate-x-2"
                        whileHover={{ x: 4 }}
                      >
                        <svg 
                          className="w-6 h-6 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-cosmo-gray font-body mb-6">
            Can&apos;t find what you&apos;re looking for? Our experts are here to help.
          </p>
          <Link href="/#collections">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-cosmo-red hover:bg-red-800 text-white px-8 py-3 rounded-lg font-body font-semibold transition-colors duration-300 shadow-lg"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
