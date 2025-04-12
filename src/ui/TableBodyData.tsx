import { ReactNode } from 'react';

function TableBodyData({ className, children }: { className?: string; children: ReactNode }) {
  return <td className={className}>{children}</td>;
}

export default TableBodyData;
