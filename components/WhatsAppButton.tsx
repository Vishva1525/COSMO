'use client'


import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && window.trackCTA) {
      window.trackCTA('whatsapp_contact')
    }
    
    // Open WhatsApp
    window.open('https://wa.me/919384845224?text=Hi%20Cosmo%20Granites,%20I%27d%20like%20to%20know%20more%20about%20your%20collections.', '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 lg:hidden"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulse animation */}
      <div
        className="absolute inset-0 bg-green-500 rounded-full opacity-30 animate-ping"
      />
    </button>
  )
}
