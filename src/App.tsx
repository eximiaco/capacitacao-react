import './App.css'
import { PessoaLista } from './components/PessoaLista'
import { BrowserRouter, Route, Routes } from 'react-router';

const ProdutoLista = () => {
  return <h2>LISTAR PRODUTOS</h2>
}

function App() {
    return <BrowserRouter>
      <Routes>
        <Route path="pessoas" element={<PessoaLista />} />
        <Route path="produtos" element={<ProdutoLista />} />
      </Routes>
    </BrowserRouter>
}

export default App

