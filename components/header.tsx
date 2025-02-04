import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { Search } from "./search";

export const Header = () => (
  <nav
    role="navigation"
    className="flex md:flex-row items-end justify-between gap-3 sticky top-0 bg-white dark:bg-neutral-950 pt-2"
  >
    <h1 className="mr-auto">
      <Link
        href="/"
        className="flex flex-col gap-1 hover:text-emerald-700 hover:dark:text-emerald-500"
      >
        <span className="colourwheel">｡◕‿◕｡</span>
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
        <Search />
      </li>
    </ul>
  </nav>
);
