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
      className={currentRoute === href ? "border-b border-neutral-800" : ""}
    >
      {children}
    </Link>
  );
};
