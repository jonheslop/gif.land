"use client";

import { StyledLink as Link } from "../components/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const lastPath = pathname.split("/").pop();

  return (
    <div className="py-16 xl:py-32 flex flex-col md:flex-row gap-4">
      <figure>
        <Image
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
      <div className="-mt-px">
        <h3 className="text-sm text-neutral-500 leading-none">Error 404</h3>
        <h2 className="text-2xl">Page not found</h2>
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
      </div>
    </div>
  );
}
