import { NavLink } from 'react-router-dom';
import { UserDetailMenuProp } from '../../types';

function UserDetailMenu({ menuTitle, path }: UserDetailMenuProp) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }: { isActive: boolean }) =>
          isActive
            ? 'border-b-2 pb-1 border-secondaryBg text-nowrap text-secondaryBg'
            : 'hover:text-secondaryBg text-nowrap'
        }
      >
        {menuTitle}
      </NavLink>
    </li>
  );
}

export default UserDetailMenu;
