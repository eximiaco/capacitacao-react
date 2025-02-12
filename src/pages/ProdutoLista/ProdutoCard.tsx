import { Produto } from "../../models/Produto"
import { useProdutoContext } from "../../providers/ProdutoContext"

type Props = {
  produto: Produto
}
export const ProdutoCard = ({ produto }: Props) => {
  const { selecionarProduto, temProduto } = useProdutoContext();

  return (
    <>
      <div className="card card-produto">
        <h4>{produto.title}</h4>
        <img src={produto.image} />
        <p>{produto.description.substring(0, 90)}...</p>

        <div className="actions">
          {!temProduto(produto) && <button onClick={() => selecionarProduto(produto)}>
            Favoritar
          </button>}

          {temProduto(produto) && <button className="danger" onClick={() => selecionarProduto(produto)}>
            Remover
          </button>}
        </div>
      </div>
    </>
  )
}