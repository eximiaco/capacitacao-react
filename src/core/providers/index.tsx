import { ToastContainer } from "react-toastify"
import { LoadingProvider } from "./LoadingContext/LoadingContext"
import { ThemeProvider } from "@mui/material"
import { AppTheme } from "../theme"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000
    }
  }
})

export const AppProviders = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          {props.children}
          <ToastContainer theme="colored" />
        </LoadingProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}