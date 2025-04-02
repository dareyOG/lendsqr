import Button from './Button';

import { LuListFilter } from 'react-icons/lu';
import { TableHeaderType } from '../types';

function TableHeader({ title }: TableHeaderType) {
  if (title === '')
    return (
      <th className="flex items-center gap-x-5">
        <span>{title}</span>
      </th>
    );
  return (
    <th className="flex items-center gap-x-5">
      <span>{title}</span>
      <Button icon={<LuListFilter />} />
    </th>
  );
}

export default TableHeader;
