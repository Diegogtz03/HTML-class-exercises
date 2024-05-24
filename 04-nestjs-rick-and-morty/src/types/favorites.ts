import { z } from "zod"

export const favoritesResponseSquema = z.object({
  code: z.number(),
  error: z.string().optional(),
  characterIds: z.array(z.number()).optional(),
})

export type FavoritesResponse = z.infer<typeof favoritesResponseSquema>
