import { createContext, ReactNode, useState } from 'react';

const ModalContext = createContext(null);

function Modalnew({ children }: { children: ReactNode }) {
  const [activeRow, setactiveRow] = useState(null);

  const handleClose = () => setactiveRow(null);
  const handleOpen = setactiveRow;

  return (
    <ModalContext.Provider value={{ activeRow, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export default Modalnew;
