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
        <h3>{pessoa.firstName} {pessoa.lastName}</h3>
        <div className="pessoa-info">
          <b>Email:</b> {pessoa.email}
        </div>
        <div className="pessoa-info">
          <b>Telefone:</b> {pessoa.phone}
        </div>
        <button onClick={handleRemover}>Remover</button>
      </div>
    </>
  )
}