import { Suspense } from "react";
import { type fave } from "@/lib/turso";
import { Item } from "@/components/item";

export const Grid = ({ faves }: { faves: fave[] }) => (
  <Suspense
    fallback={
      <p className="mt-8 text-3xl text-neutral-500 animate-pulse tracking-tight leading-relaxed">
        ᕙ( ~ . ~ )ᕗ
        <br />
        Fetching the images&hellip;
      </p>
    }
  >
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 lg:gap-x-4 2xl:gap-8 items-end">
      {faves.map((row) => (
        <Item key={row.id} item={row} />
      ))}
    </ul>
  </Suspense>
);
