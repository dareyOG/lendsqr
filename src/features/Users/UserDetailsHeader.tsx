import { FaRegUser } from 'react-icons/fa6';
import { UsersPropType } from '../../types';

function UserDetailsHeader({ selectedUser }: { selectedUser: UsersPropType }) {
  console.log(selectedUser);

  return (
    <div
      role="banner"
      className="flex items-center divide-x-[0.1rem] divide-secondary/20 [&_div]:px-10 pt-10"
    >
      <div className="flex items-center gap-x-[2rem]">
        {/* <span className="bg-primary/[16%] p-10 rounded-full text-primary"> */}

        {selectedUser?.profile?.avatar ? (
          <img src={selectedUser?.profile?.avatar} alt={`${selectedUser?.userName} photo`} />
        ) : (
          <span className="bg-primary/[16%] p-10 rounded-full text-primary">
            <FaRegUser />
          </span>
        )}

        <span className="">
          <p className="text-[2.2rem] font-medium">{selectedUser?.userName}</p>
          <p className="text-[1.4rem] text-secondary">{selectedUser?.accountNumber}</p>
        </span>
      </div>
      <div>
        <p className="font-medium text-secondary text-[1.4rem]">User's Tier</p>
        <div>star component here</div>
      </div>
      <div>
        <p className="text-[2.2rem] font-medium">{selectedUser?.accountBalance}</p>
        <p className="text-[1.2rem] capitalize">{selectedUser?.accountNumber}&#47;Providus Bank</p>
      </div>
    </div>
  );
}

export default UserDetailsHeader;
