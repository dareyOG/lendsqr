import { ButtonPropType } from '../types';

function Button({ title, icon, disabled, handleClick, className }: ButtonPropType) {
  if (icon && !title)
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={`${className} cursor-pointer`}
      >
        {icon}
      </button>
    );
  if (!icon && title)
    return (
      <button
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={`${className} cursor-pointer`}
      >
        {title}
      </button>
    );
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`${className} cursor-pointer`}
    >
      {icon}
      {title}
    </button>
  );
}

export default Button;
