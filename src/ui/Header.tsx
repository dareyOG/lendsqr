import { Link } from 'react-router-dom';

import Logo from './Logo';
import SearchBar from './SearchBar';
import HamburgerMenu from './HamburgerMenu';
import Avatar from './Avatar';

import { FaRegBell } from 'react-icons/fa6';

function Header() {
  return (
    <header className="bg-white flex w-[100vw] lg:w-full items-center justify-between px-[1.5rem] py-[1rem] md:px-[3rem] md:py-[2rem] gap-x-3 lg:gap-x-0 sticky top-0 z-20">
      <div className="flex items-center gap-x-[1.5rem] lg:gap-x-[15rem]">
        <Logo />
        <SearchBar />
      </div>

      <div className="flex items-center gap-x-[1.5rem] lg:gap-x-[5rem] text-primary [&>*:not(:last-child)]:cursor-pointer">
        <Link to="/docs" className="underline hidden lg:block">
          Docs
        </Link>
        <span className="hidden lg:block">
          <FaRegBell />
        </span>
        <span className="hidden lg:block">
          <Avatar />
        </span>
      </div>

      <HamburgerMenu />
    </header>
  );
}

export default Header;
