import { useEffect } from "react";
import { useAuthContext } from "./AuthContext"
import { httpClient } from "@/core/http";

export const AxiosInterceptor = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    const interceptor = httpClient.interceptors.request.use(
      (request) => {
        request.headers['Authorization'] = `Bearer ${user?.accessToken}`;
        return request;
       }
    );

    // destruição 
    return () => {
      httpClient.interceptors.request.eject(interceptor);
    }
  }, [user?.accessToken]);

  return null;
}