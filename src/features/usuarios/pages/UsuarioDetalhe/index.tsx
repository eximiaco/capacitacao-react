import { useUsuarioDetalhe } from "./useUsuarioDetalhe";
import './styles.css';
import { useNavigate } from "react-router";

export const UsuarioDetalhePage = () => {
  const { usuario, loading } = useUsuarioDetalhe();
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/usuarios');
  }

  if (!usuario) {
    return null;
  }

  return (
    <>
      <h1>Detalhe usuário</h1>
      <div className="card usuario-detalhe-card">
        <img src={usuario.image} width="20px" />

        <div className="usuario-detalhe">
          <h2>{usuario.firstName} {usuario.lastName}</h2>

          <div className="usuario-detalhe-bloco">
            <h4>Empresa</h4>
            <div>{usuario.company.title}</div>
            <div>{usuario.company.department}</div>
          </div>

          <div className="usuario-detalhe-bloco">
            <h4>Contato</h4>
            <div>{usuario.email}</div>
            <div>{usuario.phone}</div>
          </div>

          <div className="usuario-detalhe-bloco">
            <h4>Endereço</h4>
            <div>{usuario.address.country}</div>
            <div>{usuario.address.state}</div>
            <div>{usuario.address.city}</div>
          </div>

          <br />
          <button onClick={handleVoltar} className="secondary">Voltar</button>
        </div>
      </div>
    </>
  )
}