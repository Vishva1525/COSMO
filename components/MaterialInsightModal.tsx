'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin, Wrench, Shield, Info } from 'lucide-react'
import { MaterialInfo } from '@/data/materials'

interface MaterialInsightModalProps {
  material: MaterialInfo | null
  isOpen: boolean
  onClose: () => void
}

export default function MaterialInsightModal({ material, isOpen, onClose }: MaterialInsightModalProps) {
  if (!material) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-cosmo-cream to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-heading text-dark font-semibold mb-2">
                    {material.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-cosmo-gray font-body">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{material.origin}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Info size={16} />
                      <span className="capitalize">{material.category}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} className="text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-heading text-dark font-semibold mb-3">
                      Material Overview
                    </h3>
                    <p className="text-cosmo-gray font-body leading-relaxed">
                      {material.description}
                    </p>
                  </div>

                  {/* Characteristics */}
                  <div>
                    <h3 className="text-xl font-heading text-dark font-semibold mb-3">
                      Key Characteristics
                    </h3>
                    <ul className="space-y-2">
                      {material.characteristics.map((characteristic, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-cosmo-gray font-body"
                        >
                          <div className="w-2 h-2 bg-accent-cosmo-red rounded-full flex-shrink-0"></div>
                          <span>{characteristic}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div>
                    <h3 className="text-xl font-heading text-dark font-semibold mb-3">
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {material.applications.map((application, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-accent-cosmo-red/10 text-accent-cosmo-red rounded-full text-sm font-body"
                        >
                          {application}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Technical Specifications */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-heading text-dark font-semibold mb-4 flex items-center space-x-2">
                      <Shield size={20} className="text-accent-cosmo-red" />
                      <span>Technical Specifications</span>
                    </h3>
                    <div className="space-y-3">
                      {Object.entries(material.technicalSpecs).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                        >
                          <span className="font-body font-medium text-dark capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-body text-cosmo-gray">
                            {value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Maintenance */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-heading text-dark font-semibold mb-3 flex items-center space-x-2">
                      <Wrench size={20} className="text-blue-600" />
                      <span>Maintenance Guide</span>
                    </h3>
                    <p className="text-cosmo-gray font-body leading-relaxed">
                      {material.maintenance}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-sm text-cosmo-gray font-body">
                  Need more information? Contact our specialists for detailed specifications.
                </p>
                <motion.button
                  onClick={onClose}
                  className="px-6 py-2 bg-accent-cosmo-red text-white font-body font-semibold rounded-lg hover:bg-red-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
