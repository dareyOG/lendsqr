import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useUpdateStatus } from './useUpdateStatus';

import UserDetailMenu from '../../ui/UserDetailMenu';
import UserDetailHeader from './UserDetailsHeader';
import ActionButton from '../../ui/ActionButton';
import UserDetailsContent from '../../ui/UserDetailsContent';
import UserDetailsSummary from '../../ui/UserDetailsSummary';

import { HiArrowLongLeft } from 'react-icons/hi2';
import { UsersPropType } from '../../types';

function UserDetails() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { usersUpdate, blacklist, activate } = useUpdateStatus();

  const selectedUser: UsersPropType | undefined = usersUpdate?.find(
    (user: UsersPropType) => user.userName === username
  );

  return (
    <main className="px-[3.5rem] py-[4.5rem] flex flex-col gap-y-9">
      <Link
        to={'/users'}
        className="text-secondaryText opacity-50 hover:text-primary flex items-center gap-x-2 w-fit hover:opacity-100 duration-300 ease-in hover:[&>*:not(span)]:-translate-x-2 [&>*:not(span)]:transition-all [&>*:not(span)]:duration-300 [&>*:not(span)]:ease-in"
      >
        <HiArrowLongLeft />
        <span>Back to Users</span>
      </Link>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h1 className="w-fit text-[2.4rem] font-medium">User Details</h1>

        <div className="flex gap-x-5 mt-[1.5rem] lg:mt-0">
          {selectedUser?.status !== 'blacklisted' && (
            <ActionButton
              title="blacklist user"
              handleClick={() => {
                if (selectedUser?.id) {
                  blacklist(selectedUser.id);
                  navigate('/users');
                }
              }}
              variation="blacklist"
            />
          )}
          {selectedUser?.status !== 'active' && (
            <ActionButton
              title="activate user"
              handleClick={() => {
                if (selectedUser?.id) {
                  activate(selectedUser.id);
                  navigate('/users');
                }
              }}
              variation="activate"
            />
          )}
        </div>
      </div>

      <UserDetailsSummary>
        {selectedUser && <UserDetailHeader selectedUser={selectedUser} />}

        <nav className="flex lg:items-center lg:justify-center">
          <ul className="font-user_details_tab flex flex-col w-full items-center lg:flex-row lg:items-center lg:justify-center [&>:not(:last-child)]:capitalize lg:gap-x-32">
            <UserDetailMenu menuTitle="general details" path="general-details" />
            <UserDetailMenu menuTitle="documents" path="documents" />
            <UserDetailMenu menuTitle="bank details" path="bank-details" />
            <UserDetailMenu menuTitle="loans" path="loans" />
            <UserDetailMenu menuTitle="savings" path="savings" />
            <UserDetailMenu menuTitle="App and System" path="app-and-system" />
          </ul>
        </nav>
      </UserDetailsSummary>

      <UserDetailsContent>
        <Outlet />
      </UserDetailsContent>
    </main>
  );
}

export default UserDetails;
