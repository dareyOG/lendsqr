import { ReactNode } from 'react';
import SideBar from './SideBar';

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="grid grid-cols-[28.3rem_1fr] h-screen">
      <SideBar />
      <section className="bg-inactive/5">{children}</section>
    </main>
  );
}

export default Main;
