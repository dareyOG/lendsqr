import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="relative rounded-[0.8rem] focus-within:outline-[0.1rem] focus-within:outline-accent">
      <input
        type="text"
        placeholder="search for anything"
        className="border-secondary/20  border-[0.1rem] w-[40rem] h-[4rem] px-[1.5rem] rounded-[0.8rem] opacity-70 focus:outline-[0.1rem] focus:outline-transparent"
      />
      <span className="absolute top-0  right-0 border-[0.1rem] border-transparent bg-accent cursor-pointer text-white w-[5rem] h-[4rem] flex items-center justify-center rounded-r-[0.8rem]">
        <FaSearch />
      </span>
    </div>
  );
}

export default SearchBar;
