import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import { useAuth } from './useAuth';
import { UserCredentialsPropType } from '../../types';

function LoginForm() {
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
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
              }
            })}
            placeholder=""
            className="peer p-5 border rounded-[0.5rem] border-secondary/20 w-[44.7rem] text-secondary invalid:text-blacklist focus:text-accent focus:outline-accent"
          />
        </FormRow>

        <FormRow label="Password" type="password" errorMessage={errors?.password?.message ?? ''}>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 6, message: 'ogbeni, your password nor make👎' },
              maxLength: { value: 8, message: 'Calm down😒, 8 characters are enough' }
            })}
            placeholder=""
            className="peer p-5 border rounded-[0.5rem] border-secondary/20 w-[44.7rem] text-secondary invalid:text-blacklist focus:text-accent focus:outline-accent"
          />
        </FormRow>

        <div
          role="button"
          className="text-accent w-fit uppercase cursor-pointer text-[1.2rem] font-semibold tracking-[10%] hover:underline"
        >
          Forgot password?
        </div>
        <button className="bg-accent w-full px-5 py-3 rounded-[0.8rem] uppercase text-[1.4rem] text-white font-semibold hover:bg-accent/50 cursor-pointer">
          {isSubmitting ? 'Logging in' : 'log in'}
        </button>
      </Form>
    </section>
  );
}

export default LoginForm;
