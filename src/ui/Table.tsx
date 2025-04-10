import { ReactNode } from 'react';

function Table({ children }: { children: ReactNode }) {
  return <table className="table-auto w-full">{children}</table>;
}

export default Table;
