import { db, users, favorites } from "@/db/schema"
import { eq } from "drizzle-orm"
import { hashPassword } from "@/utils/hashing"

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  // Check if the user already exists
  const userExists = await db
    .selectDistinct({ id: users.id, email: users.email })
    .from(users)
    .where(eq(users.email, email))

  if (userExists.length > 0) {
    return Response.json({ code: 400, error: "User already exists" })
  }

  // Create the user
  const newUser = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashPassword(password),
    })
    .returning({ id: users.id, email: users.email })

  // Initialize user's favorites
  await db.insert(favorites).values({ userId: newUser[0].id, characterIds: "" })

  return Response.json({ code: 200, data: newUser[0] })
}
