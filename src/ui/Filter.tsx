import { useState } from 'react';
import { useUpdateStatus } from '../features/Users/useUpdateStatus';

import Button from './Button';

function Filter() {
  const { usersUpdate, setUsersUpdate } = useUpdateStatus();

  const [organization, setOrganization] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');

  const reset = () => {
    setOrganization('');
    setUsername('');
    setEmail('');
    setDate('');
    setPhone('');
    setStatus('');
  };

  const filter = () => {
    const filteredResult = usersUpdate
      .slice()
      .filter(
        user =>
          user.userName === username ||
          user.orgName === organization ||
          user.email === email ||
          user.createdAt === date ||
          user.phoneNumber === phone ||
          user.status === status
      );

    setUsersUpdate(filteredResult);
    console.log(usersUpdate);

    return usersUpdate;
  };

  return (
    <form className="w-[27rem] bg-white border gap-y-[1.1rem] flex flex-col border-secondary/[14%] rounded-[0.4rem] p-[2rem] absolute left-[25%] top-[68%]">
      <div className="capitalize text-[1.4rem] flex flex-col gap-2">
        <label htmlFor="organization" className="font-medium text-inactive">
          organization
        </label>
        <input
          type="text"
          id="text"
          value={organization}
          placeholder="select"
          onChange={e => setOrganization(e.target.value)}
          className="px-5 py-3 rounded-[0.8rem] border-[0.1rem] border-inactive/20 outline-[0.1rem] outline-inactive/20 placeholder:capitalize placeholder:text-[1.4rem] placeholder:text-inactive/70"
        />
      </div>
      <div className="capitalize flex flex-col gap-2">
        <label htmlFor="username" className="font-medium text-inactive">
          username
        </label>
        <input
          type="text"
          id="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="user"
          className="px-5 py-3 rounded-[0.8rem] border-[0.1rem] border-inactive/20 outline-[0.1rem] outline-inactive/20 placeholder:capitalize placeholder:text-[1.4rem] placeholder:text-inactive/70"
        />
      </div>
      <div className="capitalize flex flex-col gap-2">
        <label htmlFor="email" className="font-medium text-inactive">
          email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
          className="px-5 py-3 rounded-[0.8rem] border-[0.1rem] border-inactive/20 outline-[0.1rem] outline-inactive/20 placeholder:capitalize placeholder:text-[1.4rem] placeholder:text-inactive/70"
        />
      </div>
      <div className="capitalize flex flex-col gap-2">
        <label htmlFor="date" className="font-medium text-inactive">
          date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          placeholder="date"
          className="px-5 py-3 rounded-[0.8rem] border-[0.1rem] border-inactive/20 outline-[0.1rem] outline-inactive/20 placeholder:capitalize placeholder:text-[1.4rem] placeholder:text-inactive/70"
        />
      </div>
      <div className="capitalize flex flex-col gap-2">
        <label htmlFor="phone" className="font-medium text-inactive">
          phone number
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="phone number"
          className="px-5 py-3 rounded-[0.8rem] border-[0.1rem] border-inactive/20 outline-[0.1rem] outline-inactive/20 placeholder:capitalize placeholder:text-[1.4rem] placeholder:text-inactive/70"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="status" className="font-medium text-inactive">
          status
        </label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="px-5 py-3 rounded-[0.8rem] border-[0.1rem] border-inactive/20 outline-[0.1rem] outline-inactive/20 placeholder:capitalize placeholder:text-[1.4rem] placeholder:text-inactive/70"
        >
          <option value={''}>Select</option>
          <option value={'inactive'}>Inactive</option>
          <option value={'pending'}>Pending</option>
          <option value={'active'}>Active</option>
          <option value={'blacklisted'}>Blacklisted</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <Button
          title={'reset'}
          handleClick={reset}
          className="capitalize px-4 py-2.5 border-[0.1rem] font-semibold border-inactive w-[9.8rem] rounded-[0.8rem]"
        />
        <Button
          title={'filter'}
          handleClick={filter}
          className="capitalize px-4 py-2.5 bg-accent border-[0.1rem] border-transparent outline-0 text-white font-semibold w-[9.8rem] rounded-[0.8rem]"
        />
      </div>
    </form>
  );
}

export default Filter;
