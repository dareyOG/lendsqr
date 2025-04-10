import { useAuth } from './useAuth';

import Button from '../../ui/Button';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

function LogOut() {
  const { handleLogout } = useAuth();

  return (
    <Button
      title="logout"
      icon={<FaArrowRightFromBracket />}
      handleClick={handleLogout}
      style="ml-[3rem] mt-[4rem] w-fit flex items-center gap-[1.2rem] text-secondaryText opacity-50  hover:opacity-100"
    />
  );
}

export default LogOut;
