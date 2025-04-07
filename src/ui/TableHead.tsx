import TableHeader from './TableHeader';

function TableHead() {
  return (
    <thead className="">
      <tr className="uppercase flex justify-between">
        <TableHeader title={'organization'} />
        <TableHeader title={'username'} />
        <TableHeader title={'email'} />
        <TableHeader title={'phone number'} />
        <TableHeader title={'date joined'} />
        <TableHeader title={'status'} />
        <TableHeader title={''} />
      </tr>
    </thead>
  );
}

export default TableHead;
// uppercase text-[1.2rem] font-semibold flex items-center justify-between
