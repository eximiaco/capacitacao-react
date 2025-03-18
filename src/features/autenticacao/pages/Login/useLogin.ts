import { useState } from "react";
import { loginApi } from "@/features/autenticacao/api/autenticacao";
import { useAuthStore } from "@/core/store/auth.store";

export const useLogin = () => {
  const { isLoggedIn, login } = useAuthStore();
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