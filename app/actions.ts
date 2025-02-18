"use server";

import { cookies } from "next/headers";

export async function createZoomedCookie() {
  (await cookies()).set("zoomed", "true");
}

export async function deleteZoomedCookie() {
  (await cookies()).delete("zoomed");
}
