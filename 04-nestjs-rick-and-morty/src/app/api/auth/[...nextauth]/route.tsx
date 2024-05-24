import NextAuth, { NextAuthOptions } from "next-auth"
import { db } from "@/db/schema"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import type { Adapter } from "next-auth/adapters"
import CredentialsProvider from "next-auth/providers/credentials"
import { verifyUser } from "@/services/auth"
import { AuthResponse } from "@/types/auth"

const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await verifyUser(
          credentials?.username!,
          credentials?.password!,
        )

        if (user.code === 200) {
          return {
            id: user?.data!.id,
            email: user?.data!.email,
          }
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
