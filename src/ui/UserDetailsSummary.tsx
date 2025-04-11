import { ReactNode } from 'react';

function UserDetailsSummary({ children }: { children: ReactNode }) {
  return (
    <section className="border bg-white border-transparent flex flex-col gap-y-10">
      {children}
    </section>
  );
}

export default UserDetailsSummary;
