import fs from "fs";
import path from "path";
import ImageLightbox from "@/components/ImageLightbox";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function GraniteSubCategory({ params }: { params: { subcategory: string } }) {
  const dir = path.join(process.cwd(), "public", "assets", "granite", params.subcategory);
  if (!fs.existsSync(dir)) return notFound();

  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f) && f.toLowerCase() !== "cover.jpg")
    .map((f) => ({
      src: `/assets/granite/${params.subcategory}/${f}`,
      name: f
        .replace(/\.[^/.]+$/, "")
        .replace(/freepik/gi, "")
        .replace(/[\d_()-]/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase()),
    }));

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <BackButton label="Back to Granite Collection" />
      <h1 className="text-4xl font-serif text-red-700 mb-10 capitalize">
        {params.subcategory.replace(/-/g, " ")}
      </h1>
      <ImageLightbox images={files} />
    </section>
  );
}
