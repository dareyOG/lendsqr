import { useUsers } from '../features/Users/useUsers';
import Button from './Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { PaginationPropType } from '../types';

function Pagination({
  usersPerPage,
  activePage,
  setActivePage,
  setUsersPerPage
}: PaginationPropType) {
  const { users } = useUsers();
  // console.log(users);

  const pageNumbers: number[] = [];

  const totalPages: number = Math.ceil((users?.length as number) / usersPerPage);

  for (let currPage = 1; currPage <= (totalPages as number); currPage++) {
    pageNumbers.push(currPage);
  }

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const handlePrev = () => {
    const previous = activePage === 1 ? activePage : activePage - 1;

    setActivePage(previous);
  };

  const handleNext = () => {
    const next = activePage < totalPages ? activePage + 1 : activePage;

    setActivePage(next);
  };

  return (
    <nav className="flex flex-col gap-y-10 md:flex-row items-center justify-between">
      <div className="text-nowrap">
        showing
        <span className="outline-1 rounded-md">
          <select value={usersPerPage} onChange={e => setUsersPerPage(+e.target.value)}>
            <option value={'10'}>10</option>
            <option value={'25'}>25</option>
            <option value={'50'}>50</option>
            <option value={'100'}>100</option>
          </select>
        </span>{' '}
        out of {users?.length}
      </div>
      <div className={`${usersPerPage === users?.length ? 'invisible' : 'visible'} flex gap-x-3.5`}>
        <Button
          icon={<FaChevronLeft />}
          disabled={activePage === 1}
          handleClick={handlePrev}
          className="bg-secondary/20 p-1 rounded-[0.4rem] disabled:cursor-not-allowed text-secondary/60"
        />
        {pageNumbers.map(page => (
          <Button
            key={page}
            title={page}
            handleClick={() => handlePageClick(page)}
            className={`${
              activePage === page ? 'text-secondary/100 font-semibold' : 'text-secondary/60'
            } cursor-pointer`}
          />
        ))}
        <Button
          icon={<FaChevronRight />}
          disabled={activePage === totalPages}
          handleClick={handleNext}
          className="bg-secondary/20 p-1 rounded-[0.4rem] disabled:cursor-not-allowed text-secondary/60"
        />
      </div>
    </nav>
  );
}

export default Pagination;
