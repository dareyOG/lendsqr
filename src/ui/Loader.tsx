import { OrbitProgress } from 'react-loading-indicators';

function Loader() {
  return (
    <div className="flex justify-center items-center h-full">
      <OrbitProgress variant="spokes" size="medium" color={' #213f7d'} />;
    </div>
  );
}

export default Loader;
