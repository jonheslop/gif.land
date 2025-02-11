import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";

export default async function Home() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY url ASC",
  );
  const faves = rows as fave[];

  const pagedFaves = allFavesToPages(faves);

  return <Grid pagedFaves={JSON.parse(JSON.stringify(pagedFaves))} />;
}
