"use client";

import React, { useState } from "react";

export const CopyButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={(e) => {
        navigator.clipboard.writeText(`https://gif.land/${url}`);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          (e.target as HTMLElement).blur();
        }, 2000);
      }}
      className="px-2 h-12 pb-px bg-emerald-500 dark:bg-emerald-800 text-white hover:bg-emerald-700 focus:bg-emerald-700 transition-colors mt-4 flex items-center leading-none rounded-sm"
    >
      {copied ? "copied!" : "copy link to clipboard"}
    </button>
  );
};
