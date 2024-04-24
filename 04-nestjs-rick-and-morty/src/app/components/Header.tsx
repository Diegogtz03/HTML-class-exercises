import { navigateToCharacters, navigateToFavorites } from "../actions";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-7 mb-4 flex justify-end space-x-5 sticky top-0">
      <button onClick={() => navigateToCharacters()}>
        Characters
      </button>

      <button onClick={() => navigateToFavorites()}>
        Favorites
      </button>
    </header>
  );
}