import { FaRegUser } from 'react-icons/fa6';
import { UserDetailHeaderPropType } from '../types';

function UserDetailHeader({ user, id, amount, accountNo, bank }: UserDetailHeaderPropType) {
  return (
    <div className="flex items-center divide-x-[0.1rem] divide-secondaryText/20 [&_div]:px-10 pt-10">
      <div className="flex items-center gap-x-[2rem]">
        <span className="bg-primaryText/[16%] p-10 rounded-full text-primaryText">
          <FaRegUser />
        </span>
        <span className="">
          <p className="text-[2.2rem] font-medium">{user}</p>
          <p className="text-[1.4rem] text-secondaryText">{id}</p>
        </span>
      </div>
      <div>
        <p className="font-medium text-secondaryText text-[1.4rem]">User's Tier</p>
        <div>star component here</div>
      </div>
      <div>
        <p className="text-[2.2rem] font-medium">#{amount}</p>
        <p className="text-[1.2rem] capitalize">
          {accountNo}&#47;{bank}
        </p>
      </div>
    </div>
  );
}

export default UserDetailHeader;
