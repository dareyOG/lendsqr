import { NavLink } from 'react-router-dom';
import { ItemType } from '../types';

function SideBarMenuItem({ item }: { item: ItemType }) {
  return (
    <li>
      <NavLink
        to={item.path}
        className={
          'border-l-4 border-l-transparent pl-[3rem] w-full flex items-center gap-[1.2rem]  hover:opacity-100 hover:bg-secondaryBg/20 text-secondaryText opacity-50'
        }
      >
        {item.icon}
        <span>{item.pageTitle}</span>
      </NavLink>
    </li>
  );
}

export default SideBarMenuItem;
