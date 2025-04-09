import { ReactNode } from 'react';

function Form({ onSubmit, children }: { onSubmit: () => void; children: ReactNode }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-14">
      {children}
    </form>
  );
}

export default Form;
