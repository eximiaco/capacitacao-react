import './App.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router';
import { PessoaLista } from './components/PessoaLista';
import { ProdutoLista } from './components/ProdutoLista';
import { ProdutoCriar } from './components/ProdutoCriar';

function App() {
  return (
    <BrowserRouter>
      <div id="navigation">
        <Link className="nav-link" to="produtos">Produtos</Link>
        <Link className="nav-link" to="pessoas">Pessoas</Link>
      </div>

      <Routes>
        <Route path="pessoas" element={<PessoaLista />} />
        <Route path="produtos" element={<ProdutoLista />} />
        <Route path="produtos/criar" element={<ProdutoCriar />} />
        <Route path="*" element={<Navigate to="pessoas" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

