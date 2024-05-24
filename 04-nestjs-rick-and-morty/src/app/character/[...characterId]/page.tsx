import { type Character } from "@/types/characters"
import { getCharacterById } from "@/services/characters"
import { getCharacterIds } from "@/utils/cookiesFunctions"
import Header from "../../../components/Header"
import CharacterInformation from "@/components/CharacterInformation"
import CharacterEpisodes from "@/components/CharacterEpisodes"
import { checkSession } from "@/actions/session"
import { redirect } from "next/navigation"
import { getUsersFavorites } from "@/services/favorites"

export default async function Character({
  params,
}: {
  params: { characterId: number }
}) {
  const hasSession = await checkSession()

  if (!hasSession) {
    redirect("/auth")
  }

  const character = await getCharacterById(params.characterId)
  // const favoriteCharacters = getCharacterIds()

  const favoriteCharacters = await getUsersFavorites(
    hasSession.user?.email ?? "",
  )

  return (
    <>
      <Header />

      <div className="p-4">
        <div className="flex gap-7">
          <CharacterInformation
            character={character}
            favoriteCharacters={favoriteCharacters.characterIds!}
          />
        </div>

        <h2 className="mt-7 text-4xl text-gray-300">Episodes:</h2>

        <CharacterEpisodes character={character} />
      </div>
    </>
  )
}
