"use client";

import React, { useState, useEffect } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const searchShortCutListener = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        document.getElementById("search")?.focus();
        document.getElementById("search")?.classList.add("flash");
      }
    };

    document.addEventListener("keydown", searchShortCutListener);

    return () => {
      document.removeEventListener("keydown", searchShortCutListener);
    };
  }, []);

  return (
    <form action={`/search/${searchTerm}`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search…"
        onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={(e) => {
          if (searchTerm !== "") e.target.form?.submit();
          e.target.classList.remove("flash");
        }}
        className="border-b focus:border-neutral-900 ring-0 outline-hidden appearance-none dark:bg-neutral-950 rounded-none w-20 sm:w-auto"
      />
    </form>
  );
};
