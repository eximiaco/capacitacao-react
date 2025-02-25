import { httpClient } from "@/core/http"
import { Comentario } from "@/features/ecommerce/models/Comentario"

type ResponseComentarios = {
  comments: Comentario[],
  total: number,
  skip: number,
  limit: number
}

export const consultarComentariosApi = async () => {
  return httpClient.get<ResponseComentarios>('comments').then(res => res.data.comments);
}

export const criarComentarioApi = (comentario: Comentario) => {
  return httpClient.post('comments/add', comentario).then(res => res.data);
}

export const apagarComentarioApi = (comentarioId: number) => {
  return httpClient.delete(`comments/add/${comentarioId}`).then(res => res.data);
}