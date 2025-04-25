import { ReactNode } from 'react';

import SideBar from './SideBar';
import ModalNav from './ModalNav';
import { useNavBarMenu } from '../context/NavMenuContext';

function Main({ children }: { children: ReactNode }) {
  const { isNavMenuActive } = useNavBarMenu();
  return (
    <main className="grid lg:grid-cols-[28.3rem_1fr] h-screen">
      {isNavMenuActive && <ModalNav />}
      <SideBar />
      <section className="bg-inactive/5">{children}</section>
    </main>
  );
}

export default Main;
