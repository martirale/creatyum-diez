"use client";
import Navbar from "../components/Navbar.js";

export default function Header() {
  return (
    <header className="fixed w-full p-6 bg-yellow text-black dark:bg-black dark:text-yellow z-50">
      <Navbar />
    </header>
  );
}
