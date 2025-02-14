import { ProdutoCard } from "./ProdutoCard";
import { useNavigate } from "react-router";
import "./style.css";

import { TotalFavoritos } from "../../components/TotalFavoritos";
import { useProdutoContext } from "../../providers/ProdutoContext";

export const ProdutoLista = () => {
  const { isLoading, produtos } = useProdutoContext();

  const navigate = useNavigate();

  const handleCriarProduto = () => {
    navigate('/produtos/criar');
  }

  if (isLoading) {
    return <h4>Carregando produto...</h4>
  }

  return (
    <>
      <div className="produto-content-top">
        <h1>Listar produtos</h1>

        <div className="produto-content-top-info">
          <TotalFavoritos />
          <button onClick={handleCriarProduto}>Criar produto</button>
        </div>
      </div>

      <div className="produto-lista">
        {produtos.map(produto => {
          return <ProdutoCard key={produto.id} produto={produto} />
        })}
      </div>
    </>

  )
}