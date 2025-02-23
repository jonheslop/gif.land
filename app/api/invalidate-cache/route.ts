import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("faves");

  return new Response("cache invalidated", {
    status: 200,
  });
}
