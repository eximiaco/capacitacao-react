import { AxiosError, AxiosResponse } from "axios";

export const responseSuccess = (response: AxiosResponse) => {
  return response;
}

export const responseError = (error: AxiosError) => {
  // error.log(error);

  if(error.status === 404) {
    error.message = "Conteúdo não encontrado";
  }
  
  throw error;
}