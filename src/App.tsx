import React from 'react'
import './App.css'

type Props = {
  nome: string;
  cidade: string;
  children?: React.ReactNode
}

const Pessoa = ({ nome, cidade, children }: Props) => {
  return (
    <>
      <ul>
        <li><b>Nome</b>: {nome}</li>
        <li><b>Cidade</b>: {cidade}</li>
        <li>{children} </li>
      </ul>
    </>
  )
}

function App() {
  const PESSOAS = [
    {
      id: 1,
      nome: 'Pessoa 1',
      cidade: 'Porto Alegre'
    },
    {
      id: 2,
      nome: 'Pessoa 2',
      cidade: 'Porto Alegre'
    },
    {
      id: 3,
      nome: 'Pessoa 3',
      cidade: 'Porto Alegre'
    },
  ];

  const handleAdicionarPessoa = () => {
    const obj = {
      id: 1,
      nome: 'Pessoa 1',
      cidade: 'Porto Alegre'
    };

    PESSOAS.push(obj);
  }

  return (
    <div>
      <div id="lista-pessoas">
        <ul>
          <li><button onClick={handleAdicionarPessoa} >Adicionar pessoa</button></li>
        </ul>

        {PESSOAS.map((pessoa) => {
          return <Pessoa 
            key={pessoa.id} 
            nome={pessoa.nome} 
            cidade={pessoa.cidade}
          >
            Descrição sobre a pessoa
          </Pessoa>
        })}
      </div>
    </div>
  )
}

export default App

