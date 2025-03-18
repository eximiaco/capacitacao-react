import { AuthUser } from "@/features/autenticacao/models/AuthUser";
import { create } from "zustand";

type State = {
  user: AuthUser|null;
  isLoggedIn: boolean;
}

type Actions = {
  login: (auth:AuthUser) => void;
  logout: () => void;
  getUserAuth: () => void
}

const AUTH_KEY = '@AUTH';

export const useAuthStore = create<State & Actions>((set) => ({
  user: null,
  isLoggedIn: false,

  login: (user: AuthUser) => {
    set({user, isLoggedIn: true})
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  },

  logout: () => {
    set({user: null, isLoggedIn: false});
    localStorage.removeItem(AUTH_KEY);
  },
  
  getUserAuth: () => {
    const storedValue = localStorage.getItem(AUTH_KEY);
    if(!storedValue) {
      return;
    }
    
    const user = JSON.parse(storedValue);
    
    if(user) {
      console.log('login 2', user)
      set({user, isLoggedIn: !!user});
    }
  }
}));

useAuthStore.getState().getUserAuth();