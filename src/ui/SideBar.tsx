import { Link } from 'react-router-dom';

import SideBarMenu from './SideBarMenu';
import SideBarMenuItem from './SideBarMenuItem';

import {
  FaBriefcase,
  FaChartColumn,
  FaCoins,
  FaFan,
  FaHandHoldingDollar,
  FaHandshake,
  FaLandmark,
  FaMoneyBillTransfer,
  FaPiggyBank,
  FaSackDollar,
  FaScroll,
  FaUserCheck,
  FaUserGear,
  FaUserGroup,
  FaUsers,
  FaUserXmark
} from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { HiClipboardList } from 'react-icons/hi';
import { HiAdjustmentsHorizontal, HiPercentBadge } from 'react-icons/hi2';

import { ItemType } from '../types';

function SideBar() {
  const customers: ItemType[] = [
    { pageTitle: 'Users', path: '/users', icon: <FaUserGroup /> },
    { pageTitle: 'Guarantors', path: '/guarantors', icon: <FaUsers /> },
    { pageTitle: 'Loans', path: '/loans', icon: <FaSackDollar /> },
    { pageTitle: 'Decision Models', path: '/decision-models', icon: <FaHandshake /> },
    { pageTitle: 'Savings', path: '/savings', icon: <FaPiggyBank /> },
    { pageTitle: 'Loan Requests', path: '/loan-requests', icon: <FaHandHoldingDollar /> },
    { pageTitle: 'Whitelist', path: '/whitelist', icon: <FaUserCheck /> },
    { pageTitle: 'Karma', path: '/karma', icon: <FaUserXmark /> }
  ];

  const businesses: ItemType[] = [
    { pageTitle: 'Organization', path: '/organization', icon: <FaBriefcase /> },
    { pageTitle: 'Loan Products', path: '/loan-products', icon: <FaHandHoldingDollar /> },
    { pageTitle: 'Saving Products', path: '/saving-products', icon: <FaLandmark /> },
    { pageTitle: 'Fees and Charges', path: '/fees-and-charges', icon: <FaCoins /> },
    { pageTitle: 'Transactions', path: '/transactions', icon: <FaMoneyBillTransfer /> },
    { pageTitle: 'Services', path: '/services', icon: <FaFan /> },
    { pageTitle: 'Service Account', path: '/service-account', icon: <FaUserGear /> },
    { pageTitle: 'Settlements', path: '/settlements', icon: <FaScroll /> },
    { pageTitle: 'Reports', path: '/reports', icon: <FaChartColumn /> }
  ];

  const settings: ItemType[] = [
    { pageTitle: 'Preferences', path: '/preferences', icon: <HiAdjustmentsHorizontal /> },
    { pageTitle: 'Fees and Pricing', path: '/fees-and-pricing', icon: <HiPercentBadge /> },
    { pageTitle: 'Audit Logs', path: '/audit-logs', icon: <HiClipboardList /> }
  ];

  return (
    <aside className="scroll-auto py-14">
      <div className=" text-secondaryText mx-[3rem] flex items-center gap-[1.2rem]">
        <FaBriefcase />
        <select name="organization" className="capitalize outline-0">
          <option value={''}>switch organization</option>
        </select>
      </div>

      <nav className="py-[3rem] flex flex-col gap-y-[2.5rem] ">
        <Link
          to="/"
          className="mx-[3rem] w-fit flex items-center gap-[1.2rem] text-secondaryText opacity-50  hover:opacity-100"
        >
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <SideBarMenu
          menu={customers}
          menuTitle={'customers'}
          render={customer => <SideBarMenuItem key={customer.pageTitle} item={customer} />}
        />

        <SideBarMenu
          menu={businesses}
          menuTitle={'businesses'}
          render={business => <SideBarMenuItem key={business.pageTitle} item={business} />}
        />

        <SideBarMenu
          menu={settings}
          menuTitle={'settings'}
          render={setting => <SideBarMenuItem key={setting.pageTitle} item={setting} />}
        />
      </nav>
    </aside>
  );
}

export default SideBar;

{
  /* <div className="">
          <h1 className="uppercase text-[1.2rem] mb-[0.5rem] pl-[3rem] text-secondaryText opacity-50">
            customers
          </h1>
          <ul className="flex flex-col gap-[1.2rem] ">
            {customers.map(customer => (
              <li key={customer.path}>
                <NavLink
                  to={customer.path}
                  className={
                    'border-l-4 border-l-transparent pl-[3rem] w-full flex items-center gap-[1.2rem]  hover:opacity-100 hover:bg-secondaryBg/20 text-secondaryText opacity-50'
                  }
                >
                  {customer.icon}
                  <span>{customer.pageTitle}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div> */
}

{
  /* <div>
          <h1 className="uppercase text-[1.2rem] mb-[0.5rem] pl-[3rem] text-secondaryText opacity-50">
            businesses
          </h1>
          <ul className="flex flex-col gap-[1.2rem] ">
            {businesses.map(business => (
              <li key={business.path}>
                <NavLink
                  to={business.path}
                  className={
                    'border-l-4 border-l-transparent pl-[3rem] w-full flex items-center gap-[1.2rem]  hover:opacity-100 hover:bg-secondaryBg/20 text-secondaryText opacity-50'
                  }
                >
                  {business.icon}
                  <span>{business.pageTitle}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div> */
}

{
  /*  <div>
          <h1 className="uppercase text-[1.2rem] mb-[0.5rem] pl-[3rem] text-secondaryText opacity-50">
            settings
          </h1>
          <ul className="flex flex-col gap-[1.2rem] ">
            {settings.map(setting => (
              <li key={setting.path}>
                <NavLink
                  to={setting.path}
                  className={
                    'border-l-4 border-l-transparent pl-[3rem] w-full flex items-center gap-[1.2rem]  hover:opacity-100 hover:bg-secondaryBg/20 text-secondaryText opacity-50'
                  }
                >
                  {setting.icon}
                  <span>{setting.pageTitle}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div> */
}
