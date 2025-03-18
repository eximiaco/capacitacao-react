import { Navigate, Outlet } from "react-router";
import { Content } from "./Content"
import { Header } from "./Header"
import { useAuthStore } from "@/core/store/auth.store";

export const Layout = () => {
  const { isLoggedIn } = useAuthStore();
  
  if(!isLoggedIn) {
    return <Navigate to="/auth/login" />
  }

  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  )
}