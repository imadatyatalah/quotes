import Link from "next/link";
import Image from "next/image";

import Logo from "public/logo.png";

const Header = () => {
  return (
    <header className="py-2">
      <div className="flex justify-between items-center">
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
          <ul className="flex space-x-4 text-primary-300 font-medium sm:text-lg">
            <li>
              <Link href="/signup">
                <a>Sign up</a>
              </Link>
            </li>

            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
