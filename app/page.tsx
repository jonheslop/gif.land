import { turso, type fave } from "@/lib/turso";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Grid } from "@/components/grid";
import { Item } from "@/components/item";

export default async function Home() {
  const { rows } = await turso.execute(
    "SELECT * FROM favourites ORDER BY url ASC",
  );
  const faves: fave[] = rows;

  return (
    <div className="flex flex-col min-h-screen p-8 gap-8">
      <Header />
      <main className="flex-1">
        <Grid>
          {faves.map((row) => (
            <Item key={row.id} item={row} />
          ))}
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
