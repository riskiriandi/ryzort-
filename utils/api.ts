const BASE_URL = "https://api.shngm.io/v1";

export async function getMangaList() {
  const res = await fetch(`${BASE_URL}/manga/list?type=project&page=1&page_size=12&is_update=true&sort=latest`);
  const json = await res.json();
  return json.data || [];
}

export async function getTopManga() {
  const res = await fetch(`${BASE_URL}/manga/top?filter=daily&page=1&page_size=10`);
  const json = await res.json();
  return json.data || [];
}
