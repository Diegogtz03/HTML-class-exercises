import { z } from "zod"

export const authResponseSchema = z.object({
  code: z.number(),
  error: z.string().optional(),
  data: z
    .object({
      id: z.string(),
      email: z.string(),
    })
    .optional(),
})

export type AuthResponse = z.infer<typeof authResponseSchema>
