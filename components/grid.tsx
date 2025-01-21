import { ReactNode } from "react";

export const Grid = ({ children }: { children: ReactNode }) => (
  <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">{children}</ul>
);
