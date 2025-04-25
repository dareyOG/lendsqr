import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { randomAlphaNumeric } from '../utils/helpers';
import { AuthContextProviderPropType, LoginPropType } from '../types';

const AuthContext = createContext<AuthContextProviderPropType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const storedInfo = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') ?? '')
    : null;

  const [token, setToken] = useState(storedInfo);

  const isAuthenticated = Boolean(token?.length);

  const login = (loginData: LoginPropType) => {
    localStorage.setItem(
      'token',
      JSON.stringify(
        loginData.email.padStart(25, randomAlphaNumeric(5)).padEnd(30, randomAlphaNumeric(5))
      )
    );
    navigate('/users', { replace: true });
  };

  const logout = () => {
    setToken('');
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
