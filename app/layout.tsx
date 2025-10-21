import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import SchemaInjector from './SchemaInjector'
import WhatsAppButton from '@/components/WhatsAppButton'

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.cosmofloor.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cosmo Granites | Luxury Marble, Granite, Wood & Fenestrations",
  description: "Crafted by Nature. Perfected by Cosmo. Explore India's largest luxury materials gallery—marble, granite, wood, and aluminium systems.",
  keywords: ["marble chennai", "granite india", "wood flooring", "aluminium doors windows", "cosmo granites", "luxury stone gallery", "architectural solutions"],
  authors: [{ name: "Cosmo Granites Private Limited" }],
  creator: "Cosmo Granites",
  publisher: "Cosmo Granites Private Limited",
  alternates: { 
    canonical: siteUrl 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Cosmo Granites",
    description: "Where materials become architecture.",
    url: siteUrl,
    siteName: "Cosmo Granites",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmo Granites Luxury Stone Gallery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cosmofloor",
    creator: "@cosmofloor",
    title: "Cosmo Granites",
    description: "Where materials become architecture.",
    images: ["/assets/og-image.jpg"],
  },
  icons: { 
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.cosmofloor.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/og-image.jpg" as="image" />
        <link rel="preload" href="/videos/hero-loop.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/assets/logo.png" as="image" />
        
        {/* Preload Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-neutral">
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="ga-setup">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                
                // Track CTA clicks
                function trackCTA(label) {
                  gtag('event', 'click', {
                    event_category: 'CTA',
                    event_label: label
                  });
                }
                
                // Make trackCTA globally available
                window.trackCTA = trackCTA;
              `}
            </Script>
          </>
        )}
        
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <SchemaInjector />
      </body>
    </html>
  )
}
