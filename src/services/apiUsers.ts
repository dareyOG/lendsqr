export const getUsers = async () => {
  try {
    const data = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    const users = Array.isArray(data) ? data : await data.json();

    return users;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('failed to fetch users');
    }
  }
};
