import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from './useAuth';

import FormRow from '../../ui/FormRow';
import { LoginPropType } from '../../types';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPropType>();

  const auth = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const togglePassword = () => {
    setShowPassword(show => {
      const newShowPassword = !show;
      passwordRef.current?.setAttribute('type', newShowPassword ? 'text' : 'password');
      return newShowPassword;
    });
  };

  const onSubmit: SubmitHandler<LoginPropType> = input => {
    if (input.email.trim() === '' || input.password.trim() === '') return;
    else {
      auth.login({ email: input.email, password: input.password });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-14">
      <FormRow label="Email" field="email" errorMessage={errors.email?.message}>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Input cannot be blank',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address'
            }
          })}
          placeholder=""
          className={`peer p-5 border rounded-[0.5rem] border-secondary/20 w-[35rem] lg:w-[44.7rem] focus:outline-accent text-accent ${
            !errors.email ? '' : 'text-blacklist'
          } focus:text-secondary`}
        />
      </FormRow>
      <FormRow label="Password" field="password" errorMessage={errors.password?.message}>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          {...register('password', {
            required: 'Input cannot be blank',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
          placeholder=""
          className={`peer p-5 border rounded-[0.5rem] border-secondary/20 w-[35rem] lg:w-[44.7rem] focus:outline-accent text-accent ${
            !errors.password ? '' : 'text-blacklist'
          } focus:text-secondary`}
        />
        <span
          role="button"
          onClick={togglePassword}
          className="absolute uppercase text-[1.2rem] font-semibold text-accent top-[50%] right-[1.5rem] transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? 'hide' : 'show'}
        </span>
      </FormRow>
      <div
        role="button"
        className="text-accent w-fit uppercase cursor-pointer text-[1.2rem] font-semibold tracking-[10%] hover:underline"
      >
        Forgot password?
      </div>
      <button className="bg-accent w-full p-5 rounded-[0.8rem] uppercase text-[1.4rem] text-white font-semibold hover:bg-primary cursor-pointer">
        log in
      </button>
    </form>
  );
}

export default LoginForm;
