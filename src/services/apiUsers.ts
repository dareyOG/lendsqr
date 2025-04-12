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

export async function updateUser(id: string, body: object) {
  try {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to update user with id ${id}`);
    }

    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('failed to update user');
    }
  }
}
