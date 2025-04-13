import { createContext, ReactNode, useState } from 'react';
import { AuthContextProviderPropType, LoginPropType } from '../types';
import { randomAlphaNumeric } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<AuthContextProviderPropType>({
  username: null,
  token: '',
  login: () => {},
  logout: () => {}
});

function AuthContextProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const storedInfo = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') ?? '{}')
    : null;
  const [user, setUser] = useState<string | null>(storedInfo?.email);
  const [token, setToken] = useState(storedInfo?.token || '');

  const username = user
    ? user.replace(/[_0-9A-Z]/g, '').split('@')[0]
    : localStorage.getItem('user');

  const login = (data: LoginPropType) => {
    setUser(data.email);
    setToken(randomAlphaNumeric(50));
    localStorage.setItem('user', JSON.stringify({ ...data, token: randomAlphaNumeric(50) }));
    navigate('/users', { replace: true });
  };

  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ username, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
