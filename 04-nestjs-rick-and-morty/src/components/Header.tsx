"use client"
import { navigateToHome, navigateToFavorites } from "@/actions/actions"
import { signOut } from "next-auth/react"

export default function Header() {
  return (
    <header className="sticky top-0 mb-4 flex items-center justify-end space-x-5 bg-gray-800 p-7 text-white">
      <a className="cursor-pointer" onClick={() => navigateToHome()} id="home">
        Characters
      </a>

      <a
        className="cursor-pointer"
        onClick={() => navigateToFavorites()}
        id="favorites"
      >
        Favorites
      </a>

      <button
        onClick={() => signOut()}
        className="rounded-lg bg-red-500 p-2 px-4"
      >
        Sign out
      </button>
    </header>
  )
}
