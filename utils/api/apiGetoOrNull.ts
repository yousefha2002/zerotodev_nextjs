export async function apiGetOrNull<T>(
  url: string,
  token?: string
): Promise<T | null> {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = token;
    }

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (response.status === 404) {
      return null;
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message) ? data.message[0] : data.message
      );
    }

    return data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}
