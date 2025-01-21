import { fave } from "@/lib/turso";
import Image from "next/image";
import Link from "next/link";

export const Item = ({ item }: { item: fave }) => (
  <li className="flex flex-col gap-2">
    <Link target="_blank" href={`https://bukk.it/${item.url}`}>
      <Image
        src={`https://bukk.it/${item.url}`}
        width={300}
        height={300}
        alt={item.url}
      />
    </Link>
    <p className="text-sm text-neutral-600">Tags: {item.tags}</p>
  </li>
);
