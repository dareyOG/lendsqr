import { UsersPropType } from '../types';

export const getUsers = async () => {
  try {
    const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');

    // const data = Array.isArray(res) ? res : await res.json();
    const data = await res.json();
    const status = ['active', 'blacklisted', 'pending', 'inactive'];

    const users: UsersPropType[] = data?.map((dataItem: UsersPropType) => ({
      ...dataItem,
      status: status[+dataItem.id % status.length]
    }));

    return users;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('failed to fetch users');
    }
  }
};
