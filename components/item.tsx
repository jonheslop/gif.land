import { fave } from "@/lib/turso";
import Image from "next/image";
import { StyledLink as Link } from "./link";
import React from "react";

export const Item = ({ item }: { item: fave }) => {
  const tags = item.tags.split(", ");
  return (
    <li className="flex flex-col gap-2 group">
      <Link target="_blank" href={`https://gif.land/${item.url}`}>
        <Image
          className="w-full"
          src={`https://gif.land/${item.url}`}
          width={item.width}
          height={item.height}
          alt={item.url}
          unoptimized={item.url.includes(".gif")}
        />
      </Link>
      <div>
        <header className="flex justify-between">
          <p className="text-sm leading-tight truncate" title={item.url}>
            <Link target="_blank" href={`https://gif.land/${item.url}`}>
              {item.url}
            </Link>
          </p>
          <Link
            className="hover:underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-500 text-sm leading-none hidden group-hover:block"
            href={`/info/${item.url}`}
          >
            # <span className="sr-only">Info</span>
          </Link>
        </header>
        <p className="text-sm leading-tight text-neutral-500 dark:text-neutral-400 mt-0.5">
          Tags:{" "}
          {tags.map((tag, index) => (
            <Link
              href={`/search/${encodeURI(tag)}`}
              key={index}
              className="hover:underline"
            >
              {tag}
              {index < tags.length - 1 ? ", " : ""}
            </Link>
          ))}
        </p>
      </div>
    </li>
  );
};
