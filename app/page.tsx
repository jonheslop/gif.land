import { getPosts } from "@/lib/turso";
import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";

export default async function Home() {
  const faves = await getPosts("SELECT * FROM favourites ORDER BY url ASC");

  const pagedFaves = allFavesToPages(faves);

  return <Grid pagedFaves={JSON.parse(JSON.stringify(pagedFaves))} />;
}
