import { Link, Outlet } from 'react-router-dom';

import UserDetailMenu from '../../ui/UserDetailMenu';
import UserDetailHeader from './UserDetailHeader';
import ActionButton from '../../ui/ActionButton';

import { HiArrowLongLeft } from 'react-icons/hi2';

function UserDetails() {
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
          <ActionButton title="blacklist user" variation="blacklist" />
          <ActionButton title="activate user" variation="activate" />
        </div>
      </div>
      <section className="border bg-white border-transparent flex flex-col gap-y-10">
        <UserDetailHeader
          user="Grace Effiom"
          id="LSQFf587g90"
          bank="providus bank"
          accountNo="9912345678"
          amount="200000"
        />
        <div className="">
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
        </div>
      </section>
      <>
        <Outlet />
      </>
    </main>
  );
}

export default UserDetails;
