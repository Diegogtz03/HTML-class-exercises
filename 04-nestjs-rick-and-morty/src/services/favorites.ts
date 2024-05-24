import { FavoritesResponse } from "@/types/favorites"

export async function getUsersFavorites(
  email: string,
): Promise<FavoritesResponse> {
  return fetch(`${process.env.API_ROOT_ROUTE}/api/user/favorites`, {
    method: "POST",
    body: JSON.stringify({ email }),
  }).then((res) => res.json())
}

export async function updateUsersFavorites(
  email: string,
  favorites: number[],
): Promise<FavoritesResponse> {
  return fetch(`/api/user/favorites`, {
    method: "PUT",
    body: JSON.stringify({ email, favoritesIds: favorites.join(",") }),
  }).then((res) => res.json())
}
