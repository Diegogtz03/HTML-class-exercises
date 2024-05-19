import { test, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { MOCK_CHARACTERS } from "@/const/testModels"
import CharacterCard from "@/components/CharacterCard"

test("Character Card Component Render Test", async () => {
  render(
    <CharacterCard character={MOCK_CHARACTERS.results[0]} isFavorite={false} />,
  )

  expect(screen.getByText("Rick Sanchez")).toBeVisible()
  expect(screen.getByText("Alive - Human")).toBeVisible()
  expect(
    screen.getByText("Location: Earth (Replacement Dimension)"),
  ).toBeVisible()
})
