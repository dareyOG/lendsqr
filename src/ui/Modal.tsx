import { useNavigate, useParams } from 'react-router-dom';

import ModalItem from './ModalList';

import { FaRegEye, FaUserCheck, FaUserXmark } from 'react-icons/fa6';

function Modal() {
  const navigate = useNavigate();
  // const x = useParams();
  // console.log(x);

  const userId = '12345'; // Replace with actual user ID
  // This should be passed as a prop or obtained from context

  const handleBlacklist = () => {};
  const handleActivate = () => {};

  return (
    <div
      role="dialog"
      className="border border-transparent drop-shadow-xl w-fit rounded-[0.5rem] bg-white p-6"
    >
      <ul className="flex flex-col gap-y-4">
        <ModalItem
          icon={<FaRegEye />}
          item="view details"
          handleClick={() => navigate(`/users/${userId}`)}
        />
        <ModalItem icon={<FaUserXmark />} item="blacklist user" handleClick={handleBlacklist} />
        <ModalItem icon={<FaUserCheck />} item="activate user" handleClick={handleActivate} />
      </ul>
    </div>
  );
}

export default Modal;
