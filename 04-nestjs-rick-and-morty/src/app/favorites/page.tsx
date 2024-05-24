import { getFavoriteCharacters } from "@/services/characters"
// import CharacterCard from "../../components/CharacterCard"
import CharacterList from "@/components/CharacterList"
import Header from "../../components/Header"
import { checkSession } from "../../actions/session"
import { redirect } from "next/navigation"
import { getUsersFavorites } from "@/services/favorites"

export default async function Favorites() {
  const hasSession = await checkSession()

  if (!hasSession) {
    redirect("/auth")
  }

  const characterIds = await (
    await getUsersFavorites(hasSession.user?.email ?? "")
  ).characterIds!

  const characters = await getFavoriteCharacters(characterIds)

  return (
    <>
      <Header />
      <div>
        <CharacterList
          characters={characters instanceof Array ? characters : [characters]}
          favoriteCharacters={characterIds}
          favoriteLogic={true}
        />
      </div>
    </>
  )
}
