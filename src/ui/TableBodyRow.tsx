import { ReactNode } from 'react';

function TableBodyRow({ key, children }: { key: string; children: ReactNode }) {
  return <tr key={key}>{children}</tr>;
}

export default TableBodyRow;
