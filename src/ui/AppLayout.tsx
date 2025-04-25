import { Outlet } from 'react-router-dom';
import { useNavBarMenu } from '../context/NavMenuContext';

import Main from './Main';
import Header from './Header';
import ModalNav from './ModalNav';

function AppLayout() {
  const { isOpen } = useNavBarMenu();

  return (
    <div className="grid grid-rows-[auto_1fr] h-full">
      <Header />
      {isOpen && <ModalNav />}
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
