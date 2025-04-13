import { useState } from 'react';
import { UsersPropType } from '../../types';

export function useUpdateStatus(initialState: UsersPropType[]) {
  const [usersUpdate, setUsersUpdate] = useState<UsersPropType[]>(initialState);

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
  console.log(usersUpdate);

  return { usersUpdate, activate, blacklist };
}
