import { FaRegEye, FaUserCheck, FaUserXmark } from 'react-icons/fa6';
import ModalItem from './ModalItem';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../features/Users/useUsers';
import { UsersPropType } from '../types';

function Modal({ id }: { id: string }) {
  const navigate = useNavigate();
  const { users } = useUsers();

  const clickedUser = users?.find((user: UsersPropType) => user.id === id);

  const handleBlacklist = () => {};
  const handleActivate = () => {};

  // flex absolute top-0 -right-[10%] bg-white shadow-lg p-4  flex-col gap-y-4 border border-transparent drop-shadow-xl w-fit rounded-[0.5rem] z-50
  return (
    <ul
      role="dialog"
      className="flex flex-col gap-3 z-10 absolute top-16 -right-20 bg-white border border-transparent drop-shadow-xl p-6 rounded-md"
    >
      <ModalItem
        icon={<FaRegEye />}
        item="view details"
        handleClick={() => navigate(`/users/${clickedUser.userName}`)}
      />
      <ModalItem icon={<FaUserXmark />} item="blacklist user" handleClick={handleBlacklist} />
      <ModalItem icon={<FaUserCheck />} item="activate user" handleClick={handleActivate} />
    </ul>
  );
}

export default Modal;
