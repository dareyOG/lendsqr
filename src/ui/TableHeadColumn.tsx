import Button from './Button';
import { LuListFilter } from 'react-icons/lu';

function TableHeadColumn({
  title,
  toggleFilterForm
}: {
  title: string;
  toggleFilterForm: () => void;
}) {
  return (
    <div className="flex items-center gap-x-3">
      <span>{title}</span>
      <Button icon={<LuListFilter />} handleClick={toggleFilterForm} />
    </div>
  );
}

export default TableHeadColumn;
