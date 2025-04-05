import Stat from '../../ui/Stat';
import Table from '../../ui/Table';

import { FaCoins, FaFileLines } from 'react-icons/fa6';
import { HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi2';

function Users() {
  return (
    <main className="px-[3.5rem] py-[4.5rem] flex flex-col gap-y-9">
      <h1 className="w-fit text-[2.4rem] font-medium">Users</h1>
      <div className="grid grid-cols-4 gap-9">
        <Stat stat={2453} icon={<HiOutlineUsers />} title="users" color={'users'} />
        <Stat stat={2453} icon={<HiOutlineUserGroup />} title="active users" color="activeUsers" />
        <Stat stat={12453} icon={<FaFileLines />} title="users with loans" color="loans" />
        <Stat stat={102453} icon={<FaCoins />} title="users with savings" color="savings" />
      </div>
      <section className="bg-primaryBg p-10">
        <Table />
      </section>
    </main>
  );
}

export default Users;
