import { Navigate, Route, Routes } from "react-router"
import { PessoaListaPage } from "./pages/PessoasLista"
import { ProdutoListaPage } from "./pages/ProdutoLista"
import { ProdutoCriarPage } from "./pages/ProdutoCriar"
import { LoginPage } from "./pages/Login"
import { Layout } from "./components/Layout"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="pessoas" element={<PessoaListaPage />} />
          <Route path="produtos" element={<ProdutoListaPage />} />
          <Route path="produtos/criar" element={<ProdutoCriarPage />} />
        </Route>

        <Route path="auth/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="produtos" />} />
      </Routes>
    </>
  )
}