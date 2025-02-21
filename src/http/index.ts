import axios from 'axios';
import { responseError, responseSuccess } from './response.interceptor';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 20000,
});

httpClient.interceptors.response.use(
  responseSuccess,
  responseError
);