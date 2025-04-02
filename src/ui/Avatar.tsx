import { FaCaretDown } from 'react-icons/fa6';

function Avatar() {
  return (
    <div className="flex items-center font-login justify-end gap-x-[1.2rem]">
      <img src="/img/avatar.svg" alt="avatar" className="rounded-full" />
      <div className="flex items-center gap-x-[0.5rem]">
        <span className="font-medium">Adedeji</span>
        <FaCaretDown />
      </div>
    </div>
  );
}

export default Avatar;
