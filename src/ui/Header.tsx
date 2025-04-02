import { Link } from 'react-router-dom';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Avatar from './Avatar';

import { FaRegBell } from 'react-icons/fa6';

function Header() {
  return (
    <header className="flex items-center justify-between px-[3rem] py-[3.5rem]">
      <div className="flex items-center gap-x-[15rem]">
        <Logo />
        <SearchBar />
      </div>

      <div className="flex items-center gap-x-[5rem] text-primaryText [&>*:not(:last-child)]:cursor-pointer">
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
