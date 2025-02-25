import { useNavigate } from "react-router";
import { Pessoa } from "@/features/usuarios/models/Pessoa";
import './style.css';

type Props = {
  pessoa: Pessoa,
  onRemove: () => void
}

// componente puro
export const PessoaCard = ({ pessoa, onRemove }: Props) => {
  const navigate = useNavigate();

  const handleRemover = () => {
    onRemove()
  }

  const handlePessoaDetalhe = () => {
    navigate(`/pessoas/${pessoa.id}`);
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
        
        <button className="secondary" onClick={handlePessoaDetalhe}>Detalhes</button>
        <button onClick={handleRemover}>Remover</button>
      </div>
    </>
  )
}