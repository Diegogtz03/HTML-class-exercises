import { Character } from "../api/character"
import Image from "next/image"
import { navigateToCharacter } from '../actions';

export default function CharacterCard({ character, favorites, setFavorites }: { character: Character, favorites: number[], setFavorites: (favorites: number[]) => void }) {
  const handleFavorite = (characterId: number) => {
    if (favorites.find((id) => id === characterId)) {
      setFavorites(favorites.filter((id) => id !== characterId));
    } else {
      setFavorites([...favorites, characterId]);
    }
  }

  return (
    <div className="rounded-lg flex gap-4 items-center bg-slate-600 overflow-hidden w-full relative">
      <Image src={character.image} height={100} width={100} alt={`${character.name} image`} />

      <div>
        <button onClick={() => navigateToCharacter(character.id)}>
          <h1 className="text-white text-2xl underline">
            {character.name}
          </h1>
        </button>

        <p className="text-gray-400 select-none">
          {character.status} - {character.species}
        </p>

        <p className="text-gray-400 select-none">
          Location: {character.location.name}
        </p>
      </div>

      <button className="absolute right-3 top-3" onClick={() => handleFavorite(character.id)}>
        <Image src={favorites.find((id) => id === character.id) ? "/filledStar.svg" : "/emptyStar.svg" } height={25} width={25} alt="Favorite" className="transition-opacity duration-200 hover:opacity-50" />
      </button>
    </div>
  )
};