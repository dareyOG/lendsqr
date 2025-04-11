import { ReactNode } from 'react';

function TableData({ className, children }: { className?: string; children: ReactNode }) {
  return <td className={className}>{children}</td>;
}

export default TableData;
