import { useUsers } from '../features/Users/useUsers';

import Loader from './Loader';
import TableRow from './TableRow';

import { UserPropType } from '../types';

function TableBody() {
  const { isLoadingUsers, users } = useUsers();

  return (
    <tbody className="">
      {!isLoadingUsers ? (
        users?.map((user: UserPropType) => <TableRow key={user.id} user={user} />)
      ) : (
        <Loader />
      )}
    </tbody>
  );
}

export default TableBody;
