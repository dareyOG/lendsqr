import { useState, useEffect } from 'react';
import { UsersPropType } from '../../types';
import { useUsers } from './useUsers';

export function useUpdateStatus() {
  const { users, isLoadingUsers } = useUsers();

  const status = ['active', 'blacklisted', 'pending', 'inactive'];

  const usersWithStatus: UsersPropType[] = users?.map((user: UsersPropType) => ({
    ...user,
    status: status[+user.id % status.length]
  }));

  const [usersUpdate, setUsersUpdate] = useState<UsersPropType[]>(() => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : usersWithStatus;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersUpdate));
  }, [usersUpdate]);

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
