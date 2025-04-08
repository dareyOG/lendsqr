import LoginForm from '../features/Authentication/LoginForm';

function LogIn() {
  return (
    <main className="grid grid-cols-2">
      <div className="m-20">
        <div className="ml-10 w-fit ">
          <img src="/img/logo.svg" />
        </div>
        <div className="mt-36">
          <img src="/img/pablo-sign-in.svg" />
        </div>
      </div>
      <div className="place-self-center">
        <LoginForm />
      </div>
    </main>
  );
}

export default LogIn;
