import { Navigate, Route, Routes } from "react-router"
import { PessoaLista } from "./pages/PessoaLista"
import { ProdutoLista } from "./pages/ProdutoLista"
import { ProdutoCriar } from "./pages/ProdutoCriar"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="pessoas" element={<PessoaLista />} />
        <Route path="produtos" element={<ProdutoLista />} />
        <Route path="produtos/criar" element={<ProdutoCriar />} />
        <Route path="*" element={<Navigate to="pessoas" />} />
      </Routes>
    </>
  )
}