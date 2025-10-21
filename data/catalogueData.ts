// Type definitions for better TypeScript support
export interface SubcategoryData {
  title: string
  description: string
  items: string[]
}

export interface CategoryData {
  title: string
  description: string
  bannerImage: string
  subcategories: Record<string, SubcategoryData>
}

export interface CatalogueData {
  marble: CategoryData
  granite: CategoryData
  wood: CategoryData
  doors: CategoryData
}

export const catalogueData: CatalogueData = {
  marble: {
    title: "Marble Collection",
    description: "Discover our exquisite range of natural marble, hand-picked from the finest quarries around the globe.",
    bannerImage: "/assets/marble-banner.jpg",
    subcategories: {
      "beiges-and-cream": {
        title: "Beiges and Cream",
        description: "Warm, inviting marble varieties in soft beige and cream tones",
        items: ["Atlantic Beige", "Bianco Marfill", "Botticino Classico", "Crema Miele", "Royal Cream", "Crema Valencia", "Botticino Fiorito"]
      },
      greys: {
        title: "Grey Marbles",
        description: "Sophisticated grey marble with elegant veining patterns",
        items: ["Grey Amani", "Fior de Pesco", "Silver Sarpeggiante", "Grey Marfil", "Grey William", "Silver Grey", "Grey Travertino"]
      },
      whites: {
        title: "White Marbles",
        description: "Pure white marble with dramatic veining for luxury interiors",
        items: ["Statuario Extra", "Calacatta", "Lhasa Bianco", "Marmara White", "Calacatta Gold", "Statuario Venato", "Carrara White"]
      },
      blacks: {
        title: "Black Marbles",
        description: "Bold black marble varieties for contemporary designs",
        items: ["Black Portoro", "Ocean Black", "Silver Portoro", "Nero Marquina", "Black Galaxy", "Absolute Black"]
      },
      colors: {
        title: "Colored Marbles",
        description: "Vibrant colored marble varieties for statement pieces",
        items: ["Red Alicante", "Dark Emperador", "Yellow Pearl", "Green Onyx", "Pink Rosa", "Blue Pearl"]
      },
      onyx: {
        title: "Onyx Collection",
        description: "Translucent onyx marble with unique patterns and colors",
        items: ["Honey Onyx", "Dragon Onyx", "White Tiger Onyx", "Green Onyx", "Blue Onyx", "Red Onyx"]
      },
      travertino: {
        title: "Travertino",
        description: "Classic travertino marble with distinctive texture and character",
        items: ["Travertino Classico", "Silver Travertino Dorato", "Roman Travertino", "Turkish Travertino", "Noce Travertino"]
      },
      "indian-marble": {
        title: "Indian Marble",
        description: "Premium Indian marble varieties with unique characteristics",
        items: ["Udaipur Green", "Jaisalmar", "Indian Classic White", "Makrana White", "Kotah Green", "Rajnagar Green"]
      }
    }
  },
  granite: {
    title: "Granite Collection",
    description: "Discover our premium granite collection featuring stones from around the world, known for their durability and beauty.",
    bannerImage: "/assets/granite-banner.jpg",
    subcategories: {
      indian: {
        title: "Indian Granite",
        description: "High-quality granite varieties sourced from Indian quarries",
        items: ["Tan Brown", "Jet Black", "Paradiso", "Shiva Gold", "Steel Grey", "Colonial White", "Absolute Black", "Black Galaxy"]
      },
      imported: {
        title: "Imported Granite",
        description: "Exotic granite varieties from international quarries",
        items: ["Blue Pearl", "Emerald Pearl", "Volga Blue", "Antique Brown", "Baltic Brown", "Giallo Veneziano", "Rosa Beta"]
      },
      browns: {
        title: "Brown Granite",
        description: "Warm brown granite varieties for traditional and modern designs",
        items: ["Tan Brown", "Paradiso Bash", "Antique Brown", "Baltic Brown", "Brown Fantasy", "Coffee Brown"]
      },
      blacks: {
        title: "Black Granite",
        description: "Deep black granite varieties for elegant interiors",
        items: ["Absolute Black", "Black Galaxy", "Jet Black", "Nero Assoluto", "Black Pearl", "Midnight Black"]
      },
      whites: {
        title: "White Granite",
        description: "Clean white granite varieties for bright, modern spaces",
        items: ["Colonial White", "White Galaxy", "Alaska White", "White Ice", "White Pearl", "Snow White"]
      },
      greys: {
        title: "Grey Granite",
        description: "Sophisticated grey granite for contemporary designs",
        items: ["Steel Grey", "Grey Galaxy", "Silver Grey", "Grey Pearl", "Charcoal Grey", "Storm Grey"]
      }
    }
  },
  wood: {
    title: "Wooden Flooring",
    description: "Premium wooden flooring solutions combining natural beauty with modern technology.",
    bannerImage: "/assets/wood-banner.jpg",
    subcategories: {
      "laminated-wood": {
        title: "Laminated Wood",
        description: "Elegant synthetic perfection with natural tone and durability",
        items: ["Beech Mandarin Oak", "Charcoal Anthracite", "Classic Walnut", "Dark Ebony", "Dark Oak Smoky Ash", "Glossy Alder", "Crosscut Oak", "Oak Cherry Mix", "Warm Acacia Teak", "Light Brown Tropical", "Light Brushed Oak", "Light Maple Cherry", "Mandarin Oak Walnut", "Natural Oak Pine", "Natural Oak Subtle", "Parisian Oiled Oak", "Rustic Wine Toned", "Silver Oak Walnut", "Western Oak Mid Brown", "White Stained Ebony"]
      },
      "engineered-wood": {
        title: "Engineered Wood",
        description: "Stable engineered wood flooring for all environments",
        items: ["Cappuccino Oak", "Copper Toned Oak", "Engineered Ash Light", "Engineered Cream Oak", "Engineered Nusbam", "Herringbone Oak", "Prime Oak Detailed", "Prime Wood Smooth", "Sucupira Reddish", "Wenge Rustic Dark"]
      },
      "solid-hardwood": {
        title: "Solid Hardwood",
        description: "Premium solid wood flooring for luxury interiors",
        items: ["Natural Oak Polished", "Caramel Tone Glossy", "Cumaru Rich Brown", "American Walnut Dark", "Jatoba Reddish Hue", "Marabu Warm Reddish", "Oak Tiger Eye", "Oak Coffee Brown", "Smoked Black Oak", "Teak Stained Natural"]
      },
      "decking": {
        title: "Decking",
        description: "Outdoor decking solutions for patios and terraces",
        items: ["Ipe Grooved Texture", "Ipe Plain Matte"]
      }
    }
  },
  doors: {
    title: "Doors & Windows",
    description: "Precision-engineered aluminium frames for light, sound, and design harmony.",
    bannerImage: "/assets/doors-banner.jpg",
    subcategories: {
      "fletcher-windows": {
        title: "Fletcher Windows",
        description: "Global pioneer in aluminum fenestration systems with precision engineering and timeless elegance",
        items: ["Corporate Interior Full Height", "Aluminum Frame Corner Joint", "Modern Home Sliding", "Modern Villa Exterior", "Precision Engineering", "Structural Strength", "Design Flexibility"]
      },
      "aluk": {
        title: "AluK Doors & Windows",
        description: "Modern European technology fused with minimalist Indian architecture for maximum performance",
        items: ["Elegant Loft Sliding Door", "Luxury Villa Door Systems", "Professional Studio Frame", "Urban Apartment Windows", "Energy Efficiency", "Customized Finishes", "Lifetime Reliability"]
      }
    }
  }
};

export type CategoryKey = keyof typeof catalogueData;
export type SubcategoryKey<T extends CategoryKey> = keyof typeof catalogueData[T]['subcategories'];
export type ItemList<T extends CategoryKey, S extends SubcategoryKey<T>> = typeof catalogueData[T]['subcategories'][S]['items'];

// Helper function to get category data
export function getCategoryData(category: string): CategoryData {
  const data = catalogueData[category as keyof CatalogueData];
  if (!data) {
    throw new Error(`Category "${category}" not found`);
  }
  return data;
}

// Helper function to get subcategory data
export function getSubcategoryData(
  category: string, 
  subcategory: string
): SubcategoryData {
  const categoryData = catalogueData[category as keyof CatalogueData];
  if (!categoryData) {
    throw new Error(`Category "${category}" not found`);
  }
  const subcategoryData = categoryData.subcategories[subcategory];
  if (!subcategoryData) {
    throw new Error(`Subcategory "${subcategory}" not found in category "${category}"`);
  }
  return subcategoryData;
}

// Helper function to get all subcategories for a category
export function getSubcategories(category: string): string[] {
  const categoryData = catalogueData[category as keyof CatalogueData];
  if (!categoryData) {
    throw new Error(`Category "${category}" not found`);
  }
  return Object.keys(categoryData.subcategories);
}

// Helper function to check if a category exists
export function isValidCategory(category: string): boolean {
  return category in catalogueData;
}

// Helper function to check if a subcategory exists for a category
export function isValidSubcategory(
  category: string, 
  subcategory: string
): boolean {
  if (!isValidCategory(category)) {
    return false;
  }
  const categoryData = catalogueData[category as keyof CatalogueData];
  return subcategory in categoryData.subcategories;
}
