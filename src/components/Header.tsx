import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";

import Logo from "public/logo.png";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="py-2">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a>
              <Image
                src={Logo}
                width="45"
                height="45"
                priority
                alt="Quotes logo"
              />
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4 font-medium text-primary-300 dark:text-primary-500 sm:text-lg">
              <li>
                <Link href="/random">
                  <a>Random</a>
                </Link>
              </li>

              <li>
                <Link href="/signin">
                  <a>Sign in</a>
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <button
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light");
              }}
              type="button"
              className="rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={
                resolvedTheme === "light" ? "Dark Mode" : "Light Mode"
              }
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
