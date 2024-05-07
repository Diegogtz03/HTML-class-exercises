"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function PageController({
  currentPage,
  previousPage,
  nextPage,
}: {
  currentPage: string
  previousPage: string | null
  nextPage: string | null
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handlePageChange = (page: number) => {
    if (page === -1) {
      if (previousPage) {
        router.push(`${pathname}?page=${parseInt(currentPage) - 1}`)
      }
    } else {
      if (nextPage) {
        router.push(`${pathname}?page=${parseInt(currentPage) + 1}`)
      }
    }
  }

  return (
    <>
      <div className="blur-5 sticky bottom-2 mb-3 flex items-center justify-center gap-5">
        <button
          className="rounded-md bg-gray-900 px-4 py-2 text-white"
          onClick={() => handlePageChange(-1)}
          disabled={previousPage == null}
        >
          Prev
        </button>

        <h1 className="text-2xl text-white">{currentPage}</h1>

        <button
          className="rounded-md bg-gray-900 px-4 py-2 text-white"
          onClick={() => handlePageChange(1)}
          disabled={nextPage == null}
        >
          Next
        </button>
      </div>
    </>
  )
}
