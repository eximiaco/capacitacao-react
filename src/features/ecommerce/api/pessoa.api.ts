import { httpClient } from '@/core/http';
import { Pessoa } from '@/features/usuarios/models/Pessoa';
import { PessoaDetalhe } from '@/features/usuarios/models/PessoaDetalhe';

type ResponsePessoas = {
  users: Pessoa[],
  total: number,
  skip: number,
  limit: number
}

export const consultarPessoasApi = async () => {
  const select = 'id,firstName,lastName,email,phone';

  const response = await httpClient.get<ResponsePessoas>(
    'users', {params: {select}}
  );
  
  return response.data.users;
}

export const consultarPessoaApi = async (pessoaId: string) => {
  return httpClient.get<PessoaDetalhe>(`users/${pessoaId}`).then(res => res.data);
}
