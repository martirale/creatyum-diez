import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow text-black dark:bg-black dark:text-yellow p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold mb-8">
          <Link href="/">Logo</Link>
        </div>
        <div className="text-sm">
          <p>&copy; 2024 Creatyum Media</p>
        </div>
      </div>
    </footer>
  );
}
