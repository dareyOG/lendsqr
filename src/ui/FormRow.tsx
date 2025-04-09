import { ReactNode } from 'react';

function FormRow({
  label,
  type,
  errorMessage,
  children
}: {
  label?: string;
  type?: 'email' | 'password' | 'text';
  errorMessage: string;
  children: ReactNode;
}) {
  return (
    <div role="row" className="flex flex-col relative gap-2">
      {children}
      <label
        htmlFor={type}
        className="w-fit px-2 absolute top-5 left-5 text-[1.4rem] text-secondary/60 bg-white border border-transparent peer-focus:top-[-20%] peer-focus:text-primary peer-focus:font-semibold peer-not-placeholder-shown:top-[-20%]"
      >
        {label}
      </label>

      <span
        className="text-blacklist text-end text-[1.2rem] absolute bottom-[-2rem] left-0 w-full"
        style={{ visibility: errorMessage ? 'visible' : 'hidden' }}
      >
        {errorMessage}
      </span>
    </div>
  );
}

export default FormRow;
