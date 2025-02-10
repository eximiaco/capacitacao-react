import './App.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './App.routes';

import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App

