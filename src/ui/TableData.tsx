import Button from './Button';

import { FaEllipsisVertical } from 'react-icons/fa6';
import { TableDataType } from '../types';

function TableBody({ data }: TableDataType) {
  return (
    <>
      {data.map(dataItem => (
        <tr className="capitalize text-[1.2rem] font-semibold flex items-center justify-between gap-x-10">
          <td>{dataItem.organization}</td>
          <td>{dataItem.username}</td>
          <td>{dataItem.email}</td>
          <td>{dataItem.phoneNumber}</td>
          <td>{dataItem.dateJoined}</td>
          <td>{dataItem.status}</td>
          <Button icon={<FaEllipsisVertical />} />
        </tr>
      ))}
    </>
  );
}

export default TableBody;
