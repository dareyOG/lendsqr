import { ReactNode } from 'react';

import SideBar from './Sidebar';

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-[28.3rem_1fr]">
      <SideBar />
      <div className="bg-blacklisted">{children}</div>
    </main>
  );
}

export default Main;
