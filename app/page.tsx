import { unstable_cache } from "next/cache";
import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";

const getCachedResults = unstable_cache(
  async () => {
    const { rows } = await turso.execute(
      "SELECT * FROM favourites ORDER BY url ASC",
    );
    return rows;
  },
  ["faves"],
  {
    revalidate: false,
    tags: ["faves"],
  },
);

export default async function Home() {
  const rows = await getCachedResults();
  const faves = rows as fave[];

  return <Grid faves={faves} />;
}
