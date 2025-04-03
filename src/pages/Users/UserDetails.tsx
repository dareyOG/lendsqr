import { Link, Outlet } from 'react-router-dom';

import Button from '../../ui/Button';

import { HiArrowLongLeft } from 'react-icons/hi2';
import { FaRegUser } from 'react-icons/fa6';
import UserDetailMenu from './UserDetailMenu';

function UserDetails() {
  return (
    <main className="px-[3.5rem] py-[4.5rem] flex flex-col gap-y-9">
      <Link
        to={'/users'}
        className="text-secondaryText opacity-50 hover:text-primaryText flex items-center gap-x-2 w-fit hover:opacity-100 duration-300 ease-in hover:[&>*:not(span)]:-translate-x-2 [&>*:not(span)]:transition-all [&>*:not(span)]:duration-300 [&>*:not(span)]:ease-in"
      >
        <HiArrowLongLeft />
        <span>Back to Users</span>
      </Link>
      <div className="flex items-center justify-between">
        <h1 className="w-fit text-[2.4rem] font-medium">User Details</h1>
        <div className="flex gap-x-5">
          <Button
            title="blacklist user"
            handleClick={() => {}}
            style="border border-blacklist rounded-[0.8rem] px-[2rem] py-[0.5rem] text-blacklist uppercase text-[1.4rem] text-center tracking-[10%] font-semibold"
          />
          <Button
            title="activate user"
            handleClick={() => {}}
            style="border border-secondaryBg rounded-[0.8rem] px-[2rem] py-[0.5rem] text-secondaryBg uppercase text-[1.4rem] text-center tracking-[10%] font-semibold"
          />
        </div>
      </div>
      <section className="border bg-primaryBg border-transparent flex flex-col gap-y-10">
        <div className="flex items-center divide-x-[0.1rem] divide-secondaryText/20 [&_div]:px-10 pt-10">
          <div className="flex items-center gap-x-[2rem]">
            <span className="bg-primaryText/[16%] p-10 rounded-full text-primaryText">
              <FaRegUser />
            </span>
            <span className="">
              <p className="text-[2.2rem] font-medium">Grace Effiom</p>
              <p className="text-[1.4rem] text-secondaryText">LSQFf587g90</p>
            </span>
          </div>
          <div>
            <p className="font-medium text-secondaryText text-[1.4rem]">User's Tier</p>
            <div>star</div>
          </div>
          <div>
            <p className="text-[2.2rem] font-medium">#200,000.00</p>
            <p className="text-[1.2rem]">9912345678/Providus Bank</p>
          </div>
        </div>
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
      <section className="">
        <Outlet />
      </section>
    </main>
  );
}

export default UserDetails;
