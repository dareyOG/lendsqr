import Button from './Button';

function ErrorFallback({
  error,
  resetErrorBoundary
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-secondary font-bold">
      <h1 className="text-blacklist text-[3rem]">Something went wrong 🧐</h1>
      <p className="text-pending  text-[1.5rem]">
        {Boolean(error.message) && 'Try again by logging out and logging in'}
      </p>
      <Button
        title={'Try again'}
        handleClick={resetErrorBoundary}
        className=" text-white bg-primary hover:bg-primary/80 border border-transparent rounded-[1rem] px-4 py-2"
      />
    </div>
  );
}

export default ErrorFallback;
