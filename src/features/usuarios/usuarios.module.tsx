import { Navigate, Route, Routes } from "react-router"
import { UsuarioListaPage } from "./pages/UsuarioLista"
import { UsuarioDetalhePage } from "./pages/UsuarioDetalhe"

export const UsuariosModule = () => {
  return (
    <Routes>
      <Route path="" element={<UsuarioListaPage />} />
      <Route path=":usuarioId" element={<UsuarioDetalhePage />} />
      <Route path="*" element={<Navigate to="/usuarios" />} />
    </Routes>
  )
}