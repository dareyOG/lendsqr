import { Link, Outlet, useParams } from 'react-router-dom';

import UserDetailMenu from '../../ui/UserDetailMenu';
import UserDetailHeader from './UserDetailsHeader';
import ActionButton from '../../ui/ActionButton';

import { HiArrowLongLeft } from 'react-icons/hi2';
import UserDetailsContent from '../../ui/UserDetailsContent';
import UserDetailsHeader from '../../ui/UserDetailsSummary';

function UserDetails() {
  const { userId } = useParams();

  console.log(userId);

  const status = 'active';

  // fetch user based on id

  return (
    <main className="px-[3.5rem] py-[4.5rem] flex flex-col gap-y-9">
      <Link
        to={'/users'}
        className="text-secondaryText opacity-50 hover:text-primary flex items-center gap-x-2 w-fit hover:opacity-100 duration-300 ease-in hover:[&>*:not(span)]:-translate-x-2 [&>*:not(span)]:transition-all [&>*:not(span)]:duration-300 [&>*:not(span)]:ease-in"
      >
        <HiArrowLongLeft />
        <span>Back to Users</span>
      </Link>
      <div className="flex items-center justify-between">
        <h1 className="w-fit text-[2.4rem] font-medium">User Details</h1>

        <div className="flex gap-x-5">
          <ActionButton
            title="blacklist user"
            disabled={status === 'active'}
            variation="blacklist"
          />
          <ActionButton title="activate user" disabled={status === 'active'} variation="activate" />
        </div>
      </div>
      <UserDetailsHeader>
        <UserDetailHeader
          user="Grace Effiom"
          id="LSQFf587g90"
          bank="providus bank"
          accountNo="9912345678"
          amount="200000"
        />
        <>
          <nav className="flex items-center justify-center">
            <ul className="font-user_details_tab flex items-center justify-center [&>:not(:last-child)]:capitalize gap-x-32">
              <UserDetailMenu menuTitle="general details" path="general-details" />
              <UserDetailMenu menuTitle="documents" path="documents" />
              <UserDetailMenu menuTitle="bank details" path="bank-details" />
              <UserDetailMenu menuTitle="loans" path="loans" />
              <UserDetailMenu menuTitle="savings" path="savings" />
              <UserDetailMenu menuTitle="App and System" path="app-and-system" />
            </ul>
          </nav>
        </>
      </UserDetailsHeader>

      <UserDetailsContent>
        <Outlet />
      </UserDetailsContent>
    </main>
  );
}

export default UserDetails;
