import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";
import { getPosts } from "@/lib/turso";

export default async function Oldest() {
  const faves = await getPosts(
    "SELECT * FROM favourites ORDER BY created_at ASC",
  );

  const pagedFaves = allFavesToPages(faves);

  return <Grid pagedFaves={JSON.parse(JSON.stringify(pagedFaves))} />;
}
