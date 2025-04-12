import { ReactNode } from 'react';

function TableBodyRow({ children }: { children: ReactNode }) {
  return <tr className="gap-5">{children}</tr>;
}

export default TableBodyRow;
