import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function GranitePage() {
  const categories = [
    {
      name: "Indian Granites",
      slug: "indian-granites",
      image: "/assets/granite/indian-granites/cover.jpg",
    },
    {
      name: "Imported Granites",
      slug: "imported-granites",
      image: "/assets/granite/imported-granites/cover.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <BackButton />
      <h1 className="text-5xl font-serif text-red-700 mb-12">Granite Collection</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/collections/granite/${cat.slug}`}>
            <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <Image
                src={cat.image}
                alt={cat.name}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>
              <div className="absolute bottom-0 w-full bg-black/60 py-3 text-center">
                <h3 className="text-white text-lg font-serif">{cat.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
