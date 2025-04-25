import { useNavigate } from 'react-router-dom';
import { useUpdateStatus } from '../features/Users/useUpdateStatus';

import ModalItem from './ModalItem';

import { FaRegEye, FaUserCheck, FaUserXmark } from 'react-icons/fa6';
import { UsersPropType } from '../types';

function ModalUser({
  currentStatus,
  selectedID,
  handleBlacklist,
  handleActivate
}: {
  currentStatus: string;
  selectedID: string;
  handleBlacklist: () => void;
  handleActivate: () => void;
}) {
  const navigate = useNavigate();
  const { usersUpdate } = useUpdateStatus();

  const currentUser = usersUpdate?.find((user: UsersPropType) => user.id === selectedID);

  return (
    <ul
      role="dialog"
      className="flex flex-col gap-3 z-10 absolute top-16 -right-5 bg-white border border-transparent drop-shadow-xl p-6 rounded-md"
    >
      <ModalItem
        icon={<FaRegEye />}
        item="view details"
        handleClick={() => navigate(`/users/${currentUser?.userName}`)}
      />
      {currentStatus !== 'blacklisted' && (
        <ModalItem icon={<FaUserXmark />} item="blacklist user" handleClick={handleBlacklist} />
      )}
      {currentStatus !== 'active' && (
        <ModalItem icon={<FaUserCheck />} item="activate user" handleClick={handleActivate} />
      )}
    </ul>
  );
}

export default ModalUser;

/* 

  const handleBlacklist = (id: string) => {
    setUsersWithStatus(prevUsers =>
      prevUsers.map(user => (user.id === id ? { ...user, status: 'blacklisted' } : user))
    );
  };

  const handleActivate = (id: string) => {
    setUsersWithStatus(prevUsers =>
      prevUsers.map(user => (user.id === id ? { ...user, status: 'active' } : user))
    );
  };

*/
