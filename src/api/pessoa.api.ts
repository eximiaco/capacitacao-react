import { Pessoa } from '../models/Pessoa';
import FETCH_PESSOAS_MOCK from './mock/fetch_pessoas';

type ResponsePessoa = {
  users: Pessoa[],
  total: number,
  skip: number,
  limit: number
}

export const fetchPessoasApi = async () => {
  await new Promise(resolve => setTimeout(() => {
    resolve(true);
  }, 1000));

  return FETCH_PESSOAS_MOCK.users;
}