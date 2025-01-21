import Link from "next/link";

export const Footer = () => (
  <footer className="row-start-3 flex gap-4 lg:gap-12 flex-wrap items-center justify-center text-sm text-center">
    <p>
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
    <p className="text-balance">
      Thanks to <Link href="https://ethanmarcotte.com/">Ethan</Link> for{" "}
      <Link href="https://bukk.it/" className="underline">
        bukk.it
      </Link>
      , the best archive of GIFs on the internet
    </p>
    <p>
      Thrown together by me,{" "}
      <Link className="underline" href="https://jonheslop.com/">
        Jon Heslop
      </Link>
    </p>
  </footer>
);
