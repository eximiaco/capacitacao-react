import { NavLink } from "react-router"
import { useAuthContext } from "@/core/providers/AuthContext"

export const Header = () => {
  const { user, logout } = useAuthContext();

  const handleSair = () => {
    logout();
  }

  return (
    <header>
      <div id="navigation">
        <h2 id="logo">APP TESTE</h2>
        <NavLink className="nav-link" to="produtos">Produtos</NavLink>
        <NavLink className="nav-link" to="pessoas">Pessoas</NavLink>
        
        <div className="" style={{marginLeft: 'auto'}}>
          <b style={{fontSize: 14}}>Olá, {user?.username}</b>
          <button onClick={handleSair} style={{marginLeft: 12}}>Sair</button>
        </div>
      </div>
    </header>
  )
}