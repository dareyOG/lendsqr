import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../../services/apiUsers';

export function useBlacklistUser() {
  const { mutate: activateUser } = useMutation({
    mutationFn: (id: string) => updateUser(id, { status: 'blacklisted' })
  });

  return { activateUser };
}
