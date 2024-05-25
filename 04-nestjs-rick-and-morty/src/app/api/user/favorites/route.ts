import { db, favorites, users } from "@/db/schema"
import stringToNumArray from "@/utils/arrayConverter"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  const { email } = await request.json()

  const userId = await db
    .selectDistinct({ id: users.id })
    .from(users)
    .where(eq(users.email, email))

  const res = await db
    .selectDistinct({
      userId: favorites.userId,
      characterIds: favorites.characterIds,
    })
    .from(favorites)
    .where(eq(favorites.userId, userId[0].id))

  if (res.length === 0) {
    return Response.json({ code: 200, characterIds: [] })
  }

  return Response.json({
    code: 200,
    characterIds: stringToNumArray(res[0].characterIds ?? ""),
  })
}

export async function PUT(request: Request) {
  const { email, favoritesIds } = await request.json()

  const userId = await db
    .selectDistinct({ id: users.id })
    .from(users)
    .where(eq(users.email, email))

  const res = await db
    .update(favorites)
    .set({ characterIds: favoritesIds })
    .where(eq(favorites.userId, userId[0].id))
    .returning({
      userId: favorites.userId,
      characterIds: favorites.characterIds,
    })

  if (res.length === null) {
    return Response.json({ code: 400, error: "Error upating" })
  }

  return Response.json({
    code: 200,
    characterIds: stringToNumArray(res[0].characterIds ?? ""),
  })
}
