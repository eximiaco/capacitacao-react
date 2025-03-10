import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UsuarioDetalhe } from "@/features/usuarios/models/UsuarioDetalhe";
import { consultarUsuarioApi } from "../../api/usuario.api";

export const useUsuarioDetalhe = () => {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState<UsuarioDetalhe>();
  const params = useParams<{usuarioId: string}>();

  useEffect(() => {
    if(!params.usuarioId) {
      return;
    }

    consultarUsuario(params.usuarioId);
  }, [])
  
  // métodos / comportamentos da função
  const consultarUsuario = async (usuarioId: string) => {
    setLoading(true);

    try {
      const responseData = await consultarUsuarioApi(usuarioId);
      setUsuario(responseData);
    } catch(error) {
      console.error(error);
    }
    
    setLoading(false);
  }

  return {
    loading,
    usuario,
  }
}