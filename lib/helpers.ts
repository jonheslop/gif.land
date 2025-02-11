import { type fave } from "@/lib/turso";

export const allFavesToPages = (faves: fave[]) =>
  faves.reduce<Record<number, fave[]>>((acc, fave, i) => {
    const pageIndex = Math.floor(i / 20);
    if (!Object.keys(acc).includes(pageIndex.toString())) {
      acc[pageIndex] = [];
    }
    acc[pageIndex].push(fave);
    return acc;
  }, []);
