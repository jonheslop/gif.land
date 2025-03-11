"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  const currentRoute = usePathname();

  return (
    <Link
      href={href}
      className={`underline-offset-2 ${
        currentRoute === href
          ? "underline hover:text-emerald-700 dark:hover:text-emerald-500"
          : "hover:underline hover:text-emerald-700 dark:hover:text-emerald-500"
      }`}
    >
      {children}
    </Link>
  );
};
