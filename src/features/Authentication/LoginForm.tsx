import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLocalStorageState } from '../../hooks/useLocalStorageState';

function LoginForm() {
  // const [user, setUser] = useLocalStorageState(null, 'user');

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleShowPassword = () => {
    const passwordInput = passwordRef?.current;
    console.log(passwordInput);

    if (passwordInput) {
      setShowPassword(show => !show);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(e.target.password.value);

    // const email = emailRef.current?.value;
    // const password = (e.target as HTMLFormElement).password.value;
    // if (!email || !password) {
    //   throw new Error('Please fill in all fields');
    //   return;
    // } else {
    //   console.log('Email:', email);
    //   console.log('Password', password);
    //   // Handle login logic here
    //   navigate('/users', { replace: true });
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="font-login flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-2 mb-20">
        <p className="font-bold text-[4rem] tracking-[-4%]">Welcome!</p>
        <p className="text-[2rem] tracking-normal text-secondary">Enter details to login.</p>
      </div>
      <div className="flex flex-col relative">
        <input
          type="email"
          name="email"
          // ref={emailRef}
          placeholder=""
          required
          className="peer p-5 border rounded-[0.5rem] border-secondary/20 w-[44.7rem] text-secondary focus:text-accent focus:outline-accent"
        />
        <label
          htmlFor="email"
          id="email"
          className="w-fit px-2 absolute top-5 left-5 text-[1.4rem] text-secondary/60 bg-white border border-transparent peer-focus:top-[-20%] peer-focus:text-primary peer-focus:font-semibold peer-not-placeholder-shown:top-[-20%]"
        >
          Email
        </label>
      </div>

      <div className="flex flex-col relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          ref={passwordRef}
          placeholder=""
          required
          className="peer p-5 border rounded-[0.5rem] border-secondary/20 w-[44.7rem] text-secondary focus:text-accent focus:outline-accent"
        />
        <label
          htmlFor="password"
          id="password"
          className="w-fit px-2 absolute top-5 left-5 text-[1.4rem] text-secondary/60 bg-white border border-transparent peer-focus:top-[-20%]  peer-focus:font-semibold peer-focus:text-primary peer-not-placeholder-shown:top-[-20%]"
        >
          Password
        </label>
        <span
          role="button"
          onClick={handleShowPassword}
          className="w-fit text-[1.1rem] uppercase text-center tracking-[10%] font-semibold text-accent absolute top-7 right-5 cursor-pointer"
        >
          {showPassword ? 'hide' : 'show'}
        </span>
      </div>
      <div
        role="button"
        className="text-accent uppercase cursor-pointer text-[1.2rem] font-semibold tracking-[10%] hover:underline"
      >
        Forgot password?
      </div>
      <button
        type="submit"
        className="bg-accent w-full px-5 py-3 rounded-[0.8rem] uppercase text-[1.4rem] text-white font-semibold hover:bg-accent/50 cursor-pointer"
      >
        log in
      </button>
    </form>
  );
}

export default LoginForm;

{
  /*  <label
          htmlFor="password"
          id="password"
          className="w-fit absolute top-[20%] left-[4%] bg-white border border-transparent px-3.5 peer-focus:top-[-30%] peer-not-placeholder-shown:top-[-30%]"
        >
          Password
        </label>
        <input
          // type={showPassword ? 'text' : 'password'}
          type="text"
          name="password"
          // ref={passwordRef}
          className="peer px-5 py-3 border border-secondary/20 w-[35rem] text-accent focus:outline-accent"
        />
        <span
          // onClick={handleShowPassword}
          className="uppercase text-[1.2rem] text-center tracking-[10%] absolute top-[50%] translate-y-[50%] right-0 cursor-pointer w-fit text-secondary"
        >
          show
        </span> */
}
