import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-7 mb-4 flex justify-end space-x-5 sticky top-0">
      <Link href="/">
        Characters
      </Link>

      <Link href="/favorites">
        Favorites
      </Link>
    </header>
  );
}