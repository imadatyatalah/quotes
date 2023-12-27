import Link from "next/link";
import Image from "next/image";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="py-2">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
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

          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
