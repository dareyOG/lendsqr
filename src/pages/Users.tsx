// import UsersTable from '../features/Users/UsersTable';

import Stat from '../ui/Stat';

import { FaCoins, FaFileLines } from 'react-icons/fa6';
import { HiOutlineUserGroup, HiOutlineUsers } from 'react-icons/hi2';
import Button from '../ui/Button';
import { FaEllipsisV } from 'react-icons/fa';
import { LuListFilter } from 'react-icons/lu';

function Users() {
  return (
    <main className="px-[3.5rem] py-[4.5rem] flex flex-col gap-y-9">
      <h1 className="w-fit text-[2.4rem] font-medium">Users</h1>
      <div className="grid grid-cols-4 gap-[2.3rem]">
        <Stat stat={2453} icon={<HiOutlineUsers />} title="users" color={'users'} />
        <Stat
          stat={2453}
          icon={<HiOutlineUserGroup />}
          title="active users"
          color={'activeUsers'}
        />
        <Stat stat={12453} icon={<FaFileLines />} title="users with loans" color={'loans'} />
        <Stat stat={102453} icon={<FaCoins />} title="users with savings" color={'loans'} />
      </div>
      {/* <UsersTable /> */}
      <div className="bg-white p-10">
        <table className="table-auto w-full border-spacing-5">
          <thead className="text-[1.2rem]">
            <tr className="text-nowrap uppercase [&_th]:text-start">
              <th>
                <div className="flex items-center gap-x-3">
                  <span>organization</span>
                  <Button icon={<LuListFilter />} handleClick={() => {}} />
                </div>
              </th>
              <th>
                <div className="flex items-center gap-x-3">
                  <span>username</span>
                  <Button icon={<LuListFilter />} handleClick={() => {}} />
                </div>
              </th>
              <th>
                <div className="flex items-center gap-x-3">
                  <span>email</span>
                  <Button icon={<LuListFilter />} handleClick={() => {}} />
                </div>
              </th>
              <th>
                <div className="flex items-center gap-x-3">
                  <span>phone number</span>
                  <Button icon={<LuListFilter />} handleClick={() => {}} />
                </div>
              </th>
              <th>
                <div className="flex items-center gap-x-3">
                  <span>date joined</span>
                  <Button icon={<LuListFilter />} handleClick={() => {}} />
                </div>
              </th>
              <th>
                <div className="flex items-center gap-x-3">
                  <span>status</span>
                  <Button icon={<LuListFilter />} handleClick={() => {}} />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[1.4rem] divide-y-[0.1rem] [&_tr]:text-nowrap [&_td]:py-5 divide-primary/10">
            <tr>
              <td>Apple Inc.</td>
              <td>Damilare Oludire</td>
              <td>oludire@gmail.com</td>
              <td>08180503618</td>
              <td>April 28, 2025 10:00AM </td>
              <td>
                <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              <td>Meta</td>
              <td>Dasola Oludire</td>
              <td>dasolaoludire@gmail.com</td>
              <td>09074074900</td> <td>April 28, 2025 10:00AM </td>
              <td>
                {' '}
                <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              {' '}
              <td>Google</td>
              <td>Damola Oludire</td>
              <td>oludiredamolatimothy@gmail.com</td>
              <td>08130919126</td> <td>April 28, 2025 10:00AM </td>
              <td>
                {' '}
                <span className="text-pending bg-pending/[6%] rounded-full px-4 py-2">Pending</span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              {' '}
              <td>Netflix</td>
              <td>Samuel Adeoti</td>
              <td>samkiz@gmail.com</td>
              <td>08034274022</td> <td>April 28, 2025 10:00AM </td>
              <td>
                <span className="text-pending bg-pending/[6%] rounded-full px-4 py-2">Pending</span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              {' '}
              <td>Disney</td>
              <td>Segun Owoeye</td>
              <td>s.owoeye@gmail.com</td>
              <td>12345678990</td> <td>April 28, 2025 10:00AM </td>
              <td>
                {' '}
                <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              {' '}
              <td>Amazon</td>
              <td>Awodire Olamide</td>
              <td>awodireolamide@gmail.com</td>
              <td>07031563387</td> <td>April 28, 2025 10:00AM </td>
              <td>
                {' '}
                <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              {' '}
              <td>CocaCola</td>
              <td>Yemi Adesoji</td>
              <td>yemisj@gmail.com</td>
              <td>12345678990</td> <td>April 28, 2025 10:00AM </td>
              <td>
                {' '}
                <span className="text-inactive bg-inactive/[6%] rounded-full px-4 py-2">
                  Inactive
                </span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
            <tr>
              {' '}
              <td>Toyota</td>
              <td>Daniel Craig</td>
              <td>dcraig@gmail.com</td>
              <td>12345678990</td> <td>April 28, 2025 10:00AM </td>
              <td>
                {' '}
                <span className="text-blacklist bg-blacklist/[6%] rounded-full px-4 py-2">
                  Blacklisted
                </span>
              </td>
              <td>
                <Button icon={<FaEllipsisV />} handleClick={() => {}} style="text-[1rem]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Users;
