import { StyledLink as Link } from "./link";

export const Footer = () => (
  <footer className="row-start-3 lg:mt-32 mt-16 flex-wrap items-start text-sm relative z-50 mix-blend-plus-lighter hover:mix-blend-normal">
    <p className="xl:col-start-4 2xl:col-start-5 col-span-3">
      <Link
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
        href="https://github.com/jonheslop/gif.land"
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
      . Here’s a{" "}
      <Link
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500"
        href="/about"
      >
        little more about the site
      </Link>
      .
    </p>
  </footer>
);
