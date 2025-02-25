import { Navigate, Outlet } from "react-router";
import { Content } from "./Content"
import { Header } from "./Header"
import "./style.css";
import { useAuthContext } from "@/core/providers/AuthContext";

export const Layout = () => {
  const { isLoggedIn } = useAuthContext();
  
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