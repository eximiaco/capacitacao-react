import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./AuthContext"
import { AxiosInterceptor } from "./AxiosInterceptor"
import { LoadingProvider } from "./LoadingContext"

export const AppProviders = (props: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        {props.children}
        <ToastContainer theme="colored" />
        <AxiosInterceptor />
      </LoadingProvider>
    </AuthProvider>
  )
}