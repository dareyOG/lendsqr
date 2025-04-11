import Loader from './Loader';

function PageLoader() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Loader variant="track-disc" />
    </main>
  );
}

export default PageLoader;
