// Helper function to extract clean product names from filenames
export function extractProductName(filename: string): string {
  // Remove file extension
  let name = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '')
  
  // Remove 'freepik__' prefix and trailing numbers
  name = name.replace(/^freepik__/, '')
  name = name.replace(/__\d+$/, '')
  
  // Replace underscores and hyphens with spaces
  name = name.replace(/[-_]+/g, ' ')
  
  // Capitalize first letter of each word
  name = name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  // Remove extra spaces
  name = name.replace(/\s+/g, ' ').trim()
  
  return name
}

// Generate product data from actual folder structure
export function generateProductData() {
  const marbleSubcategories = [
    { folder: 'beiges and cream', name: 'Beiges & Cream', count: 19 },
    { folder: 'greys', name: 'Greys', count: 8 },
    { folder: 'whites', name: 'Whites', count: 7 },
    { folder: 'blacks', name: 'Blacks', count: 5 },
    { folder: 'colors', name: 'Colors', count: 6 },
    { folder: 'onyx', name: 'Onyx', count: 10 },
    { folder: 'travertino', name: 'Travertino', count: 8 },
    { folder: 'indian-marble', name: 'Indian Marble', count: 3 }
  ]

  const graniteSubcategories = [
    { folder: 'indian-granites', name: 'Indian Granites', count: 23 },
    { folder: 'imported-granites', name: 'Imported Granites', count: 5 }
  ]

  const woodSubcategories = [
    { folder: 'laminated wood', name: 'Laminated Wood', count: 20 },
    { folder: 'engineered wood', name: 'Engineered Wood', count: 10 },
    { folder: 'solid hard wood', name: 'Solid Hardwood', count: 10 }
  ]

  const doorsSubcategories = [
    { folder: 'fletcher windows', name: 'Fletcher Windows', count: 4 },
    { folder: 'aluk', name: 'AluK Systems', count: 4 }
  ]

  return {
    marble: marbleSubcategories,
    granite: graniteSubcategories,
    wood: woodSubcategories,
    doors: doorsSubcategories
  }
}

// Get all images for a specific category and subcategory
export function getProductImages(category: string, subcategory: string, count: number) {
  const products: Array<{ id: string; name: string; image: string }> = []
  const basePath = `/assets/${category}/${subcategory}`
  
  // Generate image paths based on known structure
  // In a real implementation, these would be dynamically read
  for (let i = 0; i < count; i++) {
    products.push({
      id: `${category}-${subcategory}-${i}`,
      name: `Product ${i + 1}`, // Will be replaced with actual names
      image: `${basePath}/image-${i}.png` // Placeholder
    })
  }
  
  return products
}

