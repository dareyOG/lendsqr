import { ActionButtonPropType } from '../types';
import Button from './Button';

function ActionButton({ title, variation, disabled }: ActionButtonPropType) {
  const baseStyle =
    'border rounded-[0.8rem] px-[2rem] py-[0.5rem]  uppercase text-[1.4rem] text-center tracking-[10%] font-semibold';

  if (variation === 'blacklist')
    return (
      <Button
        title={title}
        disabled={disabled}
        handleClick={() => {}}
        className={`${baseStyle}  border-blacklist text-blacklist`}
      />
    );

  if (variation === 'activate')
    return (
      <Button
        title={title}
        disabled={disabled}
        handleClick={() => {}}
        className={`${baseStyle}  border-accent text-accent`}
      />
    );
}

export default ActionButton;
