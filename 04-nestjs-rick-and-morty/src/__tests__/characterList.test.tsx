import { test, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { MOCK_CHARACTERS } from "@/const/testModels"
import CharacterList from "../components/CharacterList"

test("All characters list test", async () => {
  vi.mock("@/services/favorites", () => ({
    updateUsersFavorites: vi.fn(),
  }))

  vi.mock("next-auth/react", () => ({
    useSession: () => ({
      data: {
        user: {
          email: "diego@gmail.com",
        },
      },
    }),
  }))

  render(
    <CharacterList
      characters={MOCK_CHARACTERS.results}
      favoriteCharacters={[]}
    />,
  )

  expect(screen.getByText("Rick Sanchez")).toBeVisible()
})
