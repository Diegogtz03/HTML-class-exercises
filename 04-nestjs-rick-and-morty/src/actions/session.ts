"use server"
import { Session } from "next-auth"
import { getServerSession } from "next-auth/next"

export async function checkSession(): Promise<Session | null> {
  const session = await getServerSession()
  return session ? session : null
}
