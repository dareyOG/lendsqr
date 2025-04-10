import Button from './Button';
import { LuListFilter } from 'react-icons/lu';

function TableHeadColumn({ title }: { title: string }) {
  const handlefilter = () => {};
  return (
    <div className="flex items-center gap-x-3">
      <span>{title}</span>
      <Button icon={<LuListFilter />} handleClick={handlefilter} />
    </div>
  );
}

export default TableHeadColumn;
