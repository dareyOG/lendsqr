import { useState, useEffect } from 'react';
import { useUsers } from './useUsers';

import { UsersPropType } from '../../types';

export function useUpdateStatus() {
  const { users, isLoadingUsers } = useUsers();

  // console.log(users);

  const [usersUpdate, setUsersUpdate] = useState<UsersPropType[]>(() => {
    const stored_users = localStorage.getItem('users');
    // console.log(stored_users);

    return stored_users?.length ? JSON.parse(stored_users) : users;
  });

  useEffect(() => {
    if (users?.length) localStorage.setItem('users', JSON.stringify(usersUpdate));
  }, [usersUpdate, users?.length]);

  const activate = (id: string) => {
    setUsersUpdate(
      usersUpdate?.map(user => (user.id === id ? { ...user, status: 'active' } : { ...user }))
    );
  };

  const blacklist = (id: string) => {
    setUsersUpdate(
      usersUpdate?.map(user => (user.id === id ? { ...user, status: 'blacklisted' } : { ...user }))
    );
  };

  return { isLoadingUsers, usersUpdate, setUsersUpdate, activate, blacklist };
}
