import { Pessoa } from "../../models/Pessoa";
import './style.css';

type Props = {
  pessoa: Pessoa,
  onRemove: () => void
}

// componente puro
export const PessoaCard = ({ pessoa, onRemove }: Props) => {
  const handleRemover = () => {
    onRemove()
  }

  return (
    <>
      <div className="card pessoa-card">
        <h3>{pessoa.nome}</h3>
        <div><b>Cidade</b>: {pessoa.cidade}</div>
        <button onClick={handleRemover}>Remover</button>
      </div>
    </>
  )
}