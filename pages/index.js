import MangaGrid from "../components/MangaGrid";
import { getMangaList, getTopManga } from "../utils/api";

export async function getStaticProps() {
  const mangaList = await getMangaList();
  const topManga = await getTopManga();

  return {
    props: {
      mangaList,
      topManga,
    },
    revalidate: 3600, // auto-refresh tiap 1 jam
  };
}

export default function Home({ mangaList, topManga }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-2">🔥 Populer Hari Ini</h1>
      <MangaGrid data={topManga} />

      <h2 className="text-xl font-semibold mt-6 mb-2">🆕 Update Terbaru</h2>
      <MangaGrid data={mangaList} />
    </main>
  );
}
