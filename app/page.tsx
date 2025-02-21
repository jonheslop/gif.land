import { unstable_cache } from "next/cache";
import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";

const getPosts = unstable_cache(
  async () => {
    const { rows } = await turso.execute(
      "SELECT * FROM favourites ORDER BY url ASC",
    );
    return rows as fave[];
  },
  ["getPosts"],
  {
    revalidate: 60,
    tags: ["faves"],
  },
);

export default async function Home() {
  const faves = await getPosts();

  const pagedFaves = allFavesToPages(faves);

  return <Grid pagedFaves={JSON.parse(JSON.stringify(pagedFaves))} />;
}
