import { useState } from "react";
import { loginApi } from "@/api/autenticacao";
import { useAuthContext } from "@/providers/AuthContext";

export const useLogin = () => {
  const { isLoggedIn, login } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const autenticar = async (username: string, password: string) => {
    setLoading(true);

    try {
      const authUser = await loginApi(username, password);
      login(authUser);
    } catch(error) {
      console.error('Erro ao se autenticar com o usuario:', error);
      throw error;
    }

    setLoading(false)
  }

  return {
    isLoggedIn,
    loading,
    autenticar
  }
}