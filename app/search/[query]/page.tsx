import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";
import { Item } from "@/components/item";
import { Suspense } from "react";

// SELECT * FROM favourites WHERE URL LIKE '%dog%' OR TAGS LIKE '%dog%';

export default async function Home({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const query = (await params).query;

  const { rows } = await turso.execute(
    `SELECT * FROM favourites WHERE URL LIKE '%${query}%' OR TAGS LIKE '%${query}%'`,
  );
  // @ts-expect-error cba to sort right now
  const faves: fave[] = rows;

  return (
    <Grid>
      <Suspense fallback={<div>Loading...</div>}>
        {faves.map((row) => (
          <Item key={row.id} item={row} />
        ))}
      </Suspense>
    </Grid>
  );
}
