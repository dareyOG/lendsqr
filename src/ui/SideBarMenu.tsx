import { MenuPropType, SideBarMenuPropType } from '../types';

function SideBarMenu({ menu, menuTitle, render }: SideBarMenuPropType<MenuPropType>) {
  return (
    <div>
      <h1 className="uppercase text-[1.2rem] mb-[0.5rem] pl-[3rem] text-secondaryText opacity-50">
        {menuTitle}
      </h1>
      <ul className="flex flex-col gap-[1.2rem]">{menu.map(render)}</ul>
    </div>
  );
}

export default SideBarMenu;
