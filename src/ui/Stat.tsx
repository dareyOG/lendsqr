import { StatType } from '../types';

function Stat({ icon, title, stat, color }: StatType) {
  return (
    <div className="flex flex-col justify-center  bg-primaryBg px-10 pt-5 pb-6 gap-y-3 rounded-md [&_span]:w-fit">
      <span className={`bg-${color}/20 text-${color} rounded-full p-4`}>{icon}</span>
      <span className="text-secondaryText uppercase text-nowrap text-[1.4rem] font-medium">
        {title}
      </span>
      <span className="font-semibold text-[2.4rem]">{stat}</span>
    </div>
  );
}

export default Stat;
