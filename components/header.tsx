import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { Search } from "./search";

export const Header = () => (
  <nav
    role="navigation"
    className="flex md:flex-row items-end justify-between gap-3 sticky top-0 bg-white dark:bg-neutral-950 pt-2 sm:px-4 lg:px-8 -mx-2 px-2 sm:-mx-4 lg:-mx-8 z-50 mix-blend-lighten hover:mix-blend-normal"
  >
    <h1 className="mr-auto">
      <Link
        href="/"
        className="flex flex-col gap-1 hover:text-emerald-700 hover:dark:text-emerald-500 colourwheel"
      >
        ｡◕‿◕｡
        <span className="underline underline-offset-2">gif.land</span>
      </Link>
    </h1>

    <ul className="flex gap-4 text-sm md:text-base shrink-0">
      <li>
        <NavLink href="/">a-z</NavLink>
      </li>
      <li>
        <NavLink href="/newest">newest</NavLink>
      </li>
      <li>
        <NavLink href="/oldest">oldest</NavLink>
      </li>
      <li>
        <a
          className="underline-offset-2 hover:underline hover:text-emerald-700 hover:dark:text-emerald-500"
          href="/random"
        >
          random
        </a>
      </li>
      <li>
        <Search />
      </li>
    </ul>
  </nav>
);
