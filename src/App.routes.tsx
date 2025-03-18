import { Navigate, Route, Routes } from "react-router"
import { Layout } from "@/shared/components/Layout"
import { lazy, Suspense } from "react"

const AutenticacaoModule = lazy(
  () => import("./features/autenticacao/autenticacao.module").then(m=> ({
    default: m.AutenticacaoModule
  }))
)

const EcommerceModule = lazy(
  () => import("./features/ecommerce/ecommerce.module").then(m=> ({
    default: m.EcommerceModule
  }))
)

const UsuariosModule = lazy(
  () => import("./features/usuarios/usuarios.module").then(m=> ({
    default: m.UsuariosModule
  }))
)

export const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="produtos/*" element={
            <Suspense fallback="Carrengando ecommerce...">
              <EcommerceModule />
            </Suspense>
          } />
          <Route path="usuarios/*" element={<UsuariosModule />} />
        </Route>

        <Route path="auth/*" element={<AutenticacaoModule  />} />
        <Route path="*" element={<Navigate to="produtos" />} />
      </Routes>
    </>
  )
}