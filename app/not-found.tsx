import Link from 'next/link'
import { Home, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center relative overflow-hidden">
      {/* Subtle marble texture background */}
      <div className="absolute inset-0 bg-[url('/assets/marble-pattern.jpg')] bg-cover bg-fixed opacity-5"></div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="animate-fade-in-up">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-heading text-primary font-bold mb-4">
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-heading text-dark font-semibold mb-6">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to exploring our beautiful collections.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="flex items-center px-6 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-accent transition-colors duration-300 shadow-lg hover:scale-105 active:scale-95">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </Link>
            
            <Link href="/#collections">
              <button className="flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-body font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
                Explore Collections
              </button>
            </Link>
          </div>
          
          {/* Contact CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 font-body mb-4">
              Need help finding something specific?
            </p>
            <Link href="tel:+914448680111">
              <button className="flex items-center justify-center mx-auto px-6 py-3 bg-dark text-white rounded-lg font-body font-semibold hover:bg-gray-800 transition-colors duration-300 hover:scale-105 active:scale-95">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +91 44 4868 0111
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
