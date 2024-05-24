import LoginCard from "@/components/LoginCard"
import Image from "next/image"
import { checkSession } from "@/actions/session"
import { redirect } from "next/navigation"

export default async function Home() {
  const hasSession = await checkSession()

  if (hasSession) {
    redirect("/")
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center py-8">
      <Image
        src="/ram.png"
        width={500}
        height={200}
        alt="rick and morty logo"
        className="m-8"
      />
      <LoginCard />
    </div>
  )
}
