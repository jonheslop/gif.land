import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";

export default async function Oldest() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY created_at ASC",
  );
  const faves = rows as fave[];

  const pagedFaves = allFavesToPages(faves);

  return <Grid pagedFaves={JSON.parse(JSON.stringify(pagedFaves))} />;
}
