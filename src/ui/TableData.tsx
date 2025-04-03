import { useNavigate } from 'react-router-dom';

import Button from './Button';

import { FaEllipsisVertical } from 'react-icons/fa6';
import { TableDataPropType } from '../types';

function TableBody({ data }: TableDataPropType) {
  const navigate = useNavigate();

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
          <Button
            icon={<FaEllipsisVertical />}
            style=""
            handleClick={() => navigate('/user-details')}
          />
        </tr>
      ))}
    </>
  );
}

export default TableBody;
