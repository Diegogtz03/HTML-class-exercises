"use client"

import { type Character, getCharacterById } from "../../api/character";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";

export default function Character({ params }: { params: { characterId: number } }) {
  const [character, setCharacter] = useState<Character>();

  const formatURL = (url: string) => {
    return url.replace("https://rickandmortyapi.com/api/episode/", "");
  }

  useEffect(() => {
    getCharacterById(params.characterId).then((response: Character) => {
      setCharacter(response);
    })
  }, []);
  
  return (
    <>
      <Header />
      
      <div className="p-4">
        <div className="flex gap-7">
          <div className="rounded-lg overflow-hidden max-w-fit">
            <Image src={character?.image ?? "/emptyUser.png"} height={300} width={300} alt={`${character?.name} image`} />
          </div>

          <div className="flex flex-col">
            <h1 className="text-white text-6xl mb-4">
              {character?.name}
            </h1>

            <p className="text-gray-400 ml-3 text-xl mb-1">
              {character?.status} - {character?.species}
            </p>

            <p className="text-gray-400 ml-3 text-xl mb-1">
              Origin: {character?.origin.name}
            </p>

            <p className="text-gray-400 ml-3 text-xl">
              Location: {character?.location.name}
            </p>
          </div>
        </div>

        <h2 className="text-gray-300 text-4xl mt-7">
          Episodes: 
        </h2>

        <div className="flex ml-3 mt-5">
          <ul className="grid grid-flow-row grid-cols-10 gap-7">
            {character?.episode.map((episode) => (
              <li 
                key={episode}
                className="text-gray-500 ml-4 text-xl list-disc transition-colors duration-200 hover:text-sky-300 select-none"
              >
                Episode {formatURL(episode)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}