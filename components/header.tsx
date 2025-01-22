import Link from "next/link";
import { NavLink } from "@/components/nav-link";

export const Header = () => (
  <nav
    role="navigation"
    className="flex flex-col md:flex-row justify-between gap-6"
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
      <span className="ml-3">｡◕‿◕｡</span>
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
    </ul>
  </nav>
);
