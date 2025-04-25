import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { FaBriefcase, FaCaretDown } from 'react-icons/fa6';
import LogOut from '../features/Authentication/LogOut';
import SideBarMenu from './SideBarMenu';
import SideBarMenuItem from './SideBarMenuItem';

function ModalNav() {
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
    <div role="dialog" className="">
      <div className="bg-inactive/50 w-full h-screen relative"></div>
      <div className="flex justify-end">
        <div className="text-blacklist text-3xl absolute top-30 border-8 border-accent z-10">
          <div className="flex items-center">
            <Link to="/docs" className="underline">
              Docs
            </Link>
            <Avatar />
          </div>
          <nav>
            <div className="flex items-center gap-[1.2rem]">
              <FaBriefcase />
              <span>Switch organization</span>
              <FaCaretDown />
            </div>
            <div className="py-[3rem] flex flex-col gap-y-[2.5rem] z-20">
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
            </div>
            <LogOut />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ModalNav;
