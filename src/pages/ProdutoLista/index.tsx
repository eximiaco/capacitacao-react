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
      <TotalFavoritos />

      <div className="content-top">
        <h2>LISTAR PRODUTOS</h2>
        <button onClick={handleCriarProduto}>Criar produto</button>
      </div>

      <div className="produto-lista">
        {produtos.map(produto => {
          return <ProdutoCard key={produto.id} produto={produto} />
        })}
      </div>
    </>

  )
}