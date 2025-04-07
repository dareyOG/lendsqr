export const getUsers = async () => {
  try {
    const users = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    const usersData = users.json();
    return usersData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('failed to fetch users');
    }
  }
};
