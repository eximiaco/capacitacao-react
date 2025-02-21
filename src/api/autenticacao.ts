import { httpClient } from "../http"
import { AuthToken } from "../models/AuthToken";
import { AuthUser } from "../models/AuthUser";

export const loginApi = async (username:string, password: string) => {
  const res = await httpClient.post<AuthUser>('auth/login',{
    username,
    password
  });

  return res.data;
}

export const refreshToken = async (refreshToken: string) => {
  const res = await httpClient.post<AuthToken>('auth/refresh', {
    refreshToken
  });
  return res.data;
}