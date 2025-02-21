import { useProdutoContext } from "@/providers/ProdutoContext";
import './style.css';

export const TotalFavoritos = () => {
  const { favoritados } = useProdutoContext();

  return (
    <>
      {favoritados.length > 0 &&
        <div className="card card-favoritado">
          <label>Favoritados: </label>
          <div>{favoritados.length} produto(s)</div>
        </div>
      }
    </>
  )
}