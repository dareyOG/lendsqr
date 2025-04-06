function DetailInfo({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-[1.2rem] text-secondary uppercase">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

export default DetailInfo;
