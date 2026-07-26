const BASE_URL = process.env.NEXT_PUBLIC_UNIPODCAST_API_URL;

export async function safeFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
