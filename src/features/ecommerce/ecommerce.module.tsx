import { Route, Routes } from "react-router"
import { ProdutoProvider } from "@/features/ecommerce/stores/ProdutoContext"
import { Navigate } from "react-router"
import { lazy } from "react"

const ProdutoListaPage = lazy(
  () => import("./pages/ProdutoLista").then(m=> ({
    default: m.ProdutoListaPage
  }))
)

const ProdutoDetalhePage = lazy(
  () => import("./pages/ProdutoDetalhe").then(m=> ({
    default: m.ProdutoDetalhePage
  }))
)

const ProdutoCriarPage = lazy(
  () => import("./pages/ProdutoCriar").then(m=> ({
    default: m.ProdutoCriarPage
  }))
)

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