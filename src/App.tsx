import './App.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './App.routes';

import { Layout } from './components/Layout';
import { ProdutoProvider } from './providers/ProdutoContext';

function App() {
  return (
    <BrowserRouter>
      <Layout> 
        <ProdutoProvider>
          <AppRoutes />
        </ProdutoProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default App

