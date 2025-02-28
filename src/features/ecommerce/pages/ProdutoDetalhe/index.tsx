import { useNavigate } from "react-router";
import { useProdutoDetalhe } from "./useProdutoDetalhe"
import './styles.css';
import { useProdutoComentarios } from "./useProdutoComentarios";
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";

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

  return (
    <>
      <h1>Produto detalhe</h1>
      <div className="card produto-card">

        <div className="produto-dados">
          <img src={produto?.thumbnail} className="produtoImage" />

          <div className="produto-info">
            <h2>{produto?.title} </h2>
            {produto?.category}

            <p>{produto?.description}</p>
            <h4>R${produto?.price}</h4>

            <br />
            <button onClick={handleVoltar}>Voltar</button>
          </div>
        </div>

        <div className="produto-comentarios">
          <h3>COMENTÁRIOS ({totalComentarios})</h3>

          <textarea rows={6}></textarea>
          <button className="secondary">Comentar</button>

          {comentarios.map(comentario =>
            <div className="produto-comentario" key={comentario.id}>
              <h4>{comentario.user.username}</h4>
              <p>{comentario.body}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}