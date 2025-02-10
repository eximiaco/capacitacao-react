import { ProdutoCard } from "./ProdutoCard";
import { useProdutoLista } from "./useProdutoLista"
import "./style.css";
import { useNavigate } from "react-router";

export const ProdutoLista = () => {
  const { isLoading, produtos } = useProdutoLista();
  const navigate = useNavigate();

  const handleCriarProduto = () => {
    navigate('/produtos/criar');
  }

  if (isLoading) {
    return <h4>Carregando produto...</h4>
  }

  return (
    <>
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