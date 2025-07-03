import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChapterView() {
  const router = useRouter();
  const { id } = router.query;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.shngm.io/v1/chapter/detail/${id}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
        "Referer": "https://06.shinigami.asia/",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setImages(json.data?.pages || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading chapter...</p>;

  if (!images || images.length === 0)
    return <p className="p-4 text-center text-red-500">Gagal memuat gambar.</p>;

  return (
    <div className="p-2 space-y-4">
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Page ${index + 1}`}
          className="w-full rounded shadow"
        />
      ))}
    </div>
  );
      }
