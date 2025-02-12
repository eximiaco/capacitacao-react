import { useProdutoContext } from "../../providers/ProdutoContext";

export const TotalFavoritos = () => {
  const { favoritados } = useProdutoContext();
  
  return (
    <div className="card">
      Total favoritados: {favoritados.length} produto(s)
    </div>
  )
}