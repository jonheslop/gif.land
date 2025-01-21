import Link from "next/link";

export const Header = () => (
  <nav role="navigation" className="flex justify-between gap-6">
    <h1>
      Jon’s{" "}
      <Link href="https://bukk.it/" className="underline">
        bukk.it
      </Link>{" "}
      faves
      <span className="ml-3">｡◕‿◕｡</span>
    </h1>

    <ul>
      <li>
        <Link href="#">A-Z</Link>
      </li>
    </ul>
  </nav>
);
