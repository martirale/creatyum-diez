import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow text-black dark:bg-black dark:text-yellow p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-16 md:mb-0">
          <Link href="/">
            <div className="logo-icon"></div>
          </Link>
        </div>
        <div className="flex flex-col text-center md:flex-row md:items-center space-y-5 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
          <Link href="/" className="text-lg hover:underline md:text-base">
            Artículos
          </Link>
          <Link
            href="/podcast"
            className="text-lg hover:underline md:text-base"
          >
            Podcast
          </Link>
          <Link href="/about" className="text-lg hover:underline md:text-base">
            About
          </Link>
          <Link
            href="/collaborations"
            className="text-lg hover:underline md:text-base"
          >
            Colaboraciones
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:underline md:text-base"
          >
            Contacto
          </Link>
        </div>
        <div className="text-sm p-12 text-center md:flex md:items-center md:text-base md:p-0">
          <p>Creatyum &copy; 2024 una marca de Alejandro Mártir</p>
        </div>
      </div>
    </footer>
  );
}
