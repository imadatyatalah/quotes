import Link from "next/link";
import Image from "next/image";

import Logo from "public/logo.png";

const Header = () => {
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

        <nav>
          <ul className="flex space-x-4 font-medium text-primary-300 sm:text-lg">
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
      </div>
    </header>
  );
};

export default Header;
