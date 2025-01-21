import Image from "next/image";
import Link from "next/link";

import { turso, type fave } from "@/lib/turso";

export default async function Home() {
  const { rows } = await turso.execute("SELECT * FROM favourites");
  const faves = rows as fave[]; // cop out but whatever

  return (
    <div className="flex flex-col min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <nav role="navigation">
        <h1>
          Jon’s{" "}
          <Link href="https://bukk.it/" className="underline">
            bukk.it
          </Link>{" "}
          faves
        </h1>
      </nav>
      <main className="flex-1">
        <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {faves.map((row) => (
            <li key={row.id} className="flex flex-col gap-2">
              <Link target="_blank" href={`https://bukk.it/${row.url}`}>
                <Image
                  src={`https://bukk.it/${row.url}`}
                  width={300}
                  height={300}
                  alt={row.url}
                />
              </Link>
              <p className="text-neutral-600">Tags: {row.tags}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-sm text-center">
        <p>
          Powered by{" "}
          <Link href="https://turso.tech/" className="underline">
            turso
          </Link>
          ,{" "}
          <Link href="https://nextjs.org/" className="underline">
            next.js
          </Link>
          , and{" "}
          <Link href="https://tailwindcss.com/" className="underline">
            tailwindcss
          </Link>
        </p>
        <p className="text-balance">
          Thanks to <Link href="https://ethanmarcotte.com/">Ethan</Link> for{" "}
          <Link href="https://bukk.it/" className="underline">
            bukk.it
          </Link>
          , the best archive of GIFs on the internet
        </p>
        <p>Built by Jon Heslop</p>
      </footer>
    </div>
  );
}
