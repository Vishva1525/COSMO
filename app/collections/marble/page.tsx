import Link from "next/link";
import Image from "next/image";
import { getCategoryData } from "@/data/catalogueData";
import BackButton from "@/components/BackButton";

export default function MarbleCollection() {
  const categoryData = getCategoryData("marble");
  const subcategories = Object.entries(categoryData.subcategories);

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <BackButton />
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-red-700 mb-6">Marble Collection</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {categoryData.description}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {subcategories.map(([slug, subcategory]) => {
          // Map slug to actual filename
          const imageMap: { [key: string]: string } = {
            'beiges-and-cream': 'beiges and cream',
            'indian-marble': 'indian-marble'
          };
          const imageName = imageMap[slug] || slug;
          
          return (
            <Link key={slug} href={`/collections/marble/${slug}`}>
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer">
                <Image
                  src={`/assets/marble/${imageName}.png`}
                  alt={subcategory.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500"></div>
              <div className="absolute bottom-0 w-full bg-black/60 py-4 text-center">
                <h3 className="text-white text-lg font-serif font-semibold mb-1">
                  {subcategory.title}
                </h3>
                <p className="text-gray-200 text-sm px-2">
                  {subcategory.description}
                </p>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
