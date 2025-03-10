import { useNavigate } from "react-router";
import { useProdutoDetalhe } from "./useProdutoDetalhe"
// import './styles.css';
import { useProdutoComentarios } from "./useProdutoComentarios";
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";
import { Card, Stack, TextField } from "@mui/material";
import * as S from './style';

export const ProdutoDetalhePage = () => {
  const { produto, loading: loadingProdutos } = useProdutoDetalhe();
  const { comentarios, loading: loadingComentarios } = useProdutoComentarios();

  const loading = loadingProdutos && loadingComentarios;
  const totalComentarios = comentarios.length;

  const navigate = useNavigate();
  useLoadingState(loading)

  const handleVoltar = () => {
    navigate('/produtos');
  }

  if(loading) {
    return null;
  }

  return (
    <Stack gap={3} >
      <h1>Produto detalhe</h1>

      <Card sx={{ padding: 4, marginTop: 4 }}>
        <Stack direction="row" gap={3}>
          <img src={produto?.thumbnail} className="produtoImage" />

          <div className="produto-info">
            <h2>{produto?.title} </h2>
            {produto?.category}

            <p>{produto?.description}</p>
            <h4>R${produto?.price}</h4>

            <br />
            <button onClick={handleVoltar}>Voltar</button>
          </div>
        </Stack>
      </Card>


      <Stack gap={2}>
        <h3>COMENTÁRIOS ({totalComentarios})</h3>
        <TextField multiline rows={4}></TextField>
        <button className="secondary">Comentar</button>
      </Stack>

      {comentarios.map(comentario =>
        <S.Comentario key={comentario.id}>
          <h4>{comentario.user.username}</h4>
          <p>{comentario.body}</p>
        </S.Comentario>
      )}
    </Stack>
  )
}