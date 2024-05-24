"use client"

import { Character } from "@/types/characters"
import { navigateToCharacter } from "../actions/actions"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

export default function CharacterCard({
  character,
  isFavorite,
  setFavoriteIds,
}: {
  character: Character
  isFavorite: boolean
  setFavoriteIds: Dispatch<SetStateAction<number[]>>
}) {
  const handleFavorite = () => {
    setFavoriteIds((prev) => {
      if (prev.includes(character.id)) {
        return prev.filter((id) => id !== character.id)
      } else {
        return [...prev, character.id]
      }
    })
  }

  return (
    <div className="relative flex w-full items-center gap-4 overflow-hidden rounded-lg bg-slate-600">
      <Image
        src={character.image}
        height={100}
        width={100}
        alt={`${character.name} image`}
      />

      <div>
        <button onClick={() => navigateToCharacter(character.id)}>
          <h1 className="text-2xl text-white underline">{character.name}</h1>
        </button>

        <p className="select-none text-gray-400">
          {character.status} - {character.species}
        </p>

        <p className="select-none text-gray-400">
          Location: {character.location.name}
        </p>
      </div>

      <button
        className="absolute right-3 top-3"
        onClick={() => handleFavorite()}
      >
        <Image
          src={isFavorite ? "/filledStar.svg" : "/emptyStar.svg"}
          height={25}
          width={25}
          alt="Favorite"
          className="transition-opacity duration-200 hover:opacity-50"
        />
      </button>
    </div>
  )
}
