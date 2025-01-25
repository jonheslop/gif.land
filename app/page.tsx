import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";

export default async function Home() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY url ASC",
  );
  // @ts-expect-error cba to sort right now
  const faves: fave[] = rows;

  return (
      <Grid faves={faves} />
  );
}
