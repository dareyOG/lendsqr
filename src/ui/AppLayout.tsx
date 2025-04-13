import { Outlet } from 'react-router-dom';

import Main from './Main';
import Header from './Header';

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-full">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
