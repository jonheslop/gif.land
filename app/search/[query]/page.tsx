import { Grid } from "@/components/grid";
import { allFavesToPages } from "@/lib/helpers";
import { getPosts } from "@/lib/turso";

export default async function Search({
  params,
}: {
  params: Promise<{ query: string }>;
}) {
  const query = (await params).query;

  const decodedQuery = decodeURI(query);
  const faves = await getPosts(
    `SELECT * FROM favourites WHERE URL LIKE '%${decodedQuery}%' OR TAGS LIKE '%${decodedQuery}%'`,
  );

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
