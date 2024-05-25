"use client"
import { Character } from "@/types/characters"
import { updateUsersFavorites } from "@/services/favorites"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"

export default function CharacterInformation({
  character,
  favoriteCharacters,
}: {
  character: Character
  favoriteCharacters: number[]
}) {
  const session = useSession()

  const [favoriteCharacterIds, setFavoriteCharacterIds] =
    useState<number[]>(favoriteCharacters)
  const [canEdit, setCanEdit] = useState(false)

  useEffect(() => {
    if (canEdit) {
      updateUsersFavorites(
        session.data?.user?.email ?? "",
        favoriteCharacterIds,
      )
    } else {
      setCanEdit(true)
    }
  }, [favoriteCharacterIds])

  const handleFavorite = () => {
    setFavoriteCharacterIds((prev) => {
      if (prev.includes(character.id)) {
        return prev.filter((id) => id !== character.id)
      } else {
        return [...prev, character.id]
      }
    })
  }

  return (
    <>
      <div className="max-w-fit overflow-hidden rounded-lg">
        <Image
          src={character?.image ?? "/emptyUser.png"}
          height={300}
          width={300}
          alt={`${character?.name} image`}
        />
      </div>

      <div className="flex flex-col">
        <h1 className="mb-4 text-6xl text-white">{character?.name}</h1>

        <div className="absolute right-4">
          <button
            className="rounded-md bg-slate-500 p-3 text-white transition-colors hover:bg-slate-600"
            name="favoriteButton"
            onClick={() => handleFavorite()}
          >
            <div className="flex items-center gap-3">
              {favoriteCharacterIds.includes(character?.id || -1)
                ? "Remove from favorites"
                : "Add to favorites"}
              <Image
                src={
                  favoriteCharacterIds.includes(character?.id || -1)
                    ? "/filledStar.svg"
                    : "/emptyStar.svg"
                }
                height={30}
                width={30}
                alt="Star icon"
              ></Image>
            </div>
          </button>
        </div>

        <p className="mb-1 ml-3 text-xl text-gray-400">
          {character?.status} - {character?.species}
        </p>

        <p className="mb-1 ml-3 text-xl text-gray-400">
          Origin: {character?.origin.name}
        </p>

        <p className="ml-3 text-xl text-gray-400">
          Location: {character?.location.name}
        </p>
      </div>
    </>
  )
}
