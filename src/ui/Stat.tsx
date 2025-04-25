import { StatPropType } from '../types';

function Stat({ icon, title, stat, color }: StatPropType) {
  const colorVariants = {
    users: 'text-users bg-users/20',
    activeUsers: 'text-activeUsers bg-activeUsers/20',
    savings: 'text-savings bg-savings/20',
    loans: 'text-loans bg-loans/20'
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-[2rem] [&>*]:w-fit">
      <div className={`border-transparent rounded-full p-4 ${colorVariants[color]}`}>{icon}</div>
      <div className="text-secondary uppercase text-nowrap text-[1.8rem] md:text-[1.6rem] lg:text-[1.4rem] font-medium">
        {title}
      </div>
      <div className="font-semibold text-[3rem] lg:text-[2.4rem]">{stat}</div>
    </div>
  );
}

export default Stat;
