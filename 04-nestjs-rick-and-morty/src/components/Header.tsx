"use client"
import { navigateToHome, navigateToFavorites } from "@/actions/actions"
import { signOut } from "next-auth/react"

export default function Header() {
  return (
    <header className="sticky top-0 mb-4 flex items-center justify-end space-x-5 bg-gray-800 p-7 text-white">
      <button
        className="cursor-pointer"
        onClick={() => navigateToHome()}
        onKeyDown={() => navigateToHome()}
        id="home"
      >
        Characters
      </button>

      <button
        className="cursor-pointer"
        onClick={() => navigateToFavorites()}
        onKeyDown={() => navigateToFavorites()}
        id="favorites"
      >
        Favorites
      </button>

      <button
        onClick={() => signOut()}
        onKeyDown={() => signOut()}
        className="rounded-lg bg-red-500 p-2 px-4"
      >
        Sign out
      </button>
    </header>
  )
}
