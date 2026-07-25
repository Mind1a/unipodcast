const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://unipodcast-final.onrender.com";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiGet<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new ApiError(
      response.status,
      `API request failed: ${response.status} ${response.statusText} (${endpoint})`,
    );
  }

  return response.json();
}

export { API_BASE_URL };
