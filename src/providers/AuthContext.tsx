import { createContext, useContext, useEffect, useState } from "react";
import { AuthUser } from "../models/AuthUser";

type AuthContext = {
  user: AuthUser|null;
  isLoggedIn: boolean;
  login: (auth:AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

const AUTH_KEY = '@AUTH';

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser ] = useState<AuthUser|null>(null);

  // sincroniza com o cache na inicialização
  useEffect(() => {
    getUserAuth();
  }, []);

  const login = (authUser: AuthUser) => {
    setUser(authUser);
    localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  }

  const getUserAuth = () => {
    const storedValue = localStorage.getItem(AUTH_KEY);
    if(!storedValue) {
      return;
    }

    const user = JSON.parse(storedValue);

    if(user) {
      setUser(user);
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user,
      isLoggedIn: !!user, 
      login, 
      logout 
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext deve ser consumido dentro de um provider');
  }

  return context;
}