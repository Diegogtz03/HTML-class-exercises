import { getFavoriteCharacters } from "@/services/characters"
import CharacterCard from "../../components/CharacterCard"
import Header from "../../components/Header"

export default async function Favorites() {
  const characters = await getFavoriteCharacters()

  return (
    <>
      <Header />
      <div>
        {Array.isArray(characters) && characters.length == 0 && (
          <h1 className="ml-5 text-4xl text-white">No favorites</h1>
        )}

        <div className="grid-flow-column grid grid-cols-3 gap-7 p-5">
          {!Array.isArray(characters) && characters != null ? (
            <CharacterCard character={characters} isFavorite={true} />
          ) : (
            <>
              {characters?.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  isFavorite={true}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
