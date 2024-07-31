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
          <Link href="/about" className="text-lg hover:underline md:text-base">
            About
          </Link>
          <Link
            href="/podcast"
            className="text-lg hover:underline md:text-base"
          >
            Podcast
          </Link>
          <Link
            href="/timeline"
            className="text-lg hover:underline md:text-base"
          >
            Timeline
          </Link>
          <Link
            href="/collabs"
            className="text-lg hover:underline md:text-base"
          >
            Colabos
          </Link>
        </div>
        <div className="text-xs p-12 text-center md:flex md:items-center md:p-0">
          <p>
            &copy; COPYRIGHT 2024{" "}
            <a
              href="https://alemartir.com"
              target="_blank"
              className="hover:underline"
            >
              AM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
