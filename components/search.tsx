"use client";

import React, { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        }}
        className="border-b focus:border-neutral-900 ring-0 outline-none appearance-none dark:bg-neutral-950 rounded-none w-24 sm:w-auto"
      />
    </form>
  );
};
