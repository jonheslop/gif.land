"use client";

import { StyledLink as Link } from "../components/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const lastPath = pathname.split("/").pop();

  return (
    <div className="flex flex-col lg:grid grid-cols-4 gap-4 lg:gap-8 xl:mt-4">
      <figure className="col-span-4 lg:col-span-3">
        <Image
          className="w-full"
          src="https://gif.land/plainview-sadness.gif"
          width={500}
          height={205}
          alt="https://gif.land/plainview-sadness.gif"
          unoptimized={true}
        />
        <figcaption className="text-sm flex flex-col">
          <Link target="_blank" href="https://gif.land/plainview-sadness.gif">
            plainview-sadness.gif
          </Link>
          <span className="text-neutral-500">
            Source:{" "}
            <Link target="_blank" href="https://iwdrm.tumblr.com/">
              iwdrm.tumblr.com
            </Link>
          </span>
        </figcaption>
      </figure>
      <article className="mt-8 lg:mt-0 self-start">
        <h3 className="text-sm text-neutral-500 leading-none">Error 404</h3>
        <h1 className="leading-tight text-3xl">Page not found</h1>
        <p className="py-4 text-pretty">
          The file that you’re looking for is not here
        </p>
        <p>
          Search{" "}
          <Link href={`/search/${lastPath}`}>
            gif.land for <em>‘{lastPath}’</em>
          </Link>{" "}
          or <Link href="/">return home</Link>
        </p>
      </article>
    </div>
  );
}
