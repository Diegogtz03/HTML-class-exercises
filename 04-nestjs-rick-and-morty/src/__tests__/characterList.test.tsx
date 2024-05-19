import { test, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { MOCK_CHARACTERS } from "@/const/testModels"
import CharacterList from "../components/CharacterList"

test("All characters list test", async () => {
  render(
    <CharacterList
      characters={MOCK_CHARACTERS.results}
      favoriteCharacters={[]}
    />,
  )

  expect(screen.getByText("Rick Sanchez")).toBeVisible()
})
