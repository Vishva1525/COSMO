'use client'

import { useState, useEffect, memo } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, Download, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      setIsScrolled(scrollY > heroHeight * 0.3) // Change color after 30% of hero height
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu after navigation
  }

  const handleDownloadBrochure = () => {
    const brochureUrl = '/assets/brochure.pdf'
    const link = document.createElement('a')
    link.href = brochureUrl
    link.download = 'Cosmo-Granites-Brochure.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const collections = [
    { name: 'Marble Collection', href: '/collections/marble' },
    { name: 'Granite Collection', href: '/collections/granite' },
    { name: 'Wooden Flooring', href: '/collections/wood' },
    { name: 'Doors & Windows', href: '/collections/doors' }
  ]

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Collections', href: '#collections', id: 'collections', hasDropdown: true },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Visit Us', href: '#contact', id: 'contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/20 shadow-lg transition-all duration-300 ${
      isScrolled ? 'bg-white/90' : 'bg-white/15'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo redirects to home */}
          <Link href="/" className="flex-shrink-0 cursor-pointer group">
            <Image
              src="/assets/logo.png"
              alt="Cosmo Granites Logo"
              width={40}
              height={40}
              className="h-10 w-auto group-hover:scale-110 transition-transform duration-300 ease-out"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                        className={`relative transition-colors duration-200 font-body font-medium text-sm uppercase tracking-wide drop-shadow-sm flex items-center space-x-1 ${
                          isScrolled 
                            ? 'text-gray-800 hover:text-brand-red' 
                            : 'text-white hover:text-brand-red'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isCollectionsOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isCollectionsOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {collections.map((collection, index) => (
                              <motion.div
                                key={collection.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={collection.href}
                                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-red transition-colors duration-200 font-body text-sm"
                                  onClick={() => setIsCollectionsOpen(false)}
                                >
                                  {collection.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`relative transition-colors duration-200 font-body font-medium text-sm uppercase tracking-wide drop-shadow-sm ${
                        isScrolled 
                          ? 'text-gray-800 hover:text-brand-red' 
                          : 'text-white hover:text-brand-red'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 hover:w-full bg-brand-red`}></span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Download Button - Positioned at extreme right */}
          <div className="hidden md:block">
            <button
              onClick={handleDownloadBrochure}
              className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-all duration-200 text-xs font-medium ${
                isScrolled 
                  ? 'bg-red-700 text-white hover:bg-red-800' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
              title="Download Brochure"
            >
              <Download className="w-3 h-3" />
              <span>PDF</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-red-700' 
                  : 'text-white hover:text-red-300'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-lg rounded-lg mt-2 shadow-lg border border-white/20 ${
            isScrolled ? 'bg-white/90' : 'bg-white/15'
          }`}>
            {navLinks.map((link, index) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                      className={`block w-full text-left px-3 py-2 hover:bg-white/10 rounded-md text-base font-body font-medium transition-colors duration-200 ${
                        isScrolled 
                          ? 'text-gray-800 hover:text-red-700' 
                          : 'text-white hover:text-red-300'
                      }`}
                    >
                      {link.name}
                    </button>
                    {isCollectionsOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {collections.map((collection) => (
                          <Link
                            key={collection.name}
                            href={collection.href}
                            className={`block px-3 py-2 hover:bg-white/10 rounded-md text-sm font-body transition-colors duration-200 ${
                              isScrolled 
                                ? 'text-gray-700 hover:text-red-700' 
                                : 'text-gray-200 hover:text-red-300'
                            }`}
                            onClick={() => {
                              setIsOpen(false)
                              setIsCollectionsOpen(false)
                            }}
                          >
                            {collection.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left px-3 py-2 hover:bg-white/10 rounded-md text-base font-body font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-gray-800 hover:text-red-700' 
                        : 'text-white hover:text-red-300'
                    }`}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
            {/* Mobile Download Button */}
            <button
              onClick={handleDownloadBrochure}
              className={`flex items-center space-x-2 w-full text-left px-3 py-2 hover:bg-white/10 rounded-md text-sm font-medium transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-red-700' 
                  : 'text-white hover:text-red-300'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default memo(Navbar)
