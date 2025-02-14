import { turso, type fave } from "@/lib/turso";
import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "../../../components/copy-button";
import { Suspense } from "react";

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
    // TODO: show 404 page
    return <div>Not found</div>;
  }
  const tags = item.tags.split(", ");

  return (
    <div className="flex flex-col lg:grid grid-cols-3 gap-4 mt-8 lg:mt-16">
      <Link
        target="_blank"
        href={`https://gif.land/${slug}`}
        className="relative col-span-2 aspect-video"
      >
        <Image
          className="z-0"
          src={`https://gif.land/${slug}`}
          width={item.width}
          height={item.height}
          alt={slug}
          unoptimized={slug.includes(".gif")}
        />
      </Link>
      <Suspense
        fallback={
          <p className="mt-8 text-3xl text-neutral-500 animate-pulse tracking-tight leading-relaxed">
            ᕙ( ~ . ~ )ᕗ
            <br />
            Fetching the info&hellip;
          </p>
        }
      >
        <article className="-mt-2 z-10 col-start-3 self-start bg-neutral-50/20">
          <h1 className="leading-tight text-3xl mb-8">
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
