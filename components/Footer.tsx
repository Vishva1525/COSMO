'use client'

import { MapPin, Phone, Mail, Heart, Shield } from 'lucide-react'
import Link from 'next/link'
import { memo, useState } from 'react'
import Image from 'next/image'

function Footer() {
  const [showAdminLogin, setShowAdminLogin] = useState(false)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAdminLogin = () => {
    if (password === 'password') {
      setIsAuthenticated(true)
      setShowAdminLogin(false)
      // Set session storage for authentication
      sessionStorage.setItem('adminAuth', 'true')
      // Redirect to admin page
      window.location.href = '/admin'
    } else {
      alert('Incorrect password')
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Collections', id: 'collections' },
    { name: 'About', id: 'about' },
    { name: 'Visit Us', id: 'contact' }
  ]

  const collections = [
    { name: 'Marble', href: '/collections/marble' },
    { name: 'Granite', href: '/collections/granite' },
    { name: 'Wooden Flooring', href: '/collections/wood' },
    { name: 'Doors & Windows', href: '/collections/doors' }
  ]

  return (
    <footer className="bg-dark text-neutral">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand Summary */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <Image 
              src="/assets/logo.png" 
              alt="Cosmo Granites Logo" 
              width={40}
              height={40}
              className="h-10 w-auto" 
            />
            <p className="text-sm text-gray-300 leading-relaxed font-body">
              Established in 1992, Cosmo Granites Private Limited sets the benchmark in marble, granite, wood, and aluminium systems across India. Crafting enduring spaces through material excellence.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-lg font-heading font-semibold text-neutral mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-body font-medium uppercase tracking-wide"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Explore Collections */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-lg font-heading font-semibold text-neutral mb-4">
              Explore Collections
            </h3>
            <ul className="space-y-2">
              {collections.map((collection, index) => (
                <li
                  key={collection.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Link
                    href={collection.href}
                    className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-body font-medium uppercase tracking-wide"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div
            className="space-y-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-lg font-heading font-semibold text-neutral mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300 font-body leading-relaxed">
                  Karapakkam, Chennai – 600119
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300 font-body">
                  <p>+91 44 4868 0111</p>
                  <p>+91 93848 45224</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:cosmosales@cosmofloor.com"
                  className="text-sm text-gray-300 hover:text-primary transition-colors duration-200 font-body"
                >
                  cosmosales@cosmofloor.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Base Bar */}
        <div
          className="border-t border-gray-600 pt-6 mt-12 flex justify-between items-center text-sm text-gray-400 flex-col sm:flex-row gap-4 text-center sm:text-left animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="font-body">
            © 2025 Cosmo Granites Private Limited. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 font-body">
            <div className="flex items-center space-x-1">
              <span>Crafted with precision & passion</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
            </div>
            <button
              onClick={() => setShowAdminLogin(true)}
              className="flex items-center space-x-1 text-white hover:text-primary transition-colors duration-200"
            >
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-heading text-gray-800">Admin Access</h3>
              <button
                onClick={() => setShowAdminLogin(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter admin password"
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAdminLogin}
                  className="flex-1 bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowAdminLogin(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default memo(Footer)
