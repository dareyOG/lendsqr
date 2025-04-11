import { ButtonPropType } from '../types';

function Button({ title, icon, disabled, handleClick, style }: ButtonPropType) {
  if (icon && !title)
    return (
      <button disabled={disabled} onClick={handleClick} className={`${style} cursor-pointer`}>
        {icon}
      </button>
    );
  if (!icon && title)
    return (
      <button disabled={disabled} onClick={handleClick} className={`${style} cursor-pointer`}>
        {title}
      </button>
    );
  return (
    <button disabled={disabled} onClick={handleClick} className={`${style} cursor-pointer`}>
      {icon}
      {title}
    </button>
  );
}

export default Button;
