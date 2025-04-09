import { useRef, useState } from 'react';
import { useAuth } from './useAuth';

export function useLogin() {
  const [userCred, setUserCred] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const auth = useAuth();

  const togglePasswordType = () => {
    setShowPassword(show => !show);
    passwordRef.current?.setAttribute('type', showPassword ? 'password' : 'text');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userCred.email.trim() || !userCred.password.trim()) return;

    if (userCred.email.trim() && userCred.password.trim()) {
      auth?.handleLogin({ currUser: userCred });
    }
  };

  return { userCred, setUserCred, passwordRef, togglePasswordType, showPassword, handleSubmit };
}
