import { useEffect, useState } from "react";
import { Usuario } from "@/features/usuarios/models/Usuario";
import { consultarUsuariosApi } from "../../api/usuario.api";

export const useUsuarioLista = () => {
  // gerenciamento estado
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const total = usuarios.length;

  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarUsuarios();
  }, [])
  
  // métodos / comportamentos da função
  const carregarUsuarios = async () => {
    setIsLoading(true);
    try {
      const responseData = await consultarUsuariosApi();
      setUsuarios(responseData);
    } catch(error) {
      console.error(error);
    } 
    setIsLoading(false);
  }

  const adicionarUsuario = (usuario: Usuario) => {
    setUsuarios([usuario, ...usuarios]);
  }

  const removerUsuario = (pessoa: Usuario) => {
    const novaLista = usuarios.filter(item => item.id !== pessoa.id);
    setUsuarios(novaLista);
  }

  return {
    usuarios,
    total,
    isLoading,
    adicionarUsuario,
    removerUsuario
  }
}