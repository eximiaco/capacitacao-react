import { Route, Routes } from "react-router"
import { ProdutoListaPage } from "./pages/ProdutoLista"
import { ProdutoCriarPage } from "./pages/ProdutoCriar"
import { ProdutoDetalhePage } from "./pages/ProdutoDetalhe"
import { ProdutoProvider } from "@/features/ecommerce/stores/ProdutoContext"
import { Navigate } from "react-router"

export const EcommerceModule = () => {
  return (
    <ProdutoProvider>
      <Routes>
        <Route path="" element={<ProdutoListaPage />} />
        <Route path="criar" element={<ProdutoCriarPage />} />
        <Route path=":produtoId" element={<ProdutoDetalhePage />} />
        <Route path="*" element={<Navigate to="/produtos" />} />
      </Routes>
    </ProdutoProvider>
  )
}