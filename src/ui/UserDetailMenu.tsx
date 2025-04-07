import { NavLink } from 'react-router-dom';
import { UserDetailMenuProp } from '../types';

function UserDetailMenu({ menuTitle, path }: UserDetailMenuProp) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }: { isActive: boolean }) =>
          isActive
            ? 'border-b-2 pb-1 border-accent text-nowrap text-accent'
            : 'hover:text-accent text-nowrap'
        }
      >
        {menuTitle}
      </NavLink>
    </li>
  );
}

export default UserDetailMenu;
