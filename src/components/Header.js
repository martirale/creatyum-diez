"use client";
import Navbar from "../components/Navbar.js";

export default function Header() {
  return (
    <header className="fixed w-full bg-yellow text-black dark:bg-black dark:text-yellow p-6">
      <Navbar />
    </header>
  );
}
