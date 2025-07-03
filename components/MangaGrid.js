import MangaCard from "./MangaCard";

export default function MangaGrid({ data }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data.map((item) => (
        <MangaCard key={item.id} item={item} />
      ))}
    </div>
  );
}
