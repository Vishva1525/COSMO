import Image from "next/image";

interface PlaceholderImageProps {
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function PlaceholderImage({ 
  alt = "Image coming soon", 
  className = "",
  width,
  height 
}: PlaceholderImageProps) {
  return (
    <div className={`relative w-full bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity duration-300 ${className}`}>
      {/* Optional pattern overlay */}
      <div className="absolute inset-0 bg-[url('/assets/placeholder-pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg 
            className="w-6 h-6 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
        <span className="text-gray-400 text-sm font-medium font-body">
          {alt}
        </span>
      </div>
    </div>
  );
}
