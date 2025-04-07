import TableHead from '../../ui/TableHead';
import TableBody from '../../ui/TableBody';

function UsersTable() {
  return (
    <table className="bg-white p-10 table-auto">
      <TableHead />
      <TableBody />
    </table>
  );
}

export default UsersTable;

//  className="bg-white p-10 table-auto border border-red-600 grid grid-rows-(auto,1fr)"
