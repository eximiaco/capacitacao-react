import axios from 'axios';
import { responseError, responseSuccess } from './response.interceptor';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com',
});

httpClient.interceptors.response.use(
  responseSuccess,
  responseError
);