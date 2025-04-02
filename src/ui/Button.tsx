import { JSX } from 'react';

function Button({ icon }: { icon: JSX.Element }) {
  return (
    <button onClick={() => {}} className="cursor-pointer">
      {icon}
    </button>
  );
}

export default Button;
