import Link from "next/link";

export const Footer = () => (
  <footer className="row-start-3 flex gap-4 lg:gap-12 xl:gap-8 flex-wrap items-center text-sm xl:grid grid-cols-3 2xl:grid-cols-8">
    <p className="2xl:col-span-3">
      Powered by{" "}
      <Link href="https://turso.tech/" className="underline">
        Turso
      </Link>
      ,{" "}
      <Link href="https://nextjs.org/" className="underline">
        Next.js
      </Link>
      , and{" "}
      <Link href="https://tailwindcss.com/" className="underline">
        TailwindCSS
      </Link>
    </p>
    <p className="text-balance 2xl:col-span-3">
      Thanks to <Link href="https://ethanmarcotte.com/">Ethan</Link> for{" "}
      <Link href="https://bukk.it/" className="underline">
        bukk.it
      </Link>
      , the best archive of GIFs on the internet
    </p>
    <p className="2xl:col-span-2">
      <Link
        className="underline"
        href="https://github.com/jonheslop/bukkit-faves"
      >
        Thrown together
      </Link>{" "}
      by me,{" "}
      <Link className="underline" href="https://jonheslop.com/">
        Jon Heslop
      </Link>
    </p>
  </footer>
);
