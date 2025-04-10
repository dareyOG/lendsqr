import { OrbitProgress } from 'react-loading-indicators';

function Loader() {
  return (
    <OrbitProgress
      variant="split-disc"
      color=" #39cdcc"
      size="small"
      text="fetching"
      textColor=""
    />
  );
}

export default Loader;
