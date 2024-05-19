import { describe, test, expect, vi } from "vitest"
import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PageController from "@/components/PageController"

const mockPush = vi.fn()

vi.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: mockPush,
    }),
    usePathname: () => "/",
  }
})

describe("pagination", () => {
  test("render", () => {
    render(<PageController currentPage="1" previousPage="0" nextPage="/" />)
    expect(screen.getByText("Prev")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("Next")).toBeInTheDocument()
  })
  test("click on next", async () => {
    render(<PageController currentPage="1" previousPage="0" nextPage="/" />)
    await userEvent.click(screen.getByText("Next"))
    expect(mockPush).toBeCalledWith("/?page=2")
  })
  test("click on prev", async () => {
    render(<PageController currentPage="2" previousPage="1" nextPage="/" />)
    await userEvent.click(screen.getByText("Prev"))
    expect(mockPush).toBeCalledWith("/?page=1")
  })
})
