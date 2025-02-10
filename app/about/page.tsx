import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-16 2xl:py-32 flex flex-col md:flex-row gap-4 lg:gap-8">
      <figure>
        <Image
          src="https://gif.land/plagued-by-concepts.jpg"
          width={680}
          height={652}
          alt="A cute looking felt mouse in a bonnet holding a knife and a raspberry"
          priority={true}
        />
        <figcaption className="text-sm flex flex-col">
          <Link
            target="_blank"
            className="underline underline-offset-2 hover:text-emerald-700 hover:dark:text-emerald-500"
            href="https://gif.land/plagued-by-concepts.jpg"
          >
            plagued-by-concepts.jpg
          </Link>
        </figcaption>
      </figure>
      <div className="-mt-px max-w-lg">
        <h3 className="text-sm text-neutral-500 leading-none">
          What the heck is
        </h3>
        <h2 className="text-2xl">gif.land?</h2>
        <p className="my-4 text-pretty">
          I (
          <Link
            className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            href="https://jonheslop.com/"
          >
            Jon Heslop
          </Link>
          ) made this site as an easy way to get urls to the gifs that I love.
          Also just because it’s fun to make websites. I wrote a little more
          about it on{" "}
          <Link
            className="underline underline-offset-2 hover:text-emerald-700 hover:dark:text-emerald-500"
            href="https://jonheslop.com/posts/2025/gif-land"
            target="_blank"
          >
            my blog
          </Link>
          .
        </p>
        <p className="text-pretty 2xl:col-span-3 xl:pr-16">
          Thanks to{" "}
          <Link
            href="https://ethanmarcotte.com/wrote/bukkit/"
            className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
          >
            Ethan for the inspiration
          </Link>{" "}
          and for{" "}
          <Link
            href="https://bukk.it/"
            className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
          >
            bukk.it
          </Link>
          , the best GIF archive on the internet.
        </p>{" "}
        <p className="mt-4 mb-2 text-pretty">
          The site uses the following tech:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <Link
              href="https://www.cloudflare.com/en-gb/developer-platform/products/r2/"
              className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            >
              Cloudflare R2
            </Link>{" "}
            <em>— to host the images</em>
          </li>
          <li>
            <Link
              href="https://turso.tech/"
              className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            >
              Turso
            </Link>{" "}
            <em>— an SQLite database to query the images and tag metadata</em>
          </li>
          <li>
            <Link
              href="https://nextjs.org/"
              className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            >
              Next.js
            </Link>{" "}
            <em>— to power home.gif.land</em>
          </li>
          <li>
            <Link
              href="https://github.com/partykit/cursor-party"
              className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            >
              Cursor Party
            </Link>{" "}
            <em>
              — because{" "}
              <Link
                className="underline underline-offset-2 hover:text-emerald-700 hover:dark:text-emerald-500"
                href="https://interconnected.org/home/2024/09/05/cursor-party"
                target="_blank"
              >
                every website deserves to be a place
              </Link>
            </em>
          </li>
        </ul>
        <p className="my-4 text-pretty">
          Typeset in{" "}
          <Link
            className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            href="https://klim.co.nz/collections/soehne/"
          >
            Söhne
          </Link>{" "}
          by{" "}
          <Link
            className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            href="https://klim.co.nz/"
          >
            Klim Type Foundry.
          </Link>
        </p>
        <p className="my-4 text-pretty">
          You can see/fork the code over on{" "}
          <Link
            className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
            href="https://github.com/jonheslop/gif.land"
          >
            Github
          </Link>
          .
        </p>
        <p className="my-4 text-pretty">
          You can email me at{" "}
          <code className="font-mono text-sm bg-neutral-100 px-2 py-1 text-emerald-900">
            webmaster @ gif.land
          </code>
        </p>
        <Link
          className="underline underline-offset-2 hover:text-emerald-700 hover:dark:text-emerald-500"
          href="/"
        >
          Get back to the gifs &raquo;
        </Link>
      </div>
    </div>
  );
}
