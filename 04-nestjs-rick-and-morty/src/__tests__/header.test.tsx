import { test, expect, vi } from "vitest"
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "@/components/Header"

const mockLink = vi.fn()

vi.mock("@/actions/actions", () => ({
  navigateToHome: () => mockLink("/"),
  navigateToFavorites: () => mockLink("/favorites"),
}))

test("Header Component Render Test", async () => {
  render(<Header />)

  expect(screen.getByText("Characters")).toBeVisible()
  expect(screen.getByText("Favorites")).toBeVisible()

  await userEvent.click(screen.getByText("Favorites"))
  expect(mockLink).toBeCalledWith("/favorites")

  await userEvent.click(screen.getByText("Characters"))
  expect(mockLink).toBeCalledWith("/")
})
