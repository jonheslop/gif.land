import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { Search } from "./search";

export const Header = () => (
  <nav
    role="navigation"
    className="sticky top-0 pt-2 -mx-8 px-8 lg:pt-8 bg-white/70"
  >
    <div className="relative z-10 flex flex-col md:flex-row justify-between gap-3 lg:gap-6">
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
    </div>
    <div className="backdrop" />
  </nav>
);
