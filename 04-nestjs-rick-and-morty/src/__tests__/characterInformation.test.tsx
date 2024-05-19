import { test, expect, vi } from "vitest"
import { screen, render } from "@testing-library/react"
import { MOCK_CHARACTERS } from "@/const/testModels"
import CharacterInformation from "@/components/CharacterInformation"

test("Character Information Component Render Test", async () => {
  render(
    <CharacterInformation
      character={MOCK_CHARACTERS.results[0]}
      favoriteCharacters={[]}
    />,
  )

  expect(screen.getByText("Origin: Earth (C-137)")).toBeVisible()
  expect(screen.getByText("Add to favorites")).toBeVisible()

  render(
    <CharacterInformation
      character={MOCK_CHARACTERS.results[0]}
      favoriteCharacters={[1]}
    />,
  )

  expect(screen.getByText("Remove from favorites")).toBeVisible()
})
