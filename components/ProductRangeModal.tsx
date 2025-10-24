'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ProductCard {
  id: string
  name: string
  price: string
  image: string
}

interface Subcategory {
  name: string
  products: ProductCard[]
}

interface Category {
  name: string
  subcategories: Subcategory[]
}

const productData: Category[] = [
  {
    name: 'Marble',
    subcategories: [
      {
        name: 'Italian Marble',
        products: [
          { id: '1', name: 'Carrara White', price: '₹450/sq ft', image: '/assets/marble/whites/carrara-white.jpg' },
          { id: '2', name: 'Calacatta Gold', price: '₹650/sq ft', image: '/assets/marble/whites/calacatta-gold.jpg' },
          { id: '3', name: 'Statuario', price: '₹750/sq ft', image: '/assets/marble/whites/statuario.jpg' },
          { id: '4', name: 'Nero Marquina', price: '₹550/sq ft', image: '/assets/marble/blacks/nero-marquina.jpg' }
        ]
      },
      {
        name: 'Indian Marble',
        products: [
          { id: '5', name: 'Makrana White', price: '₹350/sq ft', image: '/assets/marble/indian-marble/makrana-white.jpg' },
          { id: '6', name: 'Rajnagar Pink', price: '₹400/sq ft', image: '/assets/marble/indian-marble/rajnagar-pink.jpg' },
          { id: '7', name: 'Udaipur Green', price: '₹450/sq ft', image: '/assets/marble/indian-marble/udaipur-green.jpg' },
          { id: '8', name: 'Indian Black', price: '₹500/sq ft', image: '/assets/marble/blacks/indian-black.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Granite',
    subcategories: [
      {
        name: 'Indian Granites',
        products: [
          { id: '9', name: 'Black Galaxy', price: '₹300/sq ft', image: '/assets/granite/indian/black-galaxy.jpg' },
          { id: '10', name: 'Absolute Black', price: '₹350/sq ft', image: '/assets/granite/indian/absolute-black.jpg' },
          { id: '11', name: 'Tan Brown', price: '₹250/sq ft', image: '/assets/granite/indian/tan-brown.jpg' },
          { id: '12', name: 'Imperial White', price: '₹400/sq ft', image: '/assets/granite/indian/imperial-white.jpg' }
        ]
      },
      {
        name: 'Imported Granites',
        products: [
          { id: '13', name: 'Brazilian Blue', price: '₹600/sq ft', image: '/assets/granite/imported/brazilian-blue.jpg' },
          { id: '14', name: 'Norwegian Pearl', price: '₹550/sq ft', image: '/assets/granite/imported/norwegian-pearl.jpg' },
          { id: '15', name: 'African Red', price: '₹500/sq ft', image: '/assets/granite/imported/african-red.jpg' },
          { id: '16', name: 'Canadian Maple', price: '₹450/sq ft', image: '/assets/granite/imported/canadian-maple.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Wooden Flooring',
    subcategories: [
      {
        name: 'Engineered Wood',
        products: [
          { id: '17', name: 'Oak Engineered', price: '₹200/sq ft', image: '/assets/wood/engineered/oak-engineered.jpg' },
          { id: '18', name: 'Teak Engineered', price: '₹250/sq ft', image: '/assets/wood/engineered/teak-engineered.jpg' },
          { id: '19', name: 'Walnut Engineered', price: '₹300/sq ft', image: '/assets/wood/engineered/walnut-engineered.jpg' },
          { id: '20', name: 'Cherry Engineered', price: '₹280/sq ft', image: '/assets/wood/engineered/cherry-engineered.jpg' }
        ]
      },
      {
        name: 'Solid Hardwood',
        products: [
          { id: '21', name: 'Solid Oak', price: '₹400/sq ft', image: '/assets/wood/solid/solid-oak.jpg' },
          { id: '22', name: 'Solid Teak', price: '₹500/sq ft', image: '/assets/wood/solid/solid-teak.jpg' },
          { id: '23', name: 'Solid Walnut', price: '₹600/sq ft', image: '/assets/wood/solid/solid-walnut.jpg' },
          { id: '24', name: 'Solid Cherry', price: '₹550/sq ft', image: '/assets/wood/solid/solid-cherry.jpg' }
        ]
      }
    ]
  },
  {
    name: 'Doors & Windows',
    subcategories: [
      {
        name: 'Fletcher Windows',
        products: [
          { id: '25', name: 'Casement Window', price: '₹800/sq ft', image: '/assets/doors/fletcher-windows/casement.jpg' },
          { id: '26', name: 'Sliding Window', price: '₹900/sq ft', image: '/assets/doors/fletcher-windows/sliding.jpg' },
          { id: '27', name: 'Tilt & Turn', price: '₹1200/sq ft', image: '/assets/doors/fletcher-windows/tilt-turn.jpg' },
          { id: '28', name: 'Fixed Window', price: '₹600/sq ft', image: '/assets/doors/fletcher-windows/fixed.jpg' }
        ]
      },
      {
        name: 'AluK Systems',
        products: [
          { id: '29', name: 'AluK Sliding Door', price: '₹1500/sq ft', image: '/assets/doors/aluk/sliding-door.jpg' },
          { id: '30', name: 'AluK Folding Door', price: '₹1800/sq ft', image: '/assets/doors/aluk/folding-door.jpg' },
          { id: '31', name: 'AluK Lift & Slide', price: '₹2000/sq ft', image: '/assets/doors/aluk/lift-slide.jpg' },
          { id: '32', name: 'AluK French Door', price: '₹1600/sq ft', image: '/assets/doors/aluk/french-door.jpg' }
        ]
      }
    ]
  }
]

interface ProductRangeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProductRangeModal({ isOpen, onClose }: ProductRangeModalProps) {
  const [activeCategory, setActiveCategory] = useState('Marble')

  // Handle ESC key and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      
      document.addEventListener('keydown', handleEsc)
      return () => {
        document.removeEventListener('keydown', handleEsc)
        document.body.style.overflow = 'unset'
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const currentCategory = productData.find(cat => cat.name === activeCategory)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black/40"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white w-[90vw] max-w-6xl rounded-3xl p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-3xl font-heading text-gray-900">Our Complete Product Range</h2>
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-red-600 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-gray-500 text-center mb-8">
              Explore our comprehensive collection of premium natural stones and architectural elements.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center border-b border-gray-200 mb-8">
              {productData.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
                    activeCategory === category.name
                      ? 'border-b-2 border-red-600 text-red-600'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Content Section */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {currentCategory?.subcategories.map((subcategory, index) => (
                  <div key={subcategory.name} className="space-y-4">
                    <h3 className="text-xl font-heading text-gray-800 border-b border-gray-200 pb-2">
                      {subcategory.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {subcategory.products.map((product) => (
                        <motion.div
                          key={product.id}
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-3 shadow-sm hover:shadow-lg cursor-pointer"
                        >
                          <div className="relative h-28 w-full mb-3">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="rounded-lg object-cover"
                              onError={(e) => {
                                // Fallback to placeholder if image doesn't exist
                                e.currentTarget.src = '/assets/placeholder-pattern.svg'
                              }}
                            />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm mb-1">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {product.price}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
