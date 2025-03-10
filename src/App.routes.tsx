import { Navigate, Route, Routes } from "react-router"
import { Layout } from "@/shared/components/Layout"
import { AutenticacaoModule } from "./features/autenticacao/autenticacao.module"
import { EcommerceModule } from "./features/ecommerce/ecommerce.module"
import { UsuariosModule } from "./features/usuarios/usuarios.module"

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="produtos/*" element={<EcommerceModule />} />
          <Route path="usuarios/*" element={<UsuariosModule />} />
        </Route>

        <Route path="auth/*" element={<AutenticacaoModule  />} />
        <Route path="*" element={<Navigate to="produtos" />} />
      </Routes>
    </>
  )
}