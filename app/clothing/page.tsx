"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProductGallery from "@/components/ProductGallery";
import RatingStars from "@/components/RatingStars";
import Button from "@/components/Button";
import content from "@/data/content.json";
import { useState } from "react";

export default function ClothingPage() {
  const { title, price, description, images, sizes, colors, care } =
    content.clothing;
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <div className="bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 text-xs text-gray-500 font-medium">
          <span className="hover:underline cursor-pointer hover:text-orange-700">
            Back to results
          </span>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer hover:text-orange-700">
            Clothing
          </span>
          <span className="mx-2">/</span>
          <span className="hover:underline cursor-pointer hover:text-orange-700">
            Men's Fashion
          </span>
          <span className="mx-2">/</span>
          <span className="text-black font-bold">Jackets</span>
        </div>
      </div>

      <SectionWrapper className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Gallery (5 cols) */}
          <div className="lg:col-span-5">
            <ProductGallery images={images} vertical={true} />
          </div>

          {/* Column 2: Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h1 className="text-2xl font-medium text-black mb-2 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-2 mb-4 text-sm">
              <RatingStars rating={4.5} />
              <span className="text-cyan-700 hover:text-orange-700 hover:underline cursor-pointer">
                8,420 ratings
              </span>
            </div>

            <hr className="border-gray-200 mb-4" />

            <div className="mb-4">
              <span className="align-top text-xs relative top-[-4px]">$</span>
              <span className="text-3xl font-medium text-black">
                {price.replace("$", "")}
              </span>
              <span className="text-base text-gray-500 ml-2">
                {" "}
                &{" "}
                <span className="text-cyan-700 hover:underline cursor-pointer">
                  FREE Returns
                </span>
              </span>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Color:{" "}
                <span className="font-normal text-black">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onMouseEnter={() => setSelectedColor(color.name)}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border border-gray-300 p-0.5 hover:ring-2 hover:ring-orange-400 ${
                      selectedColor === color.name
                        ? "ring-2 ring-orange-600 border-transparent shadow-sm"
                        : ""
                    }`}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Size:{" "}
                <span className="font-normal text-black">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 rounded-md border text-sm shadow-sm transition-all ${
                      selectedSize === size
                        ? "border-orange-600 bg-orange-50 text-orange-900 font-bold ring-1 ring-orange-600"
                        : "border-gray-300 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-black">About this item</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>{description}</li>
                <li>
                  Premium quality fabric blend for durability and comfort.
                </li>
                <li>{care}</li>
                <li>Perfect for casual wear, dates, and semi-formal events.</li>
                <li>Available in multiple modern colorways.</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Buy Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="border border-gray-300 rounded-lg p-5 shadow-sm bg-white">
              <div className="mb-4">
                <span className="align-top text-xs relative top-[-4px]">$</span>
                <span className="text-3xl font-medium text-black">
                  {price.replace("$", "")}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <span className="text-cyan-700 hover:underline cursor-pointer">
                  FREE delivery
                </span>
                <span className="font-bold text-black ml-1">
                  Thursday, Feb 22
                </span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-cyan-700 hover:underline cursor-pointer">
                  Deliver to New York 10001
                </span>
              </div>

              <h3 className="text-lg font-medium text-green-700 mb-4">
                In Stock
              </h3>

              <div className="space-y-3">
                <Button
                  fullWidth
                  className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-500 shadow-sm"
                >
                  Add to Cart
                </Button>
                <Button
                  fullWidth
                  className="rounded-full bg-orange-400 hover:bg-orange-500 text-black border-orange-500 shadow-sm"
                >
                  Buy Now
                </Button>
              </div>

              <div className="mt-4 text-xs text-gray-500 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-400">Ships from</span>
                  <span>AngryTale.com</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-400">Sold by</span>
                  <span className="text-cyan-700 hover:underline cursor-pointer">
                    AngryTale Fashion
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-400">Returns</span>
                  <span className="text-cyan-700 hover:underline cursor-pointer">
                    30-day refund/replace
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
