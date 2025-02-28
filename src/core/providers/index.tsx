import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./AuthContext"
import { AxiosInterceptor } from "./AxiosInterceptor"
import { LoadingProvider } from "./LoadingContext/LoadingContext"
import { ThemeProvider } from "@mui/material"
import { AppTheme } from "../theme"

export const AppProviders = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <AuthProvider>
        <LoadingProvider>
          {props.children}
          <ToastContainer theme="colored" />
          <AxiosInterceptor />
        </LoadingProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}