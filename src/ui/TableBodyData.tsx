import { ReactNode } from 'react';

function TableData({ children }: { children: ReactNode }) {
  return <td>{children}</td>;
}

export default TableData;
