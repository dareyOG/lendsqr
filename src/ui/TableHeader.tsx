import TableHeadRow from './TableHeadRow';

function TableHeader({ toggleFilterForm }: { toggleFilterForm: () => void }) {
  return (
    <thead className="text-[1.2rem] bg-white px-2">
      <TableHeadRow toggleFilterForm={toggleFilterForm} />
    </thead>
  );
}

export default TableHeader;
