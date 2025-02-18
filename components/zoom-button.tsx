"use client";

import React, { useState } from "react";
import Image from "next/image";
import { fave } from "@/lib/turso";
import { createZoomedCookie, deleteZoomedCookie } from "@/app/actions";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";

export const InfoImage = ({
  item,
  zoomed,
}: {
  item: fave;
  zoomed: boolean;
}) => {
  const [isZoomed, setIsZoomed] = useState(zoomed);
  const isPortrait = item.width < item.height;
  const widthLessThan380 = item.width < 380;

  const handleClick = () => {
    setIsZoomed(!isZoomed);

    if (!isZoomed) {
      createZoomedCookie();
    } else {
      deleteZoomedCookie();
    }
  };

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
          className={`absolute top-2 left-2 z-10 px-2 size-12 pb-px bg-emerald-500 dark:bg-emerald-800 text-white hover:bg-emerald-700 focus:bg-emerald-700 transition-colors flex justify-center items-center leading-none rounded ${isZoomed ? "mix-blend-difference" : ""}`}
          onClick={() => handleClick()}
        >
          {isZoomed ? (
            <>
              <ExitFullScreenIcon className="size-6" />
              <span className="sr-only">Exit full screen</span>
            </>
          ) : (
            <>
              <EnterFullScreenIcon className="size-6" />
              <span className="sr-only">Enter full screen</span>
            </>
          )}
        </button>
      </figure>

      {isZoomed && (
        <div
          className="bg-contain bg-center fixed inset-0 w-full z-0"
          style={{ backgroundImage: `url('https://gif.land/${item.url}')` }}
        ></div>
      )}
    </>
  );
};
