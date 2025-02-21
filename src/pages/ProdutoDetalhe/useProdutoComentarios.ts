import { useEffect, useState } from "react";
import { Comentario } from "@/models/Comentario";
import { consultarComentariosApi } from "@/api/comentarios.api";
import { useParams } from "react-router";

export const useProdutoComentarios = () => {
  const [loading, setLoading] = useState(false);
  const [comentarios, setComentarios]= useState<Comentario[]>([]);
  const params = useParams<{produtoId: string}>();
  
  useEffect(() => {
    if(!params.produtoId) {
      return;
    }

    carregarComentarios()
  }, []);
  
  const carregarComentarios = async () => {
    setLoading(true);

    try {
      const comentariosRes = await consultarComentariosApi();
      setComentarios(comentariosRes);
    } catch(error) {
      console.log('Erro ao carregar comentários', error);
    }
    
    setLoading(false);
  }

  return {
    loading,
    comentarios
  }
}