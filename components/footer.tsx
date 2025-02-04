import Link from "next/link";

export const Footer = () => (
  <footer className="row-start-3 flex gap-4 mt-16 lg:gap-12 xl:gap-8 flex-wrap items-center text-sm xl:grid grid-cols-3 2xl:grid-cols-8">
    <p className="text-balance 2xl:col-span-3">
      Thanks to{" "}
      <Link
        href="https://ethanmarcotte.com/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        Ethan
      </Link>{" "}
      for{" "}
      <Link
        href="https://bukk.it/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        bukk.it
      </Link>
      , the best archive of GIFs on the internet
    </p>
    <p className="2xl:col-span-3">
      Powered by{" "}
      <Link
        href="https://www.cloudflare.com/en-gb/developer-platform/products/r2/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        Cloudflare R2
      </Link>
      ,{" "}
      <Link
        href="https://turso.tech/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        Turso
      </Link>
      ,{" "}
      <Link
        href="https://nextjs.org/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        Next.js
      </Link>
      , and{" "}
      <Link
        href="https://tailwindcss.com/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        TailwindCSS
      </Link>
    </p>
    <p className="2xl:col-span-2">
      <Link
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
        href="https://github.com/jonheslop/bukkit-faves"
      >
        Thrown together
      </Link>{" "}
      by me,{" "}
      <Link
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
        href="https://jonheslop.com/"
      >
        Jon Heslop
      </Link>
    </p>
  </footer>
);
