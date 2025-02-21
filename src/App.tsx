import './App.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './App.routes';

import { ProdutoProvider } from './providers/ProdutoContext';
import { LoadingProvider } from './providers/LoadingContext';

import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './providers/AuthContext';
import { AxiosInterceptor } from './providers/AxiosInterceptor';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoadingProvider>

          <ProdutoProvider>
            <AppRoutes />
            
            <ToastContainer theme="colored" />
            <AxiosInterceptor />
          </ProdutoProvider>

        </LoadingProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

