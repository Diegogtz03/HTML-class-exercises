import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rick and Morty - Auth",
  description: "Created by Diego Gtz",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-700">{children}</body>
    </html>
  )
}
