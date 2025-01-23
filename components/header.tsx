import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { Search } from "./search";

export const Header = () => (
  <nav
    role="navigation"
    className="flex flex-col md:flex-row justify-between gap-3 lg:gap-6 sticky top-0 bg-white dark:bg-neutral-950 pt-2 lg:pt-8"
  >
    <h1>
      Jon’s{" "}
      <Link
        href="https://bukk.it/"
        className="underline hover:text-emerald-700 hover:dark:text-emerald-500 underline-offset-2"
      >
        bukk.it
      </Link>{" "}
      faves
      <Link href="/" className="ml-3">
        ｡◕‿◕｡
      </Link>
    </h1>

    <ul className="flex gap-4 text-sm md:text-base">
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
