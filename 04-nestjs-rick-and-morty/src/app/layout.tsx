import type { Metadata } from "next"
import SessionProvider from "@/components/SessionProvider"
import { getServerSession } from "next-auth"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Created by Diego Gtz",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className="bg-gray-700">{children}</body>
      </SessionProvider>
    </html>
  )
}
