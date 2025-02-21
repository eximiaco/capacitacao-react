import { NavLink } from "react-router"
import { useAuthContext } from "../../providers/AuthContext"

export const Header = () => {
  const { logout } = useAuthContext();

  const handleSair = () => {
    logout();
  }

  return (
    <header>
      <div id="navigation">
        <h2 id="logo">APP TESTE</h2>
        <NavLink className="nav-link" to="produtos">Produtos</NavLink>
        <NavLink className="nav-link" to="pessoas">Pessoas</NavLink>
        

        <button onClick={handleSair} style={{marginLeft: 'auto'}}>Sair</button>
      </div>
    </header>
  )
}