import TableBodyRow from './TableBodyRow';
import Button from './Button';
import TableData from './TableBodyData';

import { FaEllipsisVertical } from 'react-icons/fa6';

function TableBody() {
  return (
    <tbody className="text-[1.4rem] divide-y-[0.1rem] [&_tr]:text-nowrap [&_td]:py-5 divide-primary/10">
      <TableBodyRow>
        <TableData>BBC</TableData>
        <TableData>Jamie Forson</TableData>
        <TableData>jforson@test.com</TableData>
        <TableData>088930919126</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-inactive bg-inactive/[6%] rounded-full px-4 py-2">inactive</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>Apple Inc.</TableData>
        <TableData>Chris Delvan</TableData>
        <TableData>chris@test.com</TableData>
        <TableData>08080503618</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>Meta</TableData>
        <TableData>Dan Burn</TableData>
        <TableData>dBurn@test.com</TableData>
        <TableData>09074074999</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-blacklist bg-blactext-blacklist/[6%] rounded-full px-4 py-2">
            {' '}
            Blacklisted
          </span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>Meta</TableData>
        <TableData>Craig Paulsen</TableData>
        <TableData>pcraig@test.com</TableData>
        <TableData>09074074999</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>Turing</TableData>
        <TableData>Zhao Feng</TableData>
        <TableData>z_feng@test.com</TableData>
        <TableData>09074074999</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-active bg-active/[6%] rounded-full px-4 py-2">Active</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>Google</TableData>
        <TableData>Xing Ping</TableData>
        <TableData>x_ping@test.com</TableData>
        <TableData>088930919126</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-pending bg-pending/[6%] rounded-full px-4 py-2">Pending</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>HashNode</TableData>
        <TableData>Udeh Mensah</TableData>
        <TableData>umensah@test.com</TableData>
        <TableData>088930919126</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-pending bg-pending/[6%] rounded-full px-4 py-2">Pending</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>Toyota</TableData>
        <TableData>Xing Xing</TableData>
        <TableData>xxing@test.com</TableData>
        <TableData>088930919126</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-blacklist bg-blactext-blacklist/[6%] rounded-full px-4 py-2">
            Blaclisted
          </span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
      <TableBodyRow>
        <TableData>PInterest</TableData>
        <TableData>Lamidi Apapa</TableData>
        <TableData>a.lamidi@test.com</TableData>
        <TableData>088930919126</TableData>
        <TableData>April 28, 2025 10:00AM</TableData>
        <TableData>
          {' '}
          <span className="text-inactive bg-inactive/[6%] rounded-full px-4 py-2">inactive</span>
        </TableData>
        <TableData>
          <Button icon={<FaEllipsisVertical />} handleClick={() => {}} style="text-[1rem]" />
        </TableData>
      </TableBodyRow>
    </tbody>
  );
}

export default TableBody;
