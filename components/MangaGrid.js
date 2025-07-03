import MangaCard from "./MangaCard";

export default function MangaGrid({ data }) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-400">Tidak ada data.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data.map((item) => (
        <MangaCard key={item.id} item={item} />
      ))}
    </div>
  );
    }
