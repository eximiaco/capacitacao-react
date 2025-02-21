import { usePessoaDetalhe } from "./usePessoaDetalhe";
import './styles.css';
import { useNavigate } from "react-router";

export const PessoaDetalhePage = () => {
  const { pessoa, loading } = usePessoaDetalhe();
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/pessoas');
  }

  if (!pessoa) {
    return null;
  }

  return (
    <>
      <h1>Detalhe pessoa</h1>
      <div className="card pessoa-detalhe-card">
        <img src={pessoa.image} width="20px" />

        <div className="pessoa-detalhe">
          <h2>{pessoa.firstName} {pessoa.lastName}</h2>

          <div className="pessoa-detalhe-bloco">
            <h4>Empresa</h4>
            <div>{pessoa.company.title}</div>
            <div>{pessoa.company.department}</div>
          </div>

          <div className="pessoa-detalhe-bloco">
            <h4>Contato</h4>
            <div>{pessoa.email}</div>
            <div>{pessoa.phone}</div>
          </div>

          <div className="pessoa-detalhe-bloco">
            <h4>Endereço</h4>
            <div>{pessoa.address.country}</div>
            <div>{pessoa.address.state}</div>
            <div>{pessoa.address.city}</div>
          </div>

          <br />
          <button onClick={handleVoltar} className="secondary">Voltar</button>
        </div>
      </div>
    </>
  )
}