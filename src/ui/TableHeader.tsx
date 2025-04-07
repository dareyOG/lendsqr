import Button from './Button';

import { TableHeaderPropType } from '../types';
import { LuListFilter } from 'react-icons/lu';

function TableHeader({ title }: TableHeaderPropType) {
  return (
    <th className="flex items-center text-nowrap gap-x-5 w-[10rem]">
      <div>{title}</div>
      {title === '' ? null : (
        <>
          <Button icon={<LuListFilter />} handleClick={() => {}} />
        </>
      )}
    </th>
  );
}

export default TableHeader;
