"use client"

import CharacterCard from "./CharacterCard"
import { Character } from "@/types/characters"
import { useState, useEffect } from "react"
import { updateUsersFavorites } from "@/services/favorites"
import { useSession } from "next-auth/react"

export default function CharacterList({
  characters,
  favoriteCharacters,
  favoriteLogic = false,
}: {
  characters: Character[]
  favoriteCharacters: number[]
  favoriteLogic?: boolean
}) {
  const session = useSession()
  const [favoriteIds, setFavoriteIds] = useState<number[]>(favoriteCharacters)
  const [canEdit, setCanEdit] = useState(false)

  useEffect(() => {
    if (canEdit) {
      updateUsersFavorites(session.data?.user?.email ?? "", favoriteIds)
    } else {
      setCanEdit(true)
    }
  }, [favoriteIds])

  return favoriteLogic ? (
    <div className="grid-flow-column grid grid-cols-3 gap-7 p-5">
      {Array.isArray(characters) && favoriteIds.length == 0 && (
        <h1 className="ml-5 text-4xl text-white">No favorites</h1>
      )}

      {!Array.isArray(characters) && characters != null ? (
        <CharacterCard
          character={characters}
          setFavoriteIds={setFavoriteIds}
          isFavorite={true}
        />
      ) : (
        <>
          {characters?.map(
            (character) =>
              favoriteIds.includes(character.id) && (
                <CharacterCard
                  key={character.id}
                  character={character}
                  setFavoriteIds={setFavoriteIds}
                  isFavorite={favoriteIds.includes(character.id)}
                />
              ),
          )}
        </>
      )}
    </div>
  ) : (
    <div className="grid grid-flow-row grid-cols-3 gap-7 p-5">
      {characters?.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          setFavoriteIds={setFavoriteIds}
          isFavorite={favoriteIds.includes(character.id)}
        />
      ))}
    </div>
  )
}
