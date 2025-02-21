import { httpClient } from '../http';
import { Pessoa } from '../models/Pessoa';

type ResponsePessoa = {
  users: Pessoa[],
  total: number,
  skip: number,
  limit: number
}

export const fetchPessoasApi = async () => {
  const select = 'id,firstName,lastName,email,phone';

  const response = await httpClient.get<ResponsePessoa>(
    'users', {params: {select}}
  );
  
  return response.data.users;
}
