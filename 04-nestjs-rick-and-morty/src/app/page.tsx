import {
  getCharactersFirstPage,
  getCharacterAtPage,
} from "@/services/characters"
import { CharacterResponse } from "@/types/characters"
import { getCharacterIds } from "@/utils/cookiesFunctions"
import { getUsersFavorites } from "@/services/favorites"
import { PageProps } from "@/types/page"
import Header from "../components/Header"
import CharacterList from "@/components/CharacterList"
import PageController from "@/components/PageController"
import { checkSession } from "@/actions/session"
import { redirect } from "next/navigation"

export default async function Home({ searchParams }: PageProps) {
  const hasSession = await checkSession()

  if (!hasSession) {
    redirect("/auth")
  }

  const curPage = searchParams.page ?? "1"
  const characters: CharacterResponse =
    curPage == "1"
      ? await getCharactersFirstPage()
      : await getCharacterAtPage(curPage)

  // const favoriteCharacters = getCharacterIds()

  const favoriteCharacters = await getUsersFavorites(
    hasSession.user?.email ?? "",
  )

  return (
    <>
      <Header />
      <CharacterList
        characters={characters.results}
        favoriteCharacters={favoriteCharacters.characterIds ?? []}
      />
      <PageController
        currentPage={curPage}
        previousPage={characters.info.prev}
        nextPage={characters.info.next}
      />
    </>
  )
}
