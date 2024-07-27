"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "bg-black",
        "text-yellow",
        "dark:bg-yellow",
        "dark:text-black",
        "w-full",
        "flex-col",
        "top-[81px]",
        "left-0",
        "p-8",
        "gap-7",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }

    return menuClasses.join(" ");
  }

  return (
    <nav className="md:p-0 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="logo"></div>
        </Link>

        <div className={getMenuClasses()}>
          <Link href="/" className="text-2xl mx-2 hover:underline md:pl-4">
            Artículos
          </Link>
          <Link
            href="/podcast"
            className="text-2xl mx-2 hover:underline md:pl-4"
          >
            Podcast
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <div className="navbar-close"></div>
            ) : (
              <div className="navbar-open"></div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
