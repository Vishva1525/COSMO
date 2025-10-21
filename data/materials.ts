export interface MaterialInfo {
  id: string
  name: string
  category: 'marble' | 'granite' | 'wood' | 'doors'
  origin: string
  characteristics: string[]
  applications: string[]
  maintenance: string
  description: string
  technicalSpecs: {
    hardness?: string
    porosity?: string
    finish?: string
    durability?: string
  }
}

export const materialsData: MaterialInfo[] = [
  {
    id: 'botticino-classico',
    name: 'Botticino Classico',
    category: 'marble',
    origin: 'Italy',
    characteristics: ['Warm beige tones', 'Subtle veining', 'High polish capability', 'Timeless elegance'],
    applications: ['Flooring', 'Countertops', 'Wall cladding', 'Bathroom surfaces'],
    maintenance: 'Regular sealing recommended. Clean with pH-neutral products.',
    description: 'A classic Italian marble known for its warm beige background with subtle cream and gold veining. Botticino Classico offers exceptional versatility and timeless appeal, making it perfect for both traditional and contemporary designs.',
    technicalSpecs: {
      hardness: 'Medium',
      porosity: 'Low-Medium',
      finish: 'Polished, Honed, Brushed',
      durability: 'High'
    }
  },
  {
    id: 'carrara-white',
    name: 'Carrara White',
    category: 'marble',
    origin: 'Italy',
    characteristics: ['Pure white background', 'Gray veining', 'Classic beauty', 'Versatile design'],
    applications: ['Kitchen countertops', 'Bathroom walls', 'Flooring', 'Sculptural elements'],
    maintenance: 'Requires regular sealing. Avoid acidic cleaners.',
    description: 'The iconic Carrara White marble from the Italian Alps. Known for its pure white background with distinctive gray veining, it has been used in architecture and art for centuries.',
    technicalSpecs: {
      hardness: 'Medium',
      porosity: 'Medium',
      finish: 'Polished, Honed',
      durability: 'High'
    }
  },
  {
    id: 'absolute-black',
    name: 'Absolute Black',
    category: 'granite',
    origin: 'India',
    characteristics: ['Deep black color', 'Minimal veining', 'High density', 'Luxury finish'],
    applications: ['Kitchen countertops', 'Flooring', 'Wall cladding', 'Outdoor applications'],
    maintenance: 'Low maintenance. Regular cleaning with mild soap.',
    description: 'A premium black granite from India, known for its deep, consistent black color with minimal veining. Perfect for creating dramatic, sophisticated spaces.',
    technicalSpecs: {
      hardness: 'High',
      porosity: 'Very Low',
      finish: 'Polished, Honed, Flamed',
      durability: 'Very High'
    }
  },
  {
    id: 'engineered-oak',
    name: 'Engineered Oak',
    category: 'wood',
    origin: 'European Oak',
    characteristics: ['Stability', 'Moisture resistance', 'Easy installation', 'Sustainable'],
    applications: ['Residential flooring', 'Commercial spaces', 'Radiant heating compatible'],
    maintenance: 'Regular sweeping and damp mopping. Avoid excessive moisture.',
    description: 'Premium engineered oak flooring combining the beauty of natural wood with advanced engineering for superior stability and performance.',
    technicalSpecs: {
      hardness: 'Medium-High',
      porosity: 'Low',
      finish: 'Natural, Brushed, Oiled',
      durability: 'High'
    }
  },
  {
    id: 'fletcher-aluminum',
    name: 'Fletcher Aluminum Systems',
    category: 'doors',
    origin: 'Australia',
    characteristics: ['Thermal efficiency', 'Weather resistance', 'Low maintenance', 'Modern aesthetics'],
    applications: ['Residential windows', 'Commercial facades', 'High-rise buildings'],
    maintenance: 'Minimal maintenance. Annual cleaning recommended.',
    description: 'Advanced aluminum fenestration systems offering exceptional thermal performance, weather resistance, and contemporary design possibilities.',
    technicalSpecs: {
      hardness: 'High',
      porosity: 'None',
      finish: 'Anodized, Powder Coated',
      durability: 'Very High'
    }
  }
]

export function getMaterialById(id: string): MaterialInfo | undefined {
  return materialsData.find(material => material.id === id)
}

export function getMaterialsByCategory(category: string): MaterialInfo[] {
  return materialsData.filter(material => material.category === category)
}
