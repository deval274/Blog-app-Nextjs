import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import SearchInput from "./search";
import { ModeToggle} from "./togglemode";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left section e.g., logo. */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-tr from-purple-500 to bg-indigo-500 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Byte
                </span>
                <span className="bg-gradient-to-tr from-indigo-500 to bg-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Code
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/articles"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Articles
            </Link>
            <Link
              href="/tutorial"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white "
            >
              Tutorial
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </div>

          {/* Right section e.g., buttons */}
          <div className="flex items-center gap-4">
            <SearchInput/>
            <ModeToggle/>
            <div className="hidden md:flex items-center gap-2">
              <Button>Login</Button>
              <Button variant="outline">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
