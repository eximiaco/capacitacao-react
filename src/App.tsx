import './core/theme/App.css';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './App.routes';
import { AppProviders } from './core/providers';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  )
}

export default App

