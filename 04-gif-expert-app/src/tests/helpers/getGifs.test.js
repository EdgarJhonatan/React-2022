import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
   test("debe de traer 12 elementos", async () => {
      const gifs = await getGifs("Goku");
      expect(gifs.length).toBe(12);
   });

   test("debe de traer 0 elementos", async () => {
      const gifs = await getGifs("");
      expect(gifs.length).toBe(0);
   });
});
