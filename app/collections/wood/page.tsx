import Link from "next/link";
import Image from "next/image";
import { getCategoryData } from "@/data/catalogueData";
import BackButton from "@/components/BackButton";

export default function WoodCollection() {
  const categoryData = getCategoryData("wood");
  const subcategories = Object.entries(categoryData.subcategories);

  // Map slug to actual filename for cover images
  const imageMap: { [key: string]: string } = {
    'laminated-wood': 'laminated wood',
    'engineered-wood': 'engineered wood',
    'solid-hardwood': 'solid hard wood'
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <BackButton />
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-red-700 mb-6">Wooden Flooring</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {categoryData.description}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {subcategories.map(([slug, subcategory]) => {
          const imageName = imageMap[slug] || slug;
          
          return (
            <Link key={slug} href={`/collections/wood/${slug}`}>
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer">
                <Image
                  src={`/assets/wood/${imageName}.png`}
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

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-heading mb-4">Need expert guidance?</h3>
        <p className="text-gray-600 font-body mb-8 max-w-2xl mx-auto">
          Our specialists are here to help you select the perfect wooden flooring for your project, ensuring beauty and durability.
        </p>
        <Link href="/#contact">
          <button className="px-8 py-3 bg-primary text-white font-body font-semibold rounded-full hover:bg-accent transition-colors duration-300 shadow-lg">
            Book a Consultation
          </button>
        </Link>
      </div>
    </section>
  );
}
