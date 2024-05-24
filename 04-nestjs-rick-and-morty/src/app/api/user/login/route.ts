import { db, users } from "@/db/schema"
import { eq, and } from "drizzle-orm"
import { hashPassword } from "@/utils/hashing"

export async function POST(request: Request, response: Response) {
  const { email, password } = await request.json()

  const user = await db
    .select({ id: users.id, email: users.email })
    .from(users)
    .where(
      and(eq(users.password, hashPassword(password)), eq(users.email, email)),
    )

  if (user.length === 0) {
    return Response.json({ code: 400, error: "Invalid email or password" })
  }

  return Response.json({ code: 200, data: user[0] })
}
