'use client'



import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    })
  }

  return (
    <section 
      id="contact" 
      className="relative bg-[url('/assets/marble-pattern.jpg')] bg-cover bg-fixed overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg-subtle"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info & Map */}
          <div
            className="space-y-8 animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Heading */}
            <h2 className="text-5xl font-heading text-primary font-semibold mb-6 leading-tight">
              Visit Our Gallery
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Step into our 16,000 sq. metre flagship gallery at Karapakkam (OMR) — India&apos;s largest luxury stone showcase. 
              Explore marble, granite, wood, and aluminium systems under one roof.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-dark mb-1">Address</h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    Cosmo Granites Pvt Ltd<br />
                    118, Old Mahabalipuram Road (OMR),<br />
                    Karapakkam, Chennai – 600 119
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-dark mb-1">Phone</h3>
                  <p className="text-gray-700 font-body">
                    Reception: <a 
                      href="tel:+914448680111" 
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.trackCTA) {
                          window.trackCTA('phone_call')
                        }
                      }}
                      className="hover:text-primary transition-colors duration-200"
                    >+91 44 4868 0111</a> / 222 / 333 / 444<br />
                    Mobile & WhatsApp: <a 
                      href="https://wa.me/919384845224" 
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.trackCTA) {
                          window.trackCTA('whatsapp_contact')
                        }
                      }}
                      className="hover:text-primary transition-colors duration-200" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >+91 93848 45224</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-dark mb-1">Email</h3>
                  <p className="text-gray-700 font-body">
                    cosmosales@cosmofloor.com
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div
              className="rounded-lg shadow-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2252455166283!2d80.2288646750382!3d12.871980387429248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bdc1db34b93%3A0x9877a8f5860c936e!2sCosmo%20Granites!5e0!3m2!1sen!2sin!4v1698580175534!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px]"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-3xl font-heading font-semibold text-dark mb-6">
              Book an Appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Interest Dropdown */}
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  Select Interest
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select Interest</option>
                  <option value="marble">Marble</option>
                  <option value="granite">Granite</option>
                  <option value="wood">Wood</option>
                  <option value="doors">Doors & Windows</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-body font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-primary hover:bg-accent text-white py-3 rounded-lg font-body font-semibold transition-colors duration-300 shadow-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Section Footer CTA */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <h4 className="text-xl text-gray-700 mb-4 font-body">
            Prefer a personal walkthrough?
          </h4>
          <button
            className="px-8 py-3 bg-primary text-white font-body font-semibold rounded-full hover:bg-accent transition-colors duration-300 shadow-lg"
          >
            Book a Gallery Visit
          </button>
        </div>
      </div>
    </section>
  )
}
