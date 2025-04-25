import { FaCaretDown } from 'react-icons/fa6';

function Avatar() {
  return (
    <div className="font-login flex justify-center items-center gap-x-[1.2rem] [&_[role=button]]:cursor-pointer hover:[&_[role=button]]:underline">
      <img src="/img/avatar.svg" alt="avatar" className="rounded-full" />
      <div role="button" className="flex justify-center items-center">
        <span>Adedeji</span>
        <span>
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
}

export default Avatar;

/* 
 <div className="flex justify-center items-center font-login gap-x-[1.2rem] [&_[role=button]]:cursor-pointer hover:[&_[role=button]]:underline">
      <img src="/img/avatar.svg" alt="avatar" className="rounded-full hidden md:block" />
      <div role="button" className="flex justify-center items-center">
        <span>Adedeji</span>
        <span>
          <FaCaretDown />
        </span>
      </div>
    </div>
*/
