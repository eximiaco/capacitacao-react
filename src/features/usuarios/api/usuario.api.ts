import { httpClient } from '@/core/http';
import { Usuario } from '@/features/usuarios/models/Usuario';
import { UsuarioDetalhe } from '@/features/usuarios/models/UsuarioDetalhe';

type ResponseUsuarios = {
  users: Usuario[],
  total: number,
  skip: number,
  limit: number
}

export const consultarUsuariosApi = async () => {
  const select = 'id,firstName,lastName,email,phone';

  const response = await httpClient.get<ResponseUsuarios>(
    'users', {params: {select}}
  );
  
  return response.data.users;
}

export const consultarUsuarioApi = async (pessoaId: string) => {
  return httpClient.get<UsuarioDetalhe>(`users/${pessoaId}`).then(res => res.data);
}
