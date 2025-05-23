import { useAuth } from './useAuth';

import Button from '../../ui/Button';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

function LogOut() {
  const auth = useAuth();

  return (
    <Button
      title="logout"
      icon={<FaArrowRightFromBracket />}
      handleClick={auth?.logout}
      className="ml-[3rem] capitalize mt-[4rem] w-fit flex items-center gap-[1.2rem] text-secondaryText hover:opacity-50"
    />
  );
}

export default LogOut;
