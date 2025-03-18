import axios from 'axios';
import { responseError, responseSuccess } from './response.interceptor';
import { useAuthStore } from '../store/auth.store';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 20000,
});

httpClient.interceptors.request.use(
  (request) => {
    const { user } = useAuthStore.getState();

    request.headers['Authorization'] = `Bearer ${user?.accessToken}`;
    return request;
   }
);

httpClient.interceptors.response.use(
  responseSuccess,
  responseError
);