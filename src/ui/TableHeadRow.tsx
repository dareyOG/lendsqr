import TableHeadColumn from './TableHeadColumn';

function TableHeadRow() {
  return (
    <tr className="text-nowrap uppercase [&_th]:text-start">
      <th>
        <TableHeadColumn title="organization" />
      </th>
      <th>
        <TableHeadColumn title="username" />
      </th>
      <th>
        <TableHeadColumn title="email" />
      </th>
      <th>
        <TableHeadColumn title="phone number" />
      </th>
      <th>
        <TableHeadColumn title="date joined" />
      </th>
      <th>
        <TableHeadColumn title="status" />
      </th>
    </tr>
  );
}

export default TableHeadRow;
