"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ImageLightbox({ images }: { images: { src: string; name: string }[] }) {
  const [selected, setSelected] = useState<{ src: string; name: string } | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              delay: index * 0.1 // Staggered animation delays
            }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer h-72 hover-tilt"
            onClick={() => setSelected(img)}
          >
            <Image
              src={img.src}
              alt={img.name}
              width={600}
              height={400}
              className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-0 w-full bg-black/60 py-3 text-center">
              <p className="text-white text-sm font-medium px-2 leading-tight">
                {img.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-5xl w-full overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors duration-200"
                aria-label="Close modal"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[500px] bg-black">
                  <Image
                    src={selected.src}
                    alt={selected.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-serif mb-4 text-accent-cosmo-red">
                    {selected.name}
                  </h2>
                  <p className="text-cosmo-gray leading-relaxed">
                    {`Discover the exquisite beauty and natural texture of ${selected.name}. Hand-selected by Cosmo Granites for its luxurious veining, color depth, and premium finish — ideal for architectural interiors, countertops, and feature walls.`}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
