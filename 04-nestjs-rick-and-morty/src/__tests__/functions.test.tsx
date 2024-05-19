import {
  getCharactersFirstPage,
  getCharacterAtPage,
  getCharacterById,
} from "@/services/characters"

import { CharacterResponse, Character } from "@/types/characters"

test("Get characters first page", async () => {
  const response = await getCharactersFirstPage()

  expect(response.info.count).toBe(826)
  expect(response.results.length).toBe(20)
  assertType<CharacterResponse>(response)
})

test("Get character at page", async () => {
  const response = await getCharacterAtPage("2")

  expect(response.info.next).toBe(
    "https://rickandmortyapi.com/api/character?page=3",
  )

  assertType<CharacterResponse>(response)
})

test("Get character by id", async () => {
  const response = await getCharacterById(1)

  expect(response.id).toBe(1)
  expect(response.name).toBe("Rick Sanchez")
})
