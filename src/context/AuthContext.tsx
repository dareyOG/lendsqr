import { createContext, useReducer } from 'react';
import {
  AuthContextPropType,
  AuthProviderPropType,
  UserActionPropType,
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

function AuthContextProvider({ children }: AuthProviderPropType) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
