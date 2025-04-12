import { ReactNode } from 'react';

function TableBody({ children }: { children: ReactNode }) {
  return (
    <tbody className="text-[1.2rem] divide-y-[0.1rem] [&_tr]:text-nowrap [&_td]:py-5 divide-primary/10">
      {children}
    </tbody>
  );
}

export default TableBody;
