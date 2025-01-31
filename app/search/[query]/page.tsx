import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";

// SELECT * FROM favourites WHERE URL LIKE '%dog%' OR TAGS LIKE '%dog%';

export default async function Home({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const query = (await params).query;

  const decodedQuery = decodeURI(query);

  const { rows } = await turso.execute(
    `SELECT * FROM favourites WHERE URL LIKE '%${decodedQuery}%' OR TAGS LIKE '%${decodedQuery}%'`,
  );
  const faves = rows as fave[];

  return (
    <>
      <p className="mb-8">
        Search results for: <em>{decodedQuery}</em>
      </p>
      <Grid faves={faves} />
    </>
  );
}
