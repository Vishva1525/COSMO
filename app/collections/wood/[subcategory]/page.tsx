import fs from "fs";
import path from "path";
import Image from "next/image";
import PlaceholderImage from "@/components/PlaceholderImage";
import ImageLightbox from "@/components/ImageLightbox";
import { notFound } from "next/navigation";
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { catalogueData, isValidCategory, isValidSubcategory, getCategoryData, getSubcategoryData } from '@/data/catalogueData'
import Breadcrumb from '@/components/Breadcrumb'
import BackButton from '@/components/BackButton'

interface WoodSubcategoryPageProps {
  params: {
    subcategory: string
  }
}

export default function WoodSubcategoryPage({ params }: WoodSubcategoryPageProps) {
  // Validate subcategory
  if (!isValidSubcategory("wood", params.subcategory)) {
    notFound()
  }

  const categoryData = getCategoryData("wood")
  const subcategoryData = getSubcategoryData("wood", params.subcategory)
  
  // Map subcategory slug to actual folder name
  const folderMap: { [key: string]: string } = {
    'laminated-wood': 'laminated wood',
    'engineered-wood': 'engineered wood',
    'solid-hardwood': 'solid hard wood',
    'decking': 'decking'
  }
  
  const actualFolderName = folderMap[params.subcategory] || params.subcategory
  const baseDir = path.join(process.cwd(), "public", "assets", "wood", actualFolderName)
  
  // Check if directory exists
  if (!fs.existsSync(baseDir)) {
    notFound()
  }

  // Get all image files
  const files = fs.readdirSync(baseDir)
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
    { label: categoryData.title, href: `/collections/wood` },
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
          <div className="text-center">
            <PlaceholderImage alt="No images uploaded yet" className="h-64 w-full max-w-md mx-auto" />
            <p className="text-gray-600 font-body mt-4">
              Images for {subcategoryData.title} will be uploaded soon
            </p>
          </div>
        ) : (
          <ImageLightbox
            images={imageFiles.map((file) => ({
              src: `/assets/wood/${actualFolderName}/${file}`,
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
            Our specialists can help you select the perfect wooden flooring for your project, or create custom solutions tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <button
                className="px-8 py-3 bg-primary text-white font-body font-semibold rounded-full hover:bg-accent transition-colors duration-300 shadow-lg"
              >
                Book a Consultation
              </button>
            </Link>
            <Link href={`/collections/wood`}>
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

// Generate static params for all wood subcategories
export async function generateStaticParams() {
  const woodSubcategories = Object.keys(catalogueData.wood.subcategories)
  
  return woodSubcategories.map((subcategory) => ({
    subcategory,
  }))
}

// Generate metadata for each subcategory
export async function generateMetadata({ params }: WoodSubcategoryPageProps) {
  if (!isValidSubcategory("wood", params.subcategory)) {
    return {
      title: 'Subcategory Not Found',
    }
  }

  const subcategoryData = getSubcategoryData("wood", params.subcategory)

  return {
    title: `${subcategoryData.title} | Cosmo Granites`,
    description: subcategoryData.description,
  }
}
