"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ label = "Back" }: { label?: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-md text-sm font-medium text-gray-800 hover:text-brand-red transition bg-white/40 backdrop-blur-sm shadow-sm"
    >
      <ArrowLeft size={18} />
      {label}
    </button>
  );
}
