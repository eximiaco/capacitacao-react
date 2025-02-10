import { NavLink } from "react-router"

export const Header = () => {
  return (
    <header>
      <div id="navigation">
        <NavLink className="nav-link" to="produtos">Produtos</NavLink>
        <NavLink className="nav-link" to="pessoas">Pessoas</NavLink>
      </div>
    </header>
  )
}