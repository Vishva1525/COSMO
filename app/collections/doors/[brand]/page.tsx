import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import ImageLightbox from "@/components/ImageLightbox";
import BrandPageClient from "./BrandPageClient";

interface BrandPageProps {
  params: {
    brand: string;
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brandSlug = params.brand;
  
  // Brand configuration
  const brandConfig = {
    "fletcher-windows": {
      name: "Fletcher Windows",
      description: "Fletcher Windows, a world-renowned aluminum fenestration brand, offers precision-engineered frames that combine structural strength, acoustic and thermal performance, and seamless modern aesthetics—ideal for high-rise façades, villas, and commercial spaces. Cosmo ensures every installation meets global standards of alignment, finish, and durability.",
      folderName: "fletcher windows"
    },
    "aluk": {
      name: "AluK Doors & Windows",
      description: "AluK merges European minimalism with Indian craftsmanship. Its systems deliver exceptional energy efficiency, weather resistance, and slim-profile elegance. Cosmo provides complete customization, imported hardware, and lifetime service for flawless long-term performance.",
      folderName: "aluk"
    }
  };

  const brand = brandConfig[brandSlug as keyof typeof brandConfig];
  
  if (!brand) {
    notFound();
  }

  // Read images from the brand folder
  const baseDir = path.join(process.cwd(), "public", "assets", "doors");
  const brandDir = path.join(baseDir, brand.folderName);
  
  let images: { src: string; name: string }[] = [];
  
  if (fs.existsSync(brandDir)) {
    const imageFiles = fs
      .readdirSync(brandDir)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => ({
        src: `/assets/doors/${brand.folderName}/${file}`,
        name: `${brand.name} – ${file
          .replace(/\.[^/.]+$/, "")
          .replace(/freepik__/gi, "")
          .replace(/[\d_()-]/g, " ")
          .replace(/\s{2,}/g, " ")
          .trim()
          .replace(/\b\w/g, (c) => c.toUpperCase())}`
      }));
    
    images = imageFiles;
  }

  return (
    <BrandPageClient 
      brand={brand}
      images={images}
    />
  );
}

// Generate static params for all brands
export async function generateStaticParams() {
  return [
    { brand: "fletcher-windows" },
    { brand: "aluk" }
  ];
}

// Generate metadata for each brand
export async function generateMetadata({ params }: BrandPageProps) {
  const brandSlug = params.brand;
  
  const brandConfig = {
    "fletcher-windows": {
      name: "Fletcher Windows",
      description: "Precision-engineered aluminum fenestration systems for high-rise façades, villas, and commercial spaces."
    },
    "aluk": {
      name: "AluK Doors & Windows", 
      description: "European minimalism meets Indian craftsmanship. Exceptional energy efficiency and slim-profile elegance."
    }
  };

  const brand = brandConfig[brandSlug as keyof typeof brandConfig];
  
  if (!brand) {
    return {
      title: 'Brand Not Found | Cosmo Granites',
    };
  }

  return {
    title: `${brand.name} | Cosmo Granites`,
    description: brand.description,
  };
}