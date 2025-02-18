import { Navigate, Route, Routes } from "react-router"
import { PessoaListaPage } from "./pages/PessoasLista"
import { ProdutoListaPage } from "./pages/ProdutoLista"
import { ProdutoCriarPage } from "./pages/ProdutoCriar"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="pessoas" element={<PessoaListaPage />} />
        <Route path="produtos" element={<ProdutoListaPage />} />
        <Route path="produtos/criar" element={<ProdutoCriarPage />} />
        <Route path="*" element={<Navigate to="pessoas" />} />
      </Routes>
    </>
  )
}