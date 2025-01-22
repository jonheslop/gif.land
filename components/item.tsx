import { fave } from "@/lib/turso";
import Image from "next/image";
import Link from "next/link";

export const Item = ({ item }: { item: fave }) => (
  <li className="flex flex-col gap-2">
    <Link target="_blank" href={`https://bukk.it/${item.url}`}>
      <Image
        src={`https://bukk.it/${item.url}`}
        width={400}
        height={400}
        alt={item.url}
        unoptimized={item.url.includes(".gif")}
      />
    </Link>
    <div>
      <p className="text-sm leading-tight">
        <Link
          className="underline"
          target="_blank"
          href={`https://bukk.it/${item.url}`}
        >
          {item.url}
        </Link>
      </p>
      <p className="text-sm leading-tight text-neutral-500">
        Tags: {item.tags}
      </p>
    </div>
  </li>
);
