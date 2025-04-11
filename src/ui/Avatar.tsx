import { FaCaretDown } from 'react-icons/fa6';
import { useAuth } from '../features/Authentication/useAuth';

function Avatar() {
  const { username } = useAuth();

  return (
    <div className="flex items-center font-login justify-end gap-x-[1.2rem] [&_[role=button]]:cursor-pointer hover:[&_[role=button]]:underline">
      <img src="/img/avatar.svg" alt="avatar" className="rounded-full" />
      <div role="button" className="flex items-center gap-x-[0.5rem]">
        <span className="capitalize"> {username}</span>
        <FaCaretDown />
      </div>
    </div>
  );
}

export default Avatar;
