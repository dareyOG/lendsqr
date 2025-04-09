import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useAuth } from './useAuth';
import { UserCredentialsPropType } from '../../types';
import { useState } from 'react';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<UserCredentialsPropType>();
  const { handleLogin } = useAuth();

  const onSubmit = ({ email, password }: UserCredentialsPropType) => {
    if (!email || !password || (!email && !password)) return;
    handleLogin({ currUser: { email, password } });
  };

  return (
    <section>
      <div className="flex flex-col gap-y-2 mb-20">
        <p className="font-bold text-[4rem] tracking-[-4%]">Welcome!</p>
        <p className="text-[2rem] tracking-normal text-secondary">Enter details to login.</p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email" type="email" errorMessage={errors?.email?.message ?? ''}>
          <input
            type="email"
            id="email"
            autoComplete="email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            })}
            placeholder=""
            className={`peer p-5 border rounded-[0.5rem] border-secondary/20 w-[44.7rem] focus:outline-accent ${
              errors.email ? 'text-blacklist' : 'text-accent focus:text-secondary'
            }`}
          />
        </FormRow>

        <FormRow label="Password" type="password" errorMessage={errors?.password?.message ?? ''}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'ogbeni, your password nor make👎' },
              maxLength: { value: 8, message: 'Calm down😒, 8 characters don do' }
            })}
            placeholder=""
            className={`peer p-5 border rounded-[0.5rem] border-secondary/20 w-[44.7rem] focus:outline-accent ${
              errors.password ? 'text-blacklist' : 'text-accent focus:text-secondary'
            }`}
          />
          <span
            role="button"
            onClick={() => {
              setShowPassword(show => !show);
            }}
            className="absolute uppercase text-[1.2rem] font-semibold text-accent top-[35%] right-[3%] cursor-pointer"
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
        <button className="bg-accent w-full p-5 rounded-[0.8rem] uppercase text-[1.4rem] text-white font-semibold hover:bg-accent/50 cursor-pointer">
          {isSubmitting ? 'Logging in' : 'log in'}
        </button>
      </Form>
    </section>
  );
}

export default LoginForm;
