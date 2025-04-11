import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export function useUsers() {
  const {
    data,
    isLoading: isLoadingUsers,
    error
  } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  if (error) console.error(error.message);

  return { data, isLoadingUsers };
}
