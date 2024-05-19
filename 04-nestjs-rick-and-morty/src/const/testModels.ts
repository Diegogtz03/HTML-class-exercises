import { CharacterResponse } from "@/types/characters"

export const MOCK_CHARACTERS: CharacterResponse = {
  info: {
    count: 1,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      origin: {
        name: "Earth (C-137)",
        url: "",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
      ],
      url: "",
      created: "",
    },
  ],
}
