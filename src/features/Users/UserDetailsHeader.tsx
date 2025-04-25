import { FaRegUser, FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';

import { UsersPropType } from '../../types';
import { formatPrice } from 'formatnumber-to-naira';

function UserDetailsHeader({ selectedUser }: { selectedUser: UsersPropType }) {
  return (
    <div
      role="banner"
      className="flex items-center divide-x-[0.1rem] divide-secondary/20 [&_div]:px-10 pt-10"
    >
      <div className="flex items-center gap-x-[2rem]">
        <span className="bg-primary/[16%] p-10 rounded-full text-primary">
          <FaRegUser />
        </span>

        <span className="">
          <p className="text-[2.2rem] font-medium">{selectedUser?.userName}</p>
          <p className="text-[1.4rem] text-secondary">{selectedUser?.accountNumber}</p>
        </span>
      </div>
      <div>
        <p className="font-medium text-secondary text-[1.4rem]">User's Tier</p>
        <div className="flex justify-center items-center text-[#E9B200]">
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
      <div>
        <p className="text-[2.2rem] font-medium">{formatPrice(+selectedUser?.accountBalance)}</p>
        <p className="text-[1.2rem] capitalize">{selectedUser?.accountNumber}&#47;providus bank</p>
      </div>
    </div>
  );
}

export default UserDetailsHeader;
