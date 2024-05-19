import { test, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { MOCK_CHARACTERS } from "@/const/testModels"
import CharacterEpisodes from "@/components/CharacterEpisodes"

test("Character Episodes Component Render Test", async () => {
  render(<CharacterEpisodes character={MOCK_CHARACTERS.results[0]} />)

  expect(screen.getByText("Episode 1")).toBeVisible()
  expect(screen.getByText("Episode 2")).toBeVisible()
  expect(screen.getByText("Episode 3")).toBeVisible()
})
