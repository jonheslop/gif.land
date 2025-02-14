import { turso, type fave } from "@/lib/turso";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY RANDOM() LIMIT 1",
  );
  const faves = rows as fave[];

  const item = faves[0];

  const fullUrl =
    process.env.NODE_ENV === "production"
      ? `https://home.gif.land/info/${item.url}`
      : `http://localhost:3000/info/${item.url}`;

  return Response.redirect(fullUrl);
}
