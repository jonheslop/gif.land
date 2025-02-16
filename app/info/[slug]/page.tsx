import { turso, type fave } from "@/lib/turso";
import Link from "next/link";
import { CopyButton } from "../../../components/copy-button";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { InfoImage } from "@/components/zoom-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${slug} - gif.land`,
    openGraph: {
      images: [`https://gif.land/${slug}`],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { rows } = await turso.execute(
    `SELECT * FROM favourites WHERE URL = "${slug}"`,
  );
  const faves = rows as fave[];

  const item = faves[0];

  if (!item) {
    return notFound();
  }
  const tags = item.tags.split(", ");

  const isPortrait = item.width < item.height;

  const widthLessThan380 = item.width < 380;

  return (
    <div className="flex flex-col lg:grid grid-cols-4 gap-4 lg:gap-8 xl:mt-4">
      <InfoImage item={JSON.parse(JSON.stringify(item))} />
      <Suspense
        fallback={
          <p className="mt-8 text-3xl text-neutral-500 animate-pulse tracking-tight leading-relaxed">
            ᕙ( ~ . ~ )ᕗ
            <br />
            Fetching the info&hellip;
          </p>
        }
      >
        <article
          className={`mix-blend-difference bg-white/30 p-4 -m-4 -mt-6 rounded self-start ${isPortrait && widthLessThan380 ? "lg:col-start-3" : "lg:col-start-4"}`}
        >
          <h1 className="leading-tight text-3xl">
            <Link
              className="underline underline-offset-2 hover:text-emerald-700 hover:dark:text-emerald-500"
              target="_blank"
              href={`https://gif.land/${item.url}`}
            >
              {item.url}
            </Link>
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
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
          <CopyButton url={item.url} />
        </article>
      </Suspense>
    </div>
  );
}
