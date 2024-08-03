"use client";
import Navbar from "@/components/Navbar.js";

export default function Header() {
  return (
    <header className="fixed w-full p-6 bg-yellow bg-opacity-90 border-b-black border-b-[1px] text-black dark:bg-black dark:bg-opacity-95 dark:border-b-yellow dark:text-yellow z-50">
      <Navbar />
    </header>
  );
}
