import LoginForm from '../features/Authentication/LoginForm';

function Login() {
  return (
    <main className="grid grid-cols-2">
      <section className="m-20">
        <div className="ml-10 w-fit ">
          <img src="/img/logo.svg" />
        </div>
        <div className="mt-36">
          <img src="/img/pablo-sign-in.svg" />
        </div>
      </section>
      <section className="place-self-center">
        <LoginForm />
      </section>
    </main>
  );
}

export default Login;
