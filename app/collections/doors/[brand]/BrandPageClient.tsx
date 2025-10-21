'use client'

import Image from "next/image";
import BackButton from "@/components/BackButton";
import ImageLightbox from "@/components/ImageLightbox";
import { motion } from "framer-motion";

interface BrandPageClientProps {
  brand: {
    name: string;
    description: string;
  };
  images: { src: string; name: string }[];
}

export default function BrandPageClient({ brand, images }: BrandPageClientProps) {
  return (
    <div className="min-h-screen bg-cosmo-cream text-dark">
      {/* Back Navigation */}
      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton label="Back to Doors & Windows" />
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
          <h1 className="text-4xl md:text-6xl font-serif text-accent-cosmo-red mb-8">
            {brand.name}
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-cosmo-gray leading-relaxed">
              {brand.description}
            </p>
          </div>
        </motion.div>

        {/* Image Gallery */}
        {images.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-heading text-dark mb-8 text-center">
              Gallery
            </h2>
            <ImageLightbox images={images} />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-center py-16"
          >
            <p className="text-cosmo-gray text-lg">
              Images coming soon for {brand.name}
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-heading mb-6 text-dark">
            Interested in {brand.name}?
          </h3>
          <p className="text-cosmo-gray font-body mb-8 max-w-2xl mx-auto text-lg">
            Contact our specialists to discuss your project requirements and 
            discover how {brand.name} can enhance your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-cosmo-red text-white font-body font-semibold rounded-full hover:bg-red-800 transition-colors duration-300 shadow-lg text-lg"
            >
              Get Quote
            </motion.a>
            <motion.a 
              href="/collections/doors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-200 text-gray-800 font-body font-semibold rounded-full hover:bg-gray-300 transition-colors duration-300 shadow-lg text-lg"
            >
              View Other Brands
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
