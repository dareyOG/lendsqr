import { JSX } from 'react';

function ModalItem({
  icon,
  item,
  handleClick
}: {
  icon: JSX.Element;
  item: string;
  handleClick: () => void;
}) {
  return (
    <li
      role="button"
      onClick={handleClick}
      className="flex items-center gap-x-4 cursor-pointer text-inactive hover:text-accent"
    >
      {icon}
      <span className="capitalize text-[1.4rem] font-medium">{item}</span>
    </li>
  );
}

export default ModalItem;
