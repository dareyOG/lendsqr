import { useState } from 'react';

import { useUsers } from '../features/Users/useUsers';

import DataLoader from '../ui/DataLoader';
import Stat from '../ui/Stat';
import Table from '../ui/Table';
import TableHeader from '../ui/TableHeader';
import TableBody from '../ui/TableBody';
import TableBodyRow from '../ui/TableBodyRow';
import TableData from '../ui/TableBodyData';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

import { formatDate, formatName, formatPhoneNumber, formatText } from '../utils/helpers';

import { FaCoins, FaEllipsisVertical, FaFileLines } from 'react-icons/fa6';
import { HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi2';
import { UsersPropType } from '../types';

function Users() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoadingUsers } = useUsers();

  const users: UsersPropType[] = data;

  console.log(isLoadingUsers, data);

  return (
    <main className="px-[3.5rem] py-[4.5rem] flex flex-col gap-y-9">
      <h1 className="w-fit text-[2.4rem] font-medium">Users</h1>
      <section className="grid grid-cols-4 gap-[2.3rem]">
        <Stat stat={2453} icon={<HiOutlineUsers />} title="users" color={'users'} />
        <Stat
          stat={2453}
          icon={<HiOutlineUserGroup />}
          title="active users"
          color={'activeUsers'}
        />
        <Stat stat={12453} icon={<FaFileLines />} title="users with loans" color={'loans'} />
        <Stat stat={102453} icon={<FaCoins />} title="users with savings" color={'loans'} />
      </section>
      <section className="bg-white p-10">
        <Table>
          <TableHeader />
          <TableBody>
            {users?.map(user => (
              <TableBodyRow key={user.id}>
                <TableData className="capitalize">{formatText(user.orgName)}</TableData>
                <TableData className="capitalize">{formatName(user.userName)}</TableData>
                <TableData className="lowercase">{user.email}</TableData>
                <TableData>{formatPhoneNumber(user.phoneNumber)}</TableData>
                <TableData>{formatDate(user.createdAt)}</TableData>
                <TableData>
                  {' '}
                  <span className="text-inactive bg-inactive/[6%] rounded-full px-4 py-2">
                    inactive
                  </span>
                </TableData>
                <TableData>
                  <Button
                    icon={<FaEllipsisVertical />}
                    disabled
                    handleClick={() => setShowModal(show => !show)}
                    style="text-[1rem]"
                  />
                  <div className="absolute right-5">{showModal && <Modal />}</div>
                </TableData>
              </TableBodyRow>
            ))}
            {isLoadingUsers && <DataLoader />}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}

export default Users;

/* 

<TableBodyRow key={''}>
              <TableData>user</TableData>
              <TableData>Jamie Forson</TableData>
              <TableData>jforson@test.com</TableData>
              <TableData>088930919126</TableData>
              <TableData>April 28, 2025 10:00AM</TableData>
              <TableData>
                {' '}
                <span className="text-inactive bg-inactive/[6%] rounded-full px-4 py-2">
                  inactive
                </span>
              </TableData>
              <TableData>
                <Button
                  icon={<FaEllipsisVertical />}
                  disabled
                  handleClick={() => setShowModal(show => !show)}
                  style="text-[1rem]"
                />
                <div className="absolute right-5">{showModal && <Modal />}</div>
              </TableData>
            </TableBodyRow>

*/
