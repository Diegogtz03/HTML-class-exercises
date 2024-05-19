"use client"

import { Character } from "@/types/characters"
import { setFavoriteCharacter } from "@/actions/characters"
import Image from "next/image"

export default function CharacterInformation({
  character,
  favoriteCharacters,
}: {
  character: Character
  favoriteCharacters: number[]
}) {
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
            role="button"
            className="rounded-md bg-slate-500 p-3 text-white transition-colors hover:bg-slate-600"
            name="favoriteButton"
            onClick={() => setFavoriteCharacter(character.id)}
          >
            <div className="flex items-center gap-3">
              {favoriteCharacters.includes(character?.id || -1)
                ? "Remove from favorites"
                : "Add to favorites"}
              <Image
                src={
                  favoriteCharacters.includes(character?.id || -1)
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
