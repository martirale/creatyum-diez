import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-yellow text-black dark:bg-black dark:text-yellow p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <div className="logo"></div>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/post">Artículos</Link>
            </li>
            <li>
              <Link href="/podcast">Podcast</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
