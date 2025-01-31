import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";

export default async function Home() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY created_at DESC",
  );
  const faves = rows as fave[];

  return <Grid faves={faves} />;
}
