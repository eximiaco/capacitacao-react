import { httpClient } from "@/core/http"
import { AuthToken } from "@/features/autenticacao/models/AuthToken";
import { AuthUser } from "@/features/autenticacao/models/AuthUser";

export const loginApi = async (username:string, password: string) => {
  const res = await httpClient.post<AuthUser>('auth/login',{
    username,
    password,
    expiresInMins: 60
  });

  return res.data;
}

export const refreshToken = async (refreshToken: string) => {
  const res = await httpClient.post<AuthToken>('auth/refresh', {
    refreshToken
  });
  return res.data;
}