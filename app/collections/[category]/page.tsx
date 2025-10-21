import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { catalogueData, isValidCategory, getCategoryData, getSubcategories, type CategoryData } from '@/data/catalogueData'
import PlaceholderImage from '@/components/PlaceholderImage'
import BackButton from '@/components/BackButton'
import fs from 'fs'
import path from 'path'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Validate category
  if (!isValidCategory(params.category)) {
    notFound()
  }

  const categoryData = getCategoryData(params.category)
  const subcategories = getSubcategories(params.category)
  
  // Check if banner image exists
  const bannerImagePath = categoryData.bannerImage
  const bannerImageExists = false // Will be updated when real images are uploaded

  return (
    <div className="min-h-screen bg-neutral text-dark">
      {/* Back Navigation */}
      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton label="Back to Collections" />
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {bannerImageExists ? (
          <Image
            src={bannerImagePath}
            alt={`${categoryData.title} banner`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <PlaceholderImage 
            alt={`${categoryData.title} collection`}
            className="h-full w-full"
          />
        )}
        
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('/assets/placeholder-pattern.svg')] opacity-5"></div>
        
        <h1 
          className="relative z-10 text-5xl md:text-7xl font-heading text-white font-semibold text-center px-4 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {categoryData.title}
        </h1>
      </section>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <p
          className="text-center text-lg text-gray-600 font-body italic max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          {categoryData.description}
        </p>
      </div>

      {/* Subcategories Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div
          className="text-center mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-dark mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 font-body">
            Choose from our carefully curated subcategories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {subcategories.map((subcategoryKey: string, index: number) => {
            const subcategory = categoryData.subcategories[subcategoryKey]
            
            // Try multiple file extensions and naming variations
            const possiblePaths = [
              `/assets/${params.category}/${subcategoryKey}.jpg`,
              `/assets/${params.category}/${subcategoryKey}.png`,
              `/assets/${params.category}/${subcategoryKey.replace(/-/g, ' ')}.jpg`,
              `/assets/${params.category}/${subcategoryKey.replace(/-/g, ' ')}.png`
            ]
            
            const basePath = path.join(process.cwd(), 'public', 'assets', params.category)
            const possibleLocalPaths = [
              path.join(basePath, `${subcategoryKey}.jpg`),
              path.join(basePath, `${subcategoryKey}.png`),
              path.join(basePath, `${subcategoryKey.replace(/-/g, ' ')}.jpg`),
              path.join(basePath, `${subcategoryKey.replace(/-/g, ' ')}.png`)
            ]
            
            // Find the first existing image
            let imageExists = false
            let imgPath = ''
            for (let i = 0; i < possibleLocalPaths.length; i++) {
              if (fs.existsSync(possibleLocalPaths[i])) {
                imageExists = true
                imgPath = possiblePaths[i]
                break
              }
            }

            return (
              <Link
                key={subcategoryKey}
                href={`/collections/${params.category}/${subcategoryKey}`}
                className="relative group rounded-xl overflow-hidden shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="relative w-full h-64">
                  {imageExists ? (
                    <Image
                      src={imgPath}
                      alt={subcategory.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <PlaceholderImage 
                      alt={subcategory.title}
                      className="h-full w-full"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                  
                  {/* Category Name */}
                  <div className="absolute bottom-0 w-full bg-black/60 py-3 text-center">
                    <h3 className="text-white text-lg font-heading capitalize tracking-wide">
                      {subcategoryKey.replace(/-/g, ' ')}
                    </h3>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: `${0.8 + subcategories.length * 0.1 + 0.2}s` }}
        >
          <h3 className="text-2xl font-heading mb-4">Need expert guidance?</h3>
          <p className="text-gray-600 font-body mb-8 max-w-2xl mx-auto">
            Our specialists are here to help you select the perfect materials for your project, ensuring beauty and durability.
          </p>
          <Link href="/#contact">
            <button
              className="px-8 py-3 bg-primary text-white font-body font-semibold rounded-full hover:bg-accent transition-colors duration-300 shadow-lg"
            >
              Book a Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all categories
export async function generateStaticParams() {
  return Object.keys(catalogueData).map((category) => ({
    category,
  }))
}

// Generate metadata for each category
export async function generateMetadata({ params }: CategoryPageProps) {
  if (!isValidCategory(params.category)) {
    return {
      title: 'Category Not Found',
    }
  }

  const categoryData = getCategoryData(params.category)

  return {
    title: `${categoryData.title} | Cosmo Granites`,
    description: categoryData.description,
  }
}
