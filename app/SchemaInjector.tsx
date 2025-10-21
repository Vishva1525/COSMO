'use client'

export default function SchemaInjector() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Cosmo Granites Private Limited",
    "url": "https://www.cosmofloor.com",
    "logo": "https://www.cosmofloor.com/assets/logo.png",
    "image": "https://www.cosmofloor.com/assets/og-image.jpg",
    "telephone": "+914448680111",
    "email": "cosmosales@cosmofloor.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "118, Old Mahabalipuram Road (OMR), Karapakkam",
      "addressLocality": "Chennai",
      "postalCode": "600119",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/cosmofloor",
      "https://www.instagram.com/cosmofloor",
      "https://www.linkedin.com/company/cosmo-granites"
    ],
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "Cosmo Gallery Karapakkam",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "118 OMR, Karapakkam",
          "addressLocality": "Chennai",
          "postalCode": "600119",
          "addressCountry": "IN"
        }
      }
    ],
    "description": "India's largest luxury stone gallery offering marble, granite, wood flooring, and architectural solutions since 1992.",
    "foundingDate": "1992",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Materials Collection",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Marble Collection",
            "description": "Premium marble varieties including beiges, greys, whites, blacks, and onyx"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Granite Collection",
            "description": "Enduring granite stones in brown, red, black, grey, white, and imported varieties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Wood Flooring",
            "description": "Engineered luxury wooden flooring solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Doors & Windows",
            "description": "Precision-engineered aluminium frames and systems"
          }
        }
      ]
    }
  }

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />
  )
}
