import { useState } from 'react';
import './App.css';

import { PessoaLista } from './components/PessoaLista'
import { ProdutoLista } from './components/ProdutoLista';

function App() {
    const [tab, setTab] = useState<'pessoas'|'produtos'>('pessoas');

    const setPessoas = () => {
      setTab('pessoas');
    }

    const setProdutos = () => {
      setTab('produtos');
    }

    return (
      <>
        <div id="navigation">
          <div className="nav-link" onClick={setProdutos}>Produtos</div>
          <div className="nav-link" onClick={setPessoas}>Pessoas</div>
        </div>
        
        {tab == 'produtos' && <ProdutoLista /> }
        {tab == 'pessoas' && <PessoaLista /> } 
      </>
    )
}

export default App

