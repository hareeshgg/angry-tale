"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  vertical?: boolean;
}

export default function ProductGallery({
  images,
  vertical = false,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div
      className={`flex gap-4 ${vertical ? "flex-col-reverse md:flex-row" : "flex-col"}`}
    >
      {/* Thumbnails */}
      <div
        className={`flex gap-2 overflow-auto scrollbar-hide ${
          vertical
            ? "md:flex-col w-full md:w-20 md:h-96"
            : "grid grid-cols-4 w-full"
        }`}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onMouseEnter={() => setActiveImage(image)}
            onClick={() => setActiveImage(image)}
            className={`relative aspect-square overflow-hidden rounded-lg bg-white border flex-shrink-0 ${
              vertical ? "w-16 h-16 md:w-full md:h-auto" : "w-full"
            } ${
              activeImage === image
                ? "ring-2 ring-orange-400 border-orange-400"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-contain p-1"
              sizes="100px"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative aspect-square w-full flex-1 overflow-hidden bg-white flex items-center justify-center border border-gray-100 rounded-lg">
        <Image
          src={activeImage}
          alt="Product active view"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}
