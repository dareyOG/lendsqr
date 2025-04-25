import { createContext, ReactNode, useContext, useState } from 'react';

import { NavMenuContextPropType } from '../types';

const NavMenuContext = createContext<NavMenuContextPropType>({
  isOpen: false,
  toggleMenu: () => {}
});

export default function NavMenuContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('menu');

    setIsOpen(!isOpen);
  };

  return (
    <NavMenuContext.Provider value={{ isOpen, toggleMenu }}>{children}</NavMenuContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNavBarMenu() {
  const context = useContext(NavMenuContext);
  if (context === undefined) throw new Error('Context is placed out of scope');

  return context;
}
