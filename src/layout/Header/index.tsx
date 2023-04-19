import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";

import Logo from "public/logo.png";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, resolvedTheme, setTheme } = useTheme();

  const handleMoodToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-5 w-5"></div>;

  return (
    <div>
      <button
        onClick={handleMoodToggle}
        type="button"
        className="rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="py-2">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              width="45"
              height="45"
              priority
              alt="Quotes logo"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4 font-medium text-primary-300 dark:text-primary-500">
              <li>
                <Link href="/random">Random</Link>
              </li>
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
