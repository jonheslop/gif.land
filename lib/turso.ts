import { unstable_cache } from "next/cache";
import { createClient, Row } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Check out how it’s working by duplicating DB rows and seeing if they show
export const getPosts = (query: string) =>
  unstable_cache(
    async () => {
      const { rows } = await turso.execute(query);
      return rows as fave[];
    },
    [query],
    {
      tags: ["faves"],
    },
  )();

export type fave = Row & {
  id: number;
  created_at: string;
  url: string;
  author: string;
  tags: string;
  width: number;
  height: number;
  Source: string;
};
