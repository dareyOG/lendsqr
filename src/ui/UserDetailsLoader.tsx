import Loader from './Loader';

function UserDetailsLoader({ title }: { title: string }) {
  return (
    <section className="border rounded-[0.4rem] border-transparent h-screen place-items-center grid px-[2.5rem] bg-white">
      <Loader text={title} variant="split-disc" />
    </section>
  );
}

export default UserDetailsLoader;
