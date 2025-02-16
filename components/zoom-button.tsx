"use client";

import React, { useState } from "react";
import Image from "next/image";
import { fave } from "@/lib/turso";

export const InfoImage = ({ item }: { item: fave }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const isPortrait = item.width < item.height;
  const widthLessThan380 = item.width < 380;

  return (
    <>
      <figure
        className={`relative col-span-4 ${isPortrait ? (widthLessThan380 ? "lg:col-span-1" : "lg:col-span-2") : "lg:col-span-3"}`}
      >
        <Image
          id="main-image"
          className={`${isPortrait ? (widthLessThan380 ? "object-fill" : "object-fill") : "w-full"}`}
          src={`https://gif.land/${item.url}`}
          width={item.width}
          height={item.height}
          alt={item.url}
          unoptimized={item.url.includes(".gif")}
          priority={true}
        />
        <button
          className={`absolute top-2 left-2 z-10 px-2 h-12 pb-px bg-emerald-500 dark:bg-emerald-800 text-white hover:bg-emerald-700 focus:bg-emerald-700 transition-colors flex items-center leading-none rounded ${isZoomed ? "mix-blend-difference" : ""}`}
          onClick={() => {
            setIsZoomed(!isZoomed);
          }}
        >
          zoom
        </button>
      </figure>

      {isZoomed && (
        <div
          className="bg-cover bg-center absolute inset-0 w-full z-0"
          style={{ backgroundImage: `url('https://gif.land/${item.url}')` }}
        ></div>
      )}
    </>
  );
};
