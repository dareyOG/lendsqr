import { OrbitProgress } from 'react-loading-indicators';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <OrbitProgress
        variant="split-disc"
        color=" #39cdcc"
        size="small"
        text="fetching"
        textColor=""
      />
    </div>
  );
}

export default Loader;
