import fs from "fs";
import path from "path";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";
import { notFound } from "next/navigation";
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { catalogueData, isValidCategory, isValidSubcategory, getCategoryData, getSubcategoryData } from '@/data/catalogueData'
import Breadcrumb from '@/components/Breadcrumb'
import BackButton from '@/components/BackButton'

interface MarbleSubcategoryPageProps {
  params: {
    subcategory: string
  }
}

export default function MarbleSubcategoryPage({ params }: MarbleSubcategoryPageProps) {
  // Validate subcategory
  if (!isValidSubcategory("marble", params.subcategory)) {
    notFound()
  }

  const categoryData = getCategoryData("marble")
  const subcategoryData = getSubcategoryData("marble", params.subcategory)
  
  // Map subcategory slug to actual folder name
  const folderMap: { [key: string]: string } = {
    'beiges-and-cream': 'beiges and cream',
    'indian-marble': 'indian-marble'
  }
  
  const actualFolderName = folderMap[params.subcategory] || params.subcategory
  const baseDir = path.join(process.cwd(), "public", "assets", "marble", actualFolderName)
  
  // Check if directory exists, if not try the slug as-is
  let finalBaseDir = baseDir
  if (!fs.existsSync(baseDir)) {
    const fallbackDir = path.join(process.cwd(), "public", "assets", "marble", params.subcategory)
    if (fs.existsSync(fallbackDir)) {
      finalBaseDir = fallbackDir
    } else {
      notFound()
    }
  } else {
    finalBaseDir = baseDir
  }

  // Get all image files
  const files = fs.readdirSync(finalBaseDir)
  const imageFiles = files.filter((f) => 
    /\.(jpg|jpeg|png|webp)$/i.test(f) && f.toLowerCase() !== "cover.jpg"
  )

  // Format name for display
  const formatName = (filename: string) => {
    return filename
      .replace(/\.[^/.]+$/, "") // Remove extension
      .replace(/freepik__/gi, "") // Remove freepik prefix
      .replace(/[\d_()-]/g, " ") // Replace underscores, numbers, parentheses with spaces
      .replace(/\s{2,}/g, " ") // Replace multiple spaces with single space
      .trim()
      .replace(/\b\w/g, (c) => c.toUpperCase()) // Capitalize first letter of each word
  }

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/#collections' },
    { label: categoryData.title, href: `/collections/marble` },
    { label: subcategoryData.title }
  ]

  return (
    <div className="min-h-screen bg-neutral text-dark">
      {/* Back Navigation */}
      <div className="pt-24 px-8">
        <div className="max-w-7xl mx-auto">
          <BackButton label={`Back to ${categoryData.title}`} />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h1 className="text-4xl md:text-6xl font-heading font-semibold text-dark mb-6">
            {subcategoryData.title}
          </h1>
          <p className="text-lg text-gray-600 font-body italic max-w-3xl mx-auto mb-8">
            {subcategoryData.description}
          </p>
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full font-body font-medium">
            <span>{imageFiles.length} varieties available</span>
          </div>
        </div>
      </section>

      {/* Dynamic Images Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {imageFiles.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading text-gray-700 mb-2">Images Coming Soon</h3>
              <p className="text-gray-600 font-body">
                Images for {subcategoryData.title} will be uploaded soon
              </p>
            </div>
          </div>
        ) : (
          <ImageLightbox
            images={imageFiles.map((file) => ({
              src: `/assets/marble/${actualFolderName}/${file}`,
              name: formatName(file)
            }))}
          />
        )}

        {/* Results Count */}
        {imageFiles.length > 0 && (
          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: `${0.5 + imageFiles.length * 0.1}s` }}
          >
            <p className="text-gray-600 font-body">
              Showing {imageFiles.length} images in {subcategoryData.title}
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: `${0.5 + imageFiles.length * 0.1 + 0.2}s` }}
        >
          <h3 className="text-2xl font-heading mb-4">Interested in these varieties?</h3>
          <p className="text-gray-600 font-body mb-8 max-w-2xl mx-auto">
            Our specialists can help you select the perfect marble for your project, or create custom solutions tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button
                className="px-8 py-3 bg-primary text-white font-body font-semibold rounded-full hover:bg-accent transition-colors duration-300 shadow-lg"
              >
                Book a Consultation
              </button>
            </Link>
            <Link href={`/collections/marble`}>
              <button
                className="px-8 py-3 border-2 border-primary text-primary font-body font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                View All Categories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all marble subcategories
export async function generateStaticParams() {
  const marbleSubcategories = Object.keys(catalogueData.marble.subcategories)
  
  return marbleSubcategories.map((subcategory) => ({
    subcategory,
  }))
}

// Generate metadata for each subcategory
export async function generateMetadata({ params }: MarbleSubcategoryPageProps) {
  if (!isValidSubcategory("marble", params.subcategory)) {
    return {
      title: 'Subcategory Not Found',
    }
  }

  const subcategoryData = getSubcategoryData("marble", params.subcategory)

  return {
    title: `${subcategoryData.title} | Cosmo Granites`,
    description: subcategoryData.description,
  }
}
