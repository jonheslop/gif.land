"use client";

import React, { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form action={`/search/${searchTerm}`}>
      <input
        type="search"
        placeholder="Search…"
        onChange={(e) => setSearchTerm(e.target.value)}
        onBlur={(e) => e.target.form?.submit()}
        className="border-b focus:border-neutral-900 ring-0 outline-none appearance-none"
      />
    </form>
  );
};
