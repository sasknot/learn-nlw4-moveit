import { ReactNode, createContext, useState } from 'react';

interface UserContextData {
  username: string;
  login: (username: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider ({ children }: UserProviderProps) {
  const [username, setUsername] = useState('');

  function login (username) {
    setUsername(username)
  }

  return (
    <UserContext.Provider value={{ username, login }}>
      {children}
    </UserContext.Provider>
  )
}
