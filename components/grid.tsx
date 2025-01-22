import { ReactNode } from "react";

export const Grid = ({ children }: { children: ReactNode }) => (
  <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 lg:gap-x-4 2xl:gap-8 items-end">
    {children}
  </ul>
);
