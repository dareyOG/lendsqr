import TableHeadColumn from './TableHeadColumn';

function TableHeadRow({ toggleFilterForm }: { toggleFilterForm: () => void }) {
  return (
    <tr className="text-nowrap uppercase [&_th]:text-start">
      <th>
        <TableHeadColumn title="organization" toggleFilterForm={toggleFilterForm} />
      </th>
      <th>
        <TableHeadColumn title="username" toggleFilterForm={toggleFilterForm} />
      </th>
      <th>
        <TableHeadColumn title="email" toggleFilterForm={toggleFilterForm} />
      </th>
      <th>
        <TableHeadColumn title="phone number" toggleFilterForm={toggleFilterForm} />
      </th>
      <th>
        <TableHeadColumn title="date joined" toggleFilterForm={toggleFilterForm} />
      </th>
      <th>
        <TableHeadColumn title="status" toggleFilterForm={toggleFilterForm} />
      </th>
    </tr>
  );
}

export default TableHeadRow;
