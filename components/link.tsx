import Link from "next/link";

type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const StyledLink = ({ href, children, ...props }: StyledLinkProps) => {
  return (
    <Link
      className="underline hover:text-emerald-700 dark:hover:text-emerald-500"
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
