import { Link } from 'react-router-dom';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Avatar from './Avatar';

import { FaRegBell } from 'react-icons/fa6';

function Header() {
  return (
    <header className="flex w-full items-center justify-between px-[3rem] py-[2rem] sticky top-0 bg-white z-20">
      <div className="flex items-center gap-x-[15rem]">
        <Logo />
        <SearchBar />
      </div>

      <div className="flex items-center gap-x-[5rem] text-primary [&>*:not(:last-child)]:cursor-pointer">
        <Link to="/" className="underline">
          Docs
        </Link>
        <FaRegBell />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
