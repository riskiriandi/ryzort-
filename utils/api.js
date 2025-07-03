const BASE_URL = process.env.API_BASE_URL || "https://api.shngm.io/v1";

export async function getMangaList() {
  try {
    const res = await fetch(`${BASE_URL}/manga/list?type=project&page=1&page_size=12&is_update=true&sort=latest`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Error fetching manga list:", err);
    return [];
  }
}

export async function getTopManga() {
  try {
    const res = await fetch(`${BASE_URL}/manga/top?filter=daily&page=1&page_size=10`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Error fetching top manga:", err);
    return [];
  }
}
