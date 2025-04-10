import { useNavigate, useParams } from 'react-router-dom';

import ModalItem from './ModalList';

import { FaRegEye, FaUserCheck, FaUserXmark } from 'react-icons/fa6';

function Modal() {
  const navigate = useNavigate();
  const x = useParams();
  console.log(x);

  return (
    <div
      role="dialog"
      className="absolute -right-16 top-14 z-10 border border-transparent drop-shadow-xl w-fit rounded-[0.5rem] bg-white p-6"
    >
      <ul className="flex flex-col gap-y-4">
        <ModalItem
          icon={<FaRegEye />}
          item="view details"
          handleClick={() => navigate('users/${}')}
        />
        <ModalItem icon={<FaUserXmark />} item="blacklist user" handleClick={() => {}} />
        <ModalItem icon={<FaUserCheck />} item="activate user" handleClick={() => {}} />
      </ul>
    </div>
  );
}

export default Modal;
