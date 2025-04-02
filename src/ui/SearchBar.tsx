import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="relative focus:outline-secondaryText/20 focus:outline-1">
      <input
        type="search"
        placeholder="search for anything"
        className="border-secondaryText/20  border-[0.1rem] w-[40rem] h-[4rem] px-[1.5rem] rounded-[0.8rem] opacity-70"
      />
      <span className="absolute right-0 border-[0.1rem] border-transparent top-0 bg-secondaryBg cursor-pointer text-primaryBg w-[5rem] h-[4rem] flex items-center justify-center rounded-r-[0.8rem]">
        <FaSearch />
      </span>
    </div>
  );
}

export default SearchBar;
