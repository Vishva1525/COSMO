'use client'



import { Globe, Building, Handshake } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {

  const features = [
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Imported marble & granite from 8 countries'
    },
    {
      icon: Building,
      title: '16,000 sq.m Gallery',
      description: 'India\'s largest stone experience center'
    },
    {
      icon: Handshake,
      title: 'Trusted Craftsmanship',
      description: 'Decades of precision and service'
    }
  ]

  return (
    <section id="about" className="bg-white text-dark relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-bg-subtle"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual Story */}
          <div
            className="relative animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              {/* Background Image/Video */}
              <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/about.jpg"
                  alt="Cosmo Granites showroom gallery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Red Tint Overlay */}
                <div className="absolute inset-0 bg-primary/10"></div>
                
                {/* Video Alternative (commented out for now) */}
                {/* 
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/assets/about-gallery.mp4" type="video/mp4" />
                </video>
                */}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Narrative Text */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2 className="text-5xl font-heading font-semibold text-primary mb-6 leading-tight">
              Legacy in Stone.<br />
              <span className="text-dark">Craft in Every Detail.</span>
            </h2>

            {/* Body Copy */}
            <div
              className="space-y-6 text-gray-700 font-body leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
                  <p>
                    Since 1992, Cosmo Granites Private Limited has been a pioneer in natural flooring and architectural materials,
                    transforming spaces across India with our commitment to excellence. What began as a vision to bring the world&apos;s
                    finest stones to Indian homes has evolved into a legacy of craftsmanship that spans over three decades.
                  </p>

                  <p>
                    Our 4-acre flagship gallery at Karapakkam stands as a testament to our passion for natural stone. We source
                    premium marble and granite from Italy, Spain, Turkey, and across India, ensuring every piece meets our exacting
                    standards. This global network allows us to offer an unparalleled selection of materials, each with its own
                    unique story and character.
                  </p>

                  <p>
                    At Cosmo, we believe that quality, transparency, and timeless design are not just principles—they&apos;re promises.
                    Every project we undertake reflects our dedication to creating spaces that inspire, endure, and tell stories
                    that last generations. Our philosophy is simple: we don&apos;t just sell surfaces, we craft experiences.
                  </p>
            </div>

            {/* Feature Highlights */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-body">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Philosophy CTA */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
              <h3 className="text-2xl font-heading mb-4 text-dark leading-relaxed">
                &quot;We don&apos;t just sell surfaces — we craft experiences that last generations.&quot;
              </h3>
          <button
            className="px-8 py-3 bg-primary text-white rounded-full font-body font-semibold hover:bg-accent transition-colors duration-300 shadow-lg"
          >
            Learn More About Cosmo
          </button>
        </div>
      </div>
    </section>
  )
}
