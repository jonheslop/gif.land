import { turso, type fave } from "@/lib/turso";

const url = process.env.VERCEL_URL || "http://localhost:3003";

export async function GET() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY RANDOM() LIMIT 1",
  );
  const faves = rows as fave[];

  const item = faves[0];

  return Response.redirect(`${url}/info/${item.url}`);
}
