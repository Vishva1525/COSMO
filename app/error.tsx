'use client'

import Link from 'next/link'
import { Home, RefreshCw, Phone } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center relative overflow-hidden">
      {/* Subtle marble texture background */}
      <div className="absolute inset-0 bg-[url('/assets/marble-pattern.jpg')] bg-cover bg-fixed opacity-5"></div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Error Icon */}
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <RefreshCw className="w-12 h-12 text-primary" />
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-heading text-dark font-semibold mb-4">
            Something went wrong
          </h1>
          
          <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed">
            We&apos;re experiencing a technical issue. Our team has been notified and is working to fix it.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-accent transition-colors duration-300 shadow-lg hover:scale-105 active:scale-95"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            
            <Link href="/">
              <button className="flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </Link>
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 font-body mb-4">
              Still having trouble? Contact our support team.
            </p>
            <Link href="tel:+914448680111">
              <button className="flex items-center justify-center mx-auto px-6 py-3 bg-dark text-white rounded-lg font-body font-semibold hover:bg-gray-800 transition-colors duration-300 hover:scale-105 active:scale-95">
                <Phone className="w-5 h-5 mr-2" />
                Call Support: +91 44 4868 0111
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
