import { Route, Routes } from "react-router"
import { PessoaListaPage } from "./pages/PessoasLista"
import { PessoaDetalhePage } from "./pages/PessoaDetalhe"

export const UsuariosModule = () => {
  return (
    <Routes>
      <Route path="" element={<PessoaListaPage />} />
      <Route path=":pessoaId" element={<PessoaDetalhePage />} />
    </Routes>
  )
}