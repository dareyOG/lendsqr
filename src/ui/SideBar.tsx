import { Link, NavLink } from 'react-router-dom';

import {
  FaBriefcase,
  FaBuildingColumns,
  FaChartColumn,
  FaClipboardList,
  FaCoins,
  FaFan,
  FaHandHoldingDollar,
  FaHandshake,
  FaMoneyBillTransfer,
  FaPercent,
  FaPiggyBank,
  FaSackDollar,
  FaScroll,
  FaSliders,
  FaUserCheck,
  FaUserGear,
  FaUserGroup,
  FaUsers,
  FaUserXmark
} from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

function SideBar() {
  const customers = [
    { pageTitle: 'Users', path: '/users', icon: <FaUserGroup /> },
    { pageTitle: 'Guarantors', path: '/guarantors', icon: <FaUsers /> },
    { pageTitle: 'Loans', path: '/loans', icon: <FaSackDollar /> },
    { pageTitle: 'Decision Models', path: '/decision-models', icon: <FaHandshake /> },
    { pageTitle: 'Savings', path: '/savings', icon: <FaPiggyBank /> },
    { pageTitle: 'Loan Requests', path: '/loan-requests', icon: <FaHandHoldingDollar /> },
    { pageTitle: 'Whitelist', path: '/whitelist', icon: <FaUserCheck /> },
    { pageTitle: 'Karma', path: '/karma', icon: <FaUserXmark /> }
  ];

  const businesses = [
    { pageTitle: 'Organization', path: '/organization', icon: <FaBriefcase /> },
    { pageTitle: 'Loan Products', path: '/loan-products', icon: <FaHandHoldingDollar /> },
    { pageTitle: 'Saving Products', path: '/saving-products', icon: <FaBuildingColumns /> },
    { pageTitle: 'Fees and Charges', path: '/fees-and-charges', icon: <FaCoins /> },
    { pageTitle: 'Transactions', path: '/transactions', icon: <FaMoneyBillTransfer /> },
    { pageTitle: 'Services', path: '/services', icon: <FaFan /> },
    { pageTitle: 'Service Account', path: '/service-account', icon: <FaUserGear /> },
    { pageTitle: 'Settlements', path: '/settlements', icon: <FaScroll /> },
    { pageTitle: 'Reports', path: '/reports', icon: <FaChartColumn /> }
  ];

  const settings = [
    { pageTitle: 'Preferences', path: '/preferences', icon: <FaSliders /> },
    { pageTitle: 'Fees and Pricing', path: '/fees-and-pricing', icon: <FaPercent /> },
    { pageTitle: 'Audit Logs', path: '/audit-logs', icon: <FaClipboardList /> }
  ];

  return (
    <aside className="scroll-auto">
      <select name="organization" className="capitalize outline-0 text-primaryText mx-[3rem]">
        <option value={''}>
          <FaBriefcase />
          <span>switch organization</span>
        </option>
      </select>

      <nav className="py-[3rem] flex flex-col gap-y-[2.5rem] ">
        <Link
          to="/dashboard"
          className="mx-[3rem] w-fit flex items-center gap-[1.2rem] text-secondaryText opacity-50  hover:opacity-100"
        >
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <div className="">
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;
