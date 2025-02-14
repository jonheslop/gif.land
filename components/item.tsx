import { fave } from "@/lib/turso";
import Image from "next/image";
import { StyledLink as Link } from "./link";

export const Item = ({ item }: { item: fave }) => {
  const tags = item.tags.split(", ");
  return (
    <li className="flex flex-col gap-2">
      <Link target="_blank" href={`https://gif.land/${item.url}`}>
        <Image
          src={`https://gif.land/${item.url}`}
          width={item.width}
          height={item.height}
          alt={item.url}
          unoptimized={item.url.includes(".gif")}
        />
      </Link>
      <div>
        <p className="text-sm leading-tight truncate" title={item.url}>
          <Link target="_blank" href={`https://gif.land/${item.url}`}>
            {item.url}
          </Link>
        </p>
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
