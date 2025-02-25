import { Route, Routes } from "react-router"
import { LoginPage } from "./pages/Login"

export const AutenticacaoModule = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}