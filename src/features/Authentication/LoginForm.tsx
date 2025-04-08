import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    const passwordInput = passwordRef.current;
    if (passwordInput) {
      setShowPassword(show => !show);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = (e.target as HTMLFormElement).password.value;
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    } else {
      console.log('Email:', email);
      console.log('Password', password);
      // Handle login logic here
      navigate('/users', { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="font-login">
      <div className="flex flex-col gap-y-2 w-fit mb-10">
        <p className="font-bold text-[4rem] tracking-[-4%]">Welcome!</p>
        <p className="text-[2rem] tracking-normal text-secondary">Enter details to login.</p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" id="email" className="w-fit">
          Email
        </label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          className="px-5 py-3 border border-secondary/20 w-[35rem] focus:outline-accent text-accent"
        />
      </div>

      <div className="flex flex-col relative">
        <label htmlFor="password" id="password" className="w-fit">
          Password
        </label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          ref={passwordRef}
          className="px-5 py-3 border border-secondary/20 w-[35rem] focus:outline-accent text-accent"
        />
        <span
          onClick={handleShowPassword}
          className="uppercase text-[1.2rem] text-center tracking-[10%] absolute top-[50%] translate-y-[50%] right-0 cursor-pointer w-fit text-secondary"
        >
          {showPassword ? 'hide' : 'show'}
        </span>
      </div>
      <div className="text-accent uppercase text-[1.2rem] font-semibold">Forgot password?</div>
      <button className="bg-accent w-full px-5 py-3 rounded-[0.5rem] uppercase text-[1.4rem] text-white font-semibold">
        log in
      </button>
    </form>
  );
}

export default LoginForm;
