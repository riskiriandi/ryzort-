import MangaGrid from "../components/MangaGrid";
import { getMangaList, getTopManga } from "../utils/api";

export async function getStaticProps() {
  const mangaList = await getMangaList();
  const topManga = await getTopManga();

  console.log("Fetched mangaList:", mangaList);
  console.log("Fetched topManga:", topManga);

  return {
    props: {
      mangaList: mangaList || [],
      topManga: topManga || [],
    },
    revalidate: 3600,
  };
}

export default function Home({ mangaList, topManga }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">🔥 Populer Hari Ini</h1>
      {topManga.length > 0 ? <MangaGrid data={topManga} /> : <p>No data</p>}

      <h2 className="text-xl font-semibold mt-6 mb-2">🆕 Update Terbaru</h2>
      {mangaList.length > 0 ? <MangaGrid data={mangaList} /> : <p>No data</p>}
    </main>
  );
        }
