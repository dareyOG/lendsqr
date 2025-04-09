import { FaCaretDown } from 'react-icons/fa6';
import { useAuth } from '../features/Authentication/useAuth';

function Avatar() {
  const { user } = useAuth();

  return (
    <div className="flex items-center font-login justify-end gap-x-[1.2rem] [&_[role=button]]:cursor-pointer hover:[&_[role=button]]:underline">
      <img src="/img/avatar.svg" alt="avatar" className="rounded-full" />
      <div role="button" className="flex items-center gap-x-[0.5rem]">
        <span className="capitalize"> {user?.email.split(/@|_|(?=\d)|(?=[A-Z])/)[0]}</span>
        <FaCaretDown />
      </div>
    </div>
  );
}

export default Avatar;
