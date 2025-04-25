import { useNavBarMenu } from '../context/NavMenuContext';

import { GiHamburgerMenu } from 'react-icons/gi';

function HamburgerMenu() {
  const { toggleMenu } = useNavBarMenu();

  return (
    <button onClick={() => toggleMenu} className="lg:hidden text-[3rem] cursor-pointer">
      <GiHamburgerMenu />
    </button>
  );
}

export default HamburgerMenu;
