"use client"

import CharacterCard from "./components/CharacterCard";
import { CharacterResponse, getCharacterAtPage, getCharactersFirstPage } from "./api/character";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterResponse>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [favorites,  setFavorites] = useState<number[]>([]);
  const [canEdit, setCanEdit] = useState<boolean>(false);

  useEffect(() => {
    getCharactersFirstPage().then((response: CharacterResponse) => {
      setCharacters(response);
    });

    // Get favorites from local storage
    const favorites = localStorage.getItem("favorites");
    if (favorites != null) {
      setFavorites(JSON.parse(favorites));
    }

    setCanEdit(true);
  }, []);

  useEffect(() => {
    if (canEdit) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handlePageChange = (next: number) => {
    if (characters == null) return;

    getCharacterAtPage(next === -1 ? characters?.info.prev : characters?.info.next).then((response: CharacterResponse) => {
      setCharacters(response);
      setCurrentPage(currentPage + next);
    });
  }

  return (
    <>
      <Header />
      <div className="grid grid-flow-row grid-cols-3 gap-7 p-5">
        {characters?.results.map((character) => (
          <CharacterCard key={character.id} character={character} favorites={favorites} setFavorites={setFavorites} />
        ))}
      </div>
      
      <div className="sticky bottom-2 flex justify-center gap-5 mb-3 blur-5 items-center">
        <button 
          className="bg-gray-900 text-white px-4 py-2 rounded-md"
          onClick={() => handlePageChange(-1)} 
          disabled={characters?.info.prev == null}
        >
          Prev
        </button>

        <h1 className="text-white text-2xl">
          {currentPage}
        </h1>

        <button 
          className="bg-gray-900 text-white px-4 py-2 rounded-md"
          onClick={() => handlePageChange(1)} 
          disabled={characters?.info.next == null}
        >
          Next
        </button>
      </div>
    </>
  );
}
