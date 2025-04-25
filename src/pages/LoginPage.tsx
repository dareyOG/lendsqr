import LoginForm from '../features/Authentication/LoginForm';

function LoginPage() {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* <main className="h-screen flex flex-col lg:flex-row items-center justify-center mx-5  lg:mx-0"> */}
      <section className="place-self-center m-20">
        <div className="lg:ml-10 w-fit">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <div className="mt-36 hidden lg:block">
          <img src="/img/pablo-sign-in.svg" alt="sign in" />
        </div>
      </section>

      <section className="place-self-center">
        <div className="flex flex-col gap-y-2 mb-20 text-center lg:text-start">
          <p className="font-bold text-[4rem] tracking-[-4%]">Welcome!</p>
          <p className="text-[2rem] tracking-normal text-secondary">Enter details to login</p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
