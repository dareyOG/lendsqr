// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Button from './Button';

import { FaEllipsisVertical } from 'react-icons/fa6';
import { UserPropType } from '../types';

function TableRow({ user }: { user: UserPropType }) {
  const navigate = useNavigate();

  return (
    <tr className="text-[1.2rem]">
      <td className="capitalize">{user.orgName.split('-')[0]}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.createdAt}</td>
      <td>{user.status || 'active'}</td>
      <Button
        icon={<FaEllipsisVertical />}
        style=""
        handleClick={() => navigate(`${user.id}/user-details`)}
      />
    </tr>
  );
}

export default TableRow;

// flex items-center text-nowrap gap-x-5 min-w-[7rem] text-center
