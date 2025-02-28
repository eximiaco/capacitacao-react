import { ProdutoCard } from "./ProdutoCard";
import { useNavigate } from "react-router";
import styles from "./style.module.css";

import { TotalFavoritos } from "@/features/ecommerce/components/TotalFavoritos";
import { useProdutoContext } from "@/features/ecommerce/stores/ProdutoContext";
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";


export const ProdutoListaPage = () => {
  const { isLoading, produtos, error } = useProdutoContext();
  useLoadingState(isLoading);

  const navigate = useNavigate();

  const handleCriarProduto = () => {
    navigate('/produtos/criar');
  }

  if (isLoading) {
    return <h4>Carregando produto...</h4>
  }

  if(error) {
    return <div className="card">
      {error}
    </div>
  }

  return (
    <>
      <div className={styles["produto-content-top"]}>
        <h1>Listar produtos</h1>

        <div className={styles["produto-content-top-info"]}>
          <TotalFavoritos />
          <button onClick={handleCriarProduto}>Criar produto</button>
        </div>
      </div>

      <div className={styles["produto-lista"]}>
        {produtos.map(produto => {
          return <ProdutoCard key={produto.id} produto={produto} />
        })}
      </div>
    </>

  )
}