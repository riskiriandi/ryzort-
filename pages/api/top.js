export default async function handler(req, res) {
  const headers = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36",
    "Referer": "https://06.shinigami.asia/",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty"
  };

  try {
    const response = await fetch("https://api.shngm.io/v1/manga/top?filter=daily&page=1&page_size=10", { headers });
    const json = await response.json();
    res.status(200).json(json.data || []);
  } catch (err) {
    res.status(500).json({ error: "Gagal ambil data populer" });
  }
}
