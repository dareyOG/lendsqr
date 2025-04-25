import { useState } from 'react';
import { useUpdateStatus } from '../features/Users/useUpdateStatus';

import Stat from '../ui/Stat';
import Table from '../ui/Table';
import TableHeader from '../ui/TableHeader';
import TableBody from '../ui/TableBody';
import TableBodyRow from '../ui/TableBodyRow';
import TableBodyData from '../ui/TableBodyData';
import ModalUser from '../ui/ModalUser';
import Loader from '../ui/Loader';
import Pagination from '../ui/Pagination';
import Filter from '../ui/Filter';

import {
  formatDate,
  formatName,
  formatNumber,
  formatPhoneNumber,
  formatText
} from '../utils/helpers';

import { HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi2';
import { FaCoins, FaEllipsisVertical, FaFileLines } from 'react-icons/fa6';

function Users() {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const [activePage, setActivePage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const [showForm, setShowForm] = useState(false);

  // update user's status
  const { isLoadingUsers, usersUpdate, activate, blacklist } = useUpdateStatus();

  // console.log(usersUpdate);

  // pagination
  const to = usersPerPage * activePage;
  const from = to - usersPerPage;

  const paginatedUsers = usersUpdate?.slice(from, to);
  // console.log(paginatedUsers);

  const statusBadge = {
    active: 'bg-active/[6%] text-active',
    inactive: 'bg-inactive/[6%] text-inactive',
    blacklisted: 'bg-blacklist/[6%] text-blacklist',
    pending: 'bg-pending/[6%] text-pending'
  };

  const toggleModal = (id: string) => {
    setSelectedID(prevID => (prevID === id ? null : id));
  };

  const toggleFilterForm = () => setShowForm(show => !show);

  return (
    <main className="px-[3.5rem] py-[3rem] grid grid-cols-[auto,auto,1fr] gap-y-9">
      <h1 className="w-fit text-[2.4rem] font-medium">Users</h1>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[2.3rem]">
        <Stat stat={formatNumber('2453')} icon={<HiOutlineUsers />} title="users" color={'users'} />
        <Stat
          stat={formatNumber('2453')}
          icon={<HiOutlineUserGroup />}
          title="active users"
          color={'activeUsers'}
        />
        <Stat
          stat={formatNumber('12453')}
          icon={<FaFileLines />}
          title="users with loans"
          color={'loans'}
        />
        <Stat
          stat={formatNumber('102453')}
          icon={<FaCoins />}
          title="users with savings"
          color={'savings'}
        />
      </section>
      <section
        className={`bg-white p-10 ${
          isLoadingUsers ? 'h-screen' : ''
        } max-h-[70rem] overflow-y-auto`}
      >
        {isLoadingUsers && <Loader />}
        {paginatedUsers?.length && !isLoadingUsers && (
          // <div className="max-h-[70rem] overflow-y-auto">
          <Table>
            <TableHeader toggleFilterForm={toggleFilterForm} />
            <TableBody>
              {paginatedUsers?.map(user => {
                return (
                  <TableBodyRow key={user?.id}>
                    <TableBodyData className="capitalize">{formatText(user.orgName)}</TableBodyData>
                    <TableBodyData className="capitalize">
                      {formatName(user.userName)}
                    </TableBodyData>
                    <TableBodyData className="lowercase">{user.email}</TableBodyData>
                    <TableBodyData>{formatPhoneNumber(user.phoneNumber)}</TableBodyData>
                    <TableBodyData>{formatDate(user.createdAt)}</TableBodyData>
                    <TableBodyData>
                      <span
                        role="status"
                        className={`capitalize rounded-full ${
                          statusBadge[user.status as keyof typeof statusBadge]
                        } px-6 py-3 `}
                      >
                        {user.status}
                      </span>
                    </TableBodyData>
                    <TableBodyData className="relative">
                      <div
                        role="button"
                        onClick={() => toggleModal(user.id)}
                        className="cursor-pointer"
                      >
                        <FaEllipsisVertical />
                      </div>
                      {selectedID === user.id && (
                        <ModalUser
                          currentStatus={user.status}
                          selectedID={selectedID}
                          handleBlacklist={() => blacklist(selectedID)}
                          handleActivate={() => {
                            activate(selectedID);
                          }}
                        />
                      )}
                    </TableBodyData>
                  </TableBodyRow>
                );
              })}
            </TableBody>
          </Table>
          // </div>
        )}

        {showForm && <Filter />}
      </section>
      {!isLoadingUsers && (
        <Pagination
          usersPerPage={usersPerPage}
          activePage={activePage}
          setActivePage={setActivePage}
          setUsersPerPage={setUsersPerPage}
        />
      )}
    </main>
  );
}

export default Users;
