import { useEffect, useState } from 'react';
import { UserCredentialsPropType } from '../types';

export function useLocalStorageState(initialState: UserCredentialsPropType, key: string) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
