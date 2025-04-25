import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center text-secondary font-bold">
      <p className="text-blacklist text-[5rem]">Error 404 !</p>
      <p className="capitalize">page not found</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-accent w-fit mt-10 p-5 rounded-[0.8rem] uppercase text-[1.4rem] text-white font-semibold hover:bg-primary cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
}

export default PageNotFound;
