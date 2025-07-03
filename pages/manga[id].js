import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MangaDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/detail?id=${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));

    fetch(`/api/chapter?id=${id}`)
      .then((res) => res.json())
      .then((json) => setChapters(json));
  }, [id]);

  if (!data) return <p className="p-4 text-center">Loading detail manga...</p>;

  const thumb = `https://storage.shngm.id/low/unsafe/filters:format(webp):quality(70)/thumbnail/image/${data.thumbnail_id}.jpg`;

  return (
    <div className="p-4">
      <img src={thumb} alt={data.title} className="w-full mb-4 rounded" />

      <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{data.synopsis}</p>

      <div className="text-sm mb-4">
        <strong>Genre:</strong> {data.genres?.join(", ")} <br />
        <strong>Status:</strong> {data.status}
      </div>

      <h2 className="text-xl font-semibold mb-2">📚 Daftar Chapter</h2>
      <ul className="space-y-2">
        {chapters.map((ch) => (
          <li key={ch.id}>
            <Link href={`/chapter/${ch.id}`} className="text-blue-600 underline">
              Chapter {ch.chapter_number} - {ch.title || "Tanpa Judul"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
      }
