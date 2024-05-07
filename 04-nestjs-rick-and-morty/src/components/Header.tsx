import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 mb-4 flex justify-end space-x-5 bg-gray-800 p-7 text-white">
      <Link href="/">Characters</Link>

      <Link href="/favorites">Favorites</Link>
    </header>
  )
}
