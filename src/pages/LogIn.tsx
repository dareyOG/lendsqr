import LoginForm from '../features/Authentication/LoginForm';

function Login() {
  return (
    <main className="grid grid-cols-2">
      <section className="m-20">
        <div className="ml-10 w-fit">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="mt-36">
          <img src="/img/pablo-sign-in.svg" alt="sign in" />
        </div>
      </section>

      <section className="place-self-center">
        <div className="flex flex-col gap-y-2 mb-20">
          <p className="font-bold text-[4rem] tracking-[-4%]">Welcome!</p>
          <p className="text-[2rem] tracking-normal text-secondary">Enter details to login</p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}

export default Login;
