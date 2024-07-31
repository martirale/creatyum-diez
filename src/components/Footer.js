"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      setCSSVariables("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      setCSSVariables("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
      setCSSVariables("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setCSSVariables("dark");
    }
  };

  const setCSSVariables = (theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--logo", "url('/creatyum-logo-y.svg')");
      root.style.setProperty("--logo-icon", "url('/creatyum-icon-y.svg')");
      root.style.setProperty("--navbar-open", "url('/icons/hamburger-y.svg')");
      root.style.setProperty("--navbar-close", "url('/icons/close-y.svg')");
    } else {
      root.style.setProperty("--logo", "url('/creatyum-logo-k.svg')");
      root.style.setProperty("--logo-icon", "url('/creatyum-icon-k.svg')");
      root.style.setProperty("--navbar-open", "url('/icons/hamburger-k.svg')");
      root.style.setProperty("--navbar-close", "url('/icons/close-k.svg')");
    }
  };

  return (
    <footer className="bg-yellow border-t-black border-t-[1px] text-black dark:bg-black dark:border-t-yellow dark:border-t-[1px] dark:text-yellow p-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mt-16 mb-16 md:mt-0 md:mb-0">
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
          <button onClick={toggleTheme} className="ml-4 focus:outline-none">
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} className="text-yellow" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-black" />
            )}
          </button>
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
