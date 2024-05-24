import { redirect } from "next/navigation"

export default async function Home() {
  redirect("/auth/login")

  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Loading...</h1>
    </div>
  )
}
