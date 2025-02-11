import { turso, type fave } from "@/lib/turso";
import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";

export default async function Search({
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
  const pagedFaves = allFavesToPages(faves);

  return (
    <>
      <p className="mb-8">
        Search results for: <em>{decodedQuery}</em>
      </p>
      <Grid pagedFaves={JSON.parse(JSON.stringify(pagedFaves))} />
    </>
  );
}
