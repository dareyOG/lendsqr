import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../../services/apiUsers';

export function useActivateUser() {
  const { mutate: activateUser } = useMutation({
    mutationFn: (id: string) => updateUser(id, { status: 'active' })
  });

  return { activateUser };
}
