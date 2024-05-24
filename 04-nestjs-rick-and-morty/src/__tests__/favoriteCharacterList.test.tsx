import { test, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { MOCK_CHARACTERS } from "@/const/testModels"
import CharacterCard from "@/components/CharacterCard"

test("Favorite characters list test", async () => {
  render(
    <CharacterCard
      character={MOCK_CHARACTERS.results[0]}
      isFavorite={true}
      setFavoriteIds={() => null}
    />,
  )

  expect(screen.getByText("Rick Sanchez")).toBeVisible()

  const image = screen.getByAltText("Favorite")

  expect(image).toHaveAttribute("src", "/filledStar.svg")
})
