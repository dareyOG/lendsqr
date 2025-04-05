import { ReactNode } from 'react';

function SectionDetail({
  sectionTitle,
  children,
  style = 'grid-cols-5'
}: {
  sectionTitle: string;
  children: ReactNode;
  style?: string;
}) {
  return (
    <div className="flex flex-col gap-5 py-10 ">
      <h2 className="text-primaryText font-medium w-fit">{sectionTitle}</h2>
      <div className={`grid gap-2.5 ${style}`}>{children}</div>
    </div>
  );
}

export default SectionDetail;
