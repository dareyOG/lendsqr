import LogOut from '../features/Authentication/LogOut';

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
import { HiClipboardList } from 'react-icons/hi';
import { HiAdjustmentsHorizontal, HiPercentBadge } from 'react-icons/hi2';
import { FaHome } from 'react-icons/fa';
import { GiCarWheel } from 'react-icons/gi';

import { MenuPropType } from '../types';

function SideBar() {
  const dashboard: MenuPropType[] = [
    { pageTitle: 'Dashboard', path: '/dashboard', icon: <FaHome /> }
  ];

  const customers: MenuPropType[] = [
    { pageTitle: 'Users', path: '/users', icon: <FaUserGroup /> },
    { pageTitle: 'Guarantors', path: '/guarantors', icon: <FaUsers /> },
    { pageTitle: 'Loans', path: '/loans', icon: <FaSackDollar /> },
    { pageTitle: 'Decision Models', path: '/decision-models', icon: <FaHandshake /> },
    { pageTitle: 'Savings', path: '/savings', icon: <FaPiggyBank /> },
    { pageTitle: 'Loan Requests', path: '/loan-requests', icon: <FaHandHoldingDollar /> },
    { pageTitle: 'Whitelist', path: '/whitelist', icon: <FaUserCheck /> },
    { pageTitle: 'Karma', path: '/karma', icon: <FaUserXmark /> }
  ];

  const businesses: MenuPropType[] = [
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

  const settings: MenuPropType[] = [
    { pageTitle: 'Preferences', path: '/preferences', icon: <HiAdjustmentsHorizontal /> },
    { pageTitle: 'Fees and Pricing', path: '/fees-and-pricing', icon: <HiPercentBadge /> },
    { pageTitle: 'Audit Logs', path: '/audit-logs', icon: <HiClipboardList /> },
    { pageTitle: 'Systems Messages', path: '/systems-messages', icon: <GiCarWheel /> }
  ];

  return (
    <aside className="py-14 overflow-y-scroll h-[100vh]">
      <div className="text-secondaryText mx-[3rem] flex items-center gap-[1.2rem]">
        <FaBriefcase />
        <select name="organization" className="capitalize outline-0">
          <option value={'switch-organization'}>switch organization</option>
        </select>
      </div>

      <nav className="py-[3rem] flex flex-col gap-y-[2.5rem]">
        <SideBarMenu
          menu={dashboard}
          menuTitle=""
          render={dashboard => <SideBarMenuItem key={dashboard.pageTitle} item={dashboard} />}
        />

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
      <LogOut />
    </aside>
  );
}

export default SideBar;
