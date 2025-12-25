import { trCache } from "./tryCatch";





export const API_URL = process.env.EXPO_PUBLIC_URL_API || "https://moon-co.vercel.app/api";



export const gqlFetch = async <T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<[T | null, Error | null]> => {
  return trCache(async () => {
    const response = await fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const data = await response.json();
    
    if (!response.ok || data.errors) {
      throw new Error(
        data?.errors?.[0]?.message ||
        `GraphQL request failed with status ${response.status}`
      );
    }

    return data as T;
  });
};