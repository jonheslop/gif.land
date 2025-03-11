import { turso, type fave } from "@/lib/turso";
import { StyledLink as Link } from "@/components/link";
import { CopyButton } from "@/components/copy-button";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { InfoImage } from "@/components/zoom-button";
import { cookies } from "next/headers";

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

  const cookieStore = await cookies();
  const hasZoomedCookie = cookieStore.has("zoomed");

  const item = faves[0];

  if (!item) {
    return notFound();
  }
  const tags = item.tags.split(", ");

  const isPortrait = item.width < item.height;

  const widthLessThan380 = item.width < 380;

  return (
    <div className="flex flex-col lg:grid grid-cols-4 gap-4 lg:gap-8 xl:mt-4">
      <InfoImage
        zoomed={hasZoomedCookie}
        item={JSON.parse(JSON.stringify(item))}
      />
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
          className={`z-20 mix-blend-difference hover:mix-blend-normal hover:bg-white transition-colors p-4 -m-4 -mt-6 rounded-sm self-start ${isPortrait && widthLessThan380 ? "lg:col-start-3" : "lg:col-start-4"}`}
        >
          <h1 className="leading-tight text-3xl break-all">
            <Link target="_blank" href={`https://gif.land/${item.url}`}>
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
