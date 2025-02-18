import './App.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './App.routes';

import { Layout } from './components/Layout';
import { ProdutoProvider } from './providers/ProdutoContext';
import { LoadingProvider } from './providers/LoadingContext';

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Layout>
          <ProdutoProvider>
            <AppRoutes />
          </ProdutoProvider>
        </Layout>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App

