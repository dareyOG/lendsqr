import TableHeader from './TableHeader';
import TableData from './TableData';

function Table() {
  return (
    <table className="w-full">
      <thead>
        <tr className="uppercase text-[1.2rem] font-semibold flex items-center justify-between gap-x-10">
          <TableHeader title={'organization'} />
          <TableHeader title={'username'} />
          <TableHeader title={'email'} />
          <TableHeader title={'phone number'} />
          <TableHeader title={'date joined'} />
          <TableHeader title={'status'} />
          <TableHeader title={''} />
        </tr>
      </thead>
      <tbody>
        <TableData data={[]} />
      </tbody>
    </table>
  );
}

export default Table;
