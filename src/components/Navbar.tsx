"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LocaleSwitcher from "./LocaleSwitcher";
import Searchbar from "./Searchbar";
import { useTranslation } from "@/hooks/useTranslation";

const Navbar = () => {
  const dictionary = useTranslation().navigation;
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2 dark:bg-black dark:text-white">
      <div className="font-bold text-2xl text-gray-100">
        Bipul&nbsp;
        <span className="text-gray-700 dark:text-gray-400">Blog</span>
      </div>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-green-500">{dictionary.home}</li>
          <li className="p-4 border-green-500">{dictionary.categories}</li>
          <li className="p-4 border-green-500">{dictionary.contact}</li>
          <li className="p-4">
            <Searchbar />
          </li>
        </ul>
      </nav>
      <div className="flex justify-end w-3/12">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
