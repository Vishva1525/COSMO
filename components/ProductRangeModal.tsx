'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ProductCard {
  id: string
  name: string
  image: string
}

interface Subcategory {
  name: string
  folder: string
  products: ProductCard[]
}

interface CategoryData {
  name: string
  subcategories: Subcategory[]
}

// Helper function to extract clean names from filenames
function extractCleanName(filename: string): string {
  let name = filename
    .replace(/^freepik__/, '')
    .replace(/__\d+$/, '')
    .replace(/[-_]+/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .trim()
  
  return name
}

// Generate marble products with real images
function getMarbleProducts(subfolder: string): ProductCard[] {
  const marbleImages: Record<string, string[]> = {
    'beiges and cream': [
      'freepik__atlantic-beige-marble-photoreal-beige-marble-slab-__71148.png',
      'freepik__bianco-marfill-light-cream-marble-slab-with-faint-__71149.png',
      'freepik__botticino-classico-fiorito-italian-beige-marble-wi__71161.png',
      'freepik__brescia-aurora-beige-marble-with-faint-pink-hue-ph__71159.png',
      'freepik__brescia-diana-classic-beige-marble-with-subtle-hor__71150.png',
      'freepik__cloudy-beige-soft-cloudy-beige-marble-surface-matt__71162.png',
      'freepik__crema-miele-honeytoned-beige-marble-elegant-light-__71163.png',
      'freepik__crema-nova-polished-cream-marble-surface-realistic__71160.png'
    ],
    'greys': [
      'freepik__arabescato-carrara-grey-marble-slab-with-elegant-v__71167.png',
      'freepik__bianco-carrara-grey-marble-with-subtle-veining-pat__71168.png',
      'freepik__calacatta-grey-marble-slab-with-dramatic-veins-ph__71169.png',
      'freepik__grigio-carnico-grey-marble-with-fine-linear-veini__71170.png',
      'freepik__grigio-perla-grey-marble-slab-with-cloudy-pattern__71171.png',
      'freepik__pietra-grey-marble-with-natural-texture-and-veini__71172.png',
      'freepik__silver-grey-marble-slab-with-metallic-shimmer-ph__71173.png',
      'freepik__storm-grey-marble-with-dramatic-cloudy-patterns__71174.png'
    ],
    'whites': [
      'freepik__bianco-carrara-white-marble-slab-with-subtle-veini__71175.png',
      'freepik__calacatta-white-marble-with-dramatic-gold-veins-ph__71176.png',
      'freepik__statuario-white-marble-slab-elegant-pure-white-su__71177.png',
      'freepik__thassos-white-marble-with-crystalline-texture-pho__71178.png',
      'freepik__volakas-white-marble-slab-with-grey-veining-patte__71179.png',
      'freepik__arabescato-white-marble-with-elegant-swirl-pattern__71180.png',
      'freepik__bianco-venus-white-marble-slab-pure-white-surface__71181.png'
    ],
    'blacks': [
      'freepik__american-gold-portoro-black-marble-with-striking-g__71182.png',
      'freepik__black-portoro-classic-black-marble-surface-with-go__71183.png',
      'freepik__brescia-nortre-deep-black-marble-with-faint-white-__71184.png',
      'freepik__ocean-black-rich-black-marble-slab-with-subtle-wav__71185.png',
      'freepik__silver-portoro-dark-marble-with-metallic-silver-ve__71186.png'
    ],
    'colors': [
      'freepik__dark-emperador-brown-marble-with-dense-white-veini__88716.png',
      'freepik__ice-brown-light-brown-marble-matte-finish-with-gen__88717.png',
      'freepik__red-alicante-deep-red-marble-slab-elegant-interior__88718.png',
      'freepik__red-lanventhe-vibrant-red-marble-polished-texture-__88719.png',
      'freepik__rosso-pistalo-rust-red-marble-with-natural-pattern__88720.png',
      'freepik__yellow-pearl-golden-yellow-marble-slab-warm-daylig__88721.png'
    ],
    'onyx': [
      'freepik__golden-onyx-marble-slab-with-translucent-gold-laye__71187.png',
      'freepik__green-onyx-marble-with-emerald-swirls-and-patterns__71188.png',
      'freepik__red-onyx-marble-slab-with-deep-crimson-veining-ph__71189.png',
      'freepik__blue-onyx-marble-with-sapphire-tones-and-crystals__71190.png',
      'freepik__white-onyx-marble-slab-translucent-pure-white-sur__71191.png',
      'freepik__brown-onyx-marble-with-warm-chocolate-swirls-phot__71192.png',
      'freepik__purple-onyx-marble-slab-with-amethyst-veining-pat__71193.png',
      'freepik__pink-onyx-marble-with-rose-quartz-patterns-photore__71194.png',
      'freepik__orange-onyx-marble-slab-with-citrine-crystals-pho__71195.png',
      'freepik__black-onyx-marble-with-deep-ebony-veining-photore__71196.png'
    ],
    'travertino': [
      'freepik__classic-travertino-marble-slab-with-natural-holes__71197.png',
      'freepik__silver-travertino-marble-with-metallic-shimmer-ph__71198.png',
      'freepik__gold-travertino-marble-slab-with-warm-tones-photo__71199.png',
      'freepik__noce-travertino-marble-with-brown-veining-pattern__71200.png',
      'freepik__bianco-travertino-marble-slab-light-cream-surface__71201.png',
      'freepik__navona-travertino-marble-with-classic-texture-pho__71202.png',
      'freepik__romano-travertino-marble-slab-traditional-pattern__71203.png',
      'freepik__tuscan-travertino-marble-with-rustic-texture-phot__71204.png'
    ],
    'indian-marble': [
      'freepik__indian-classic-white-soft-white-marble-smooth-surf__88715.png',
      'freepik__jaisalmar-golden-yellow-indian-marble-slab-photore__88714.png',
      'freepik__udaipur-green-green-marble-slab-with-cloudy-veins-__88713.png'
    ]
  }

  const images = marbleImages[subfolder] || []
  return images.map((img, idx) => ({
    id: `marble-${subfolder}-${idx}`,
    name: extractCleanName(img),
    image: `/assets/marble/${subfolder}/${img}`
  }))
}

// Generate granite products
function getGraniteProducts(subfolder: string): ProductCard[] {
  const graniteImages: Record<string, string[]> = {
    'indian-granites': [
      'freepik__polished-coffee-brown-indian-granite-slab-with-ric__6328.png',
      'freepik__vibrant-coral-red-indian-granite-slab-glossy-finis__6329.png',
      'freepik__english-teak-granite-slab-with-fine-beige-and-brow__6330.png',
      'freepik__fox-brown-granite-with-subtle-chocolate-tones-and-__6331.png',
      'freepik__cool-grey-indian-granite-slab-with-smooth-reflecti__6332.png',
      'freepik__icon-brown-granite-slab-in-warm-tones-with-mild-sp__6333.png',
      'freepik__ivory-fantasy-granite-slab-with-creamy-beige-textu__6334.png',
      'freepik__jet-black-granite-slab-with-mirrorlike-finish-and-__6335.png'
    ],
    'imported-granites': [
      'freepik__antique-brown-imported-granite-slab-with-deep-choc__6351.png',
      'freepik__blue-pearl-granite-slab-with-metallic-blue-crystal__6352.png',
      'freepik__emerald-pearl-granite-with-greenblack-reflective-t__6354.png',
      'freepik__royal-grey-granite-slab-with-balanced-matte-polish__6355.png',
      'freepik__volga-blue-granite-slab-with-deep-navy-tone-and-lu__6356.png'
    ]
  }

  const images = graniteImages[subfolder] || []
  return images.slice(0, 8).map((img, idx) => ({
    id: `granite-${subfolder}-${idx}`,
    name: extractCleanName(img),
    image: `/assets/granite/${subfolder}/${img}`
  }))
}

// Generate wood products with real images
function getWoodProducts(subfolder: string): ProductCard[] {
  const woodImages: Record<string, string[]> = {
    'laminated wood': [
      'freepik__mandarin-oak-and-walnut-laminate-flooring-realisti__6359.png',
      'freepik__natural-oak-and-pine-laminate-floor-rustic-warmth-__6360.png',
      'freepik__beech-and-mandarin-oak-laminated-flooring-smooth-m__6361.png',
      'freepik__classic-walnut-laminate-floor-deep-brown-tone-with__6362.png',
      'freepik__laminate-flooring-mix-of-oak-and-cherry-wood-rich-__6363.png',
      'freepik__light-brushed-oak-laminate-with-bleached-teak-text__6364.png',
      'freepik__dark-oak-and-smoky-ash-laminate-flooring-with-matt__6365.png',
      'freepik__laminated-wooden-floor-in-warm-acacia-and-teak-ton__6366.png'
    ],
    'engineered wood': [
      'freepik__engineered-ash-wood-flooring-light-tone-with-fine-__6379.png',
      'freepik__coppertoned-engineered-oak-floor-rich-color-gradie__6380.png',
      'freepik__engineered-oak-flooring-in-herringbone-pattern-pol__6381.png',
      'freepik__engineered-prime-wood-flooring-with-smooth-satin-f__6382.png',
      'freepik__cappuccinotone-engineered-oak-flooring-polished-te__6383.png',
      'freepik__engineered-cream-oak-flooring-neutral-color-palett__6384.png',
      'freepik__engineered-prime-oak-flooring-detailed-wood-grain-__6385.png',
      'freepik__engineered-sucupira-wood-flooring-rich-reddish-ton__6386.png'
    ],
    'solid hard wood': [
      'freepik__solid-oak-hardwood-flooring-natural-grain-texture__6389.png',
      'freepik__solid-teak-hardwood-floor-warm-golden-tones-photore__6390.png',
      'freepik__solid-walnut-hardwood-floor-rich-brown-texture-pho__6391.png',
      'freepik__solid-cherry-hardwood-flooring-reddish-hue-photore__6392.png',
      'freepik__solid-maple-hardwood-floor-light-cream-texture-ph__6393.png',
      'freepik__solid-mahogany-hardwood-floor-deep-red-tones-photo__6394.png',
      'freepik__solid-ash-hardwood-flooring-natural-grain-pattern__6395.png',
      'freepik__solid-hickory-hardwood-floor-rustic-texture-photore__6396.png',
      'freepik__solid-birch-hardwood-flooring-light-tones-photore__6397.png',
      'freepik__solid-pine-hardwood-floor-natural-knots-texture-ph__6398.png'
    ]
  }

  const images = woodImages[subfolder] || []
  return images.map((img, idx) => ({
    id: `wood-${subfolder}-${idx}`,
    name: extractCleanName(img),
    image: `/assets/wood/${subfolder}/${img}`
  }))
}

// Generate doors products
function getDoorsProducts(subfolder: string): ProductCard[] {
  const doorsImages: Record<string, string[]> = {
    'fletcher windows': [
      'freepik__modern-villa-exterior-showcasing-fletcher-aluminum__43202.png',
      'freepik__macro-closeup-of-aluminum-window-frame-corner-join__43203.png',
      'freepik__corporate-interior-with-fullheight-aluminum-window__43204.png',
      'freepik__modern-home-interior-with-fletcher-aluminum-slidin__43205.png'
    ],
    'aluk': [
      'freepik__elegant-loft-interior-with-aluk-glass-sliding-door__43207.png',
      'freepik__luxury-villa-exterior-featuring-aluk-door-systems-__43208.png',
      'freepik__professional-studio-render-of-aluk-aluminum-frame-__43209.png',
      'freepik__urban-apartment-exterior-showing-aluk-windows-glow__43210.png'
    ]
  }

  const images = doorsImages[subfolder] || []
  return images.map((img, idx) => ({
    id: `doors-${subfolder}-${idx}`,
    name: extractCleanName(img),
    image: `/assets/doors/${subfolder}/${img}`
  }))
}

// Initialize product data with actual folder structure
const productData: CategoryData[] = [
  {
    name: 'Marble',
    subcategories: [
      { name: 'Beiges & Cream', folder: 'beiges and cream', products: getMarbleProducts('beiges and cream') },
      { name: 'Greys', folder: 'greys', products: getMarbleProducts('greys') },
      { name: 'Whites', folder: 'whites', products: getMarbleProducts('whites') },
      { name: 'Blacks', folder: 'blacks', products: getMarbleProducts('blacks') },
      { name: 'Colors', folder: 'colors', products: getMarbleProducts('colors') },
      { name: 'Onyx', folder: 'onyx', products: getMarbleProducts('onyx') },
      { name: 'Travertino', folder: 'travertino', products: getMarbleProducts('travertino') },
      { name: 'Indian Marble', folder: 'indian-marble', products: getMarbleProducts('indian-marble') }
    ]
  },
  {
    name: 'Granite',
    subcategories: [
      { name: 'Indian Granites', folder: 'indian-granites', products: getGraniteProducts('indian-granites') },
      { name: 'Imported Granites', folder: 'imported-granites', products: getGraniteProducts('imported-granites') }
    ]
  },
  {
    name: 'Wooden Flooring',
    subcategories: [
      { name: 'Laminated Wood', folder: 'laminated wood', products: getWoodProducts('laminated wood') },
      { name: 'Engineered Wood', folder: 'engineered wood', products: getWoodProducts('engineered wood') },
      { name: 'Solid Hardwood', folder: 'solid hard wood', products: getWoodProducts('solid hard wood') }
    ]
  },
  {
    name: 'Doors & Windows',
    subcategories: [
      { name: 'Fletcher Windows', folder: 'fletcher windows', products: getDoorsProducts('fletcher windows') },
      { name: 'AluK Systems', folder: 'aluk', products: getDoorsProducts('aluk') }
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
            <div className="flex justify-between items-center border-b pb-4 mb-6 sticky top-0 bg-white z-10">
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
            <div className="flex justify-center border-b border-gray-200 mb-8 sticky top-20 bg-white z-10 pb-4">
              {productData.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 md:px-6 py-3 text-sm md:text-lg font-medium transition-colors duration-200 ${
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
                  <motion.div 
                    key={subcategory.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-4 bg-gradient-to-b from-gray-50/30 to-white p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-heading text-gray-800 border-l-4 border-red-600 pl-3">
                      {subcategory.name}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                      {subcategory.products.map((product, prodIndex) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: prodIndex * 0.05 }}
                          whileHover={{ scale: 1.03, y: -4 }}
                          className="rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-3 shadow-sm hover:shadow-lg cursor-pointer"
                        >
                          <div className="relative h-28 w-full mb-3 overflow-hidden rounded-lg">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = '/assets/placeholder-pattern.svg'
                              }}
                            />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-xs md:text-sm mb-1 truncate" title={product.name}>
                            {product.name}
                          </h4>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}