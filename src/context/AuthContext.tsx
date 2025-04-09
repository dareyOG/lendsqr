/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from 'react-router-dom';
import { createContext, ReactNode, useReducer } from 'react';

import {
  AuthContextPropType,
  UserActionPropType,
  UserCredentialsPropType,
  UserStatePropType
} from '../types';

export const AuthContext = createContext<AuthContextPropType>({
  user: null,
  isAuthenticated: false,
  handleLogin: () => {},
  handleLogout: () => {}
});

const initialState: UserStatePropType = {
  user: null,
  isAuthenticated: false
};

function authReducer(state: UserStatePropType, action: UserActionPropType): UserStatePropType {
  switch (action.type) {
    case 'log_in':
      return {
        ...state,
        user: { email: action.payload?.email ?? '', password: action.payload?.password ?? '' },
        isAuthenticated: true
      };

    case 'log_out':
      return { ...state };

    default:
      throw new Error('unknown action');
  }
}

export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const handleLogin = (currUser: { currUser: UserCredentialsPropType }) => {
    dispatch({
      type: 'log_in',
      payload: { email: currUser.currUser.email, password: currUser.currUser.password }
    });

    const token = btoa(
      encodeURIComponent(`${currUser.currUser.email}:${currUser.currUser.password}`)
    );
    localStorage.setItem('token', token);
    navigate('/users', { replace: true });
  };

  const handleLogout = () => {
    dispatch({ type: 'log_out' });
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
