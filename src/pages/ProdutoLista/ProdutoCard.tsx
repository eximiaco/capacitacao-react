import { Produto } from "../../models/Produto"

type Props = {
  produto: Produto
}
export const ProdutoCard = ({ produto }: Props) => {
  return (
    <div className="card card-produto">
      <h4>{produto.title}</h4>
      <img src={produto.image} />
      <p>{produto.description.substring(0, 90)}...</p>

      <div className="actions">
        <button>Favoritar</button>
        <button className="danger">Favoritar</button>

      </div>
    </div>
  )
}