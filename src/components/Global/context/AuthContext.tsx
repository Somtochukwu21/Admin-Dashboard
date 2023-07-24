import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type AuthContextType = {
  user: { loggedIn: boolean };
  setUser: Dispatch<SetStateAction<{ loggedIn: boolean }>>;
};

type AuthProviderType = { children: ReactNode };

const defaultValue: AuthContextType = { user: { loggedIn: false }, setUser: () => null };
export const AuthContext = createContext<AuthContextType>(defaultValue);

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState({ loggedIn: false });

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
