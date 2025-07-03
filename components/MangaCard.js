import Link from "next/link";

export default function MangaCard({ item }) {
  const thumbnail = `https://storage.shngm.id/low/unsafe/filters:format(webp):quality(70)/thumbnail/image/${item.thumbnail_id}.jpg`;

  return (
    <Link href={`/manga/${item.id}`} className="bg-white rounded shadow hover:scale-[1.02] transition block overflow-hidden">
      <img src={thumbnail} alt={item.title} className="w-full h-auto" />
      <div className="p-2">
        <h3 className="text-sm font-bold line-clamp-2">{item.title}</h3>
        <p className="text-xs text-gray-500">{item.status}</p>
      </div>
    </Link>
  );
}
