import { createContext, ReactNode, useReducer } from 'react';
import { redirect } from 'react-router-dom';

import {
  AuthContextPropType,
  UserActionPropType,
  UserCredentialsPropType,
  UserStatePropType
} from '../types';

const AuthContext = createContext<AuthContextPropType | null>(null);

const initialState: UserStatePropType = {
  user: null,
  isAuthenticated: false
};

function authReducer(state: UserStatePropType, action: UserActionPropType): UserStatePropType {
  switch (action.type) {
    case 'log_in':
      return {
        ...state,
        user: action.payload ?? null,
        isAuthenticated: true
      };

    case 'log_out':
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error('unknown action');
  }
}

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = (user: { user: UserCredentialsPropType }) => {
    if (user && user.user) {
      dispatch({
        type: 'log_in',
        payload: { email: user.user.email, password: user.user.password }
      });
      redirect('/users');
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'log_out' });
    // Clear user data from local storage or any other storage mechanism
    localStorage.removeItem('user');
    redirect('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
