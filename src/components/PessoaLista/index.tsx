import { useEffect, useState } from "react";
import { Pessoa } from "../../models/Pessoa";
import { PessoaCard } from "./PessoaCard";
import './style.css';

export const PessoaLista = () => {
  // gerenciamento estado
  const [pessoas, setPessoas] = useState([
    {
      id: 3,
      nome: 'Pessoa 3',
      cidade: 'Porto Alegre'
    },
    {
      id: 2,
      nome: 'Pessoa 2',
      cidade: 'Porto Alegre'
    },
    {
      id: 1,
      nome: 'Pessoa 1',
      cidade: 'Porto Alegre'
    },
  ]);

  const total = pessoas.length;

  // gerenciar ciclo de vida do componente
  // ciclo: criação
  useEffect(() => {
    // escopo
  }, [])

  useEffect(() => {
    // pessoas foi alterada -> executa
  }, [pessoas])

  // criação
  useEffect(()=> {
  }, []);

  
   // métodos / comportamentos
  const handleAdicionarPessoa = () => {
    const id = pessoas.length + 1;

    const novaPessoa = {
      id,
      nome: `Pessoa ${id}`,
      cidade: 'Porto Alegre' 
    };

    setPessoas([novaPessoa, ...pessoas]);
  }

  const handleRemoverPessoa = (pessoa: Pessoa) => {
    const novaLista = pessoas.filter(item => item.id !== pessoa.id);
    setPessoas(novaLista);
  }

  return (
    <div>
      <h2>LISTAR PESSOAS</h2>
      <button onClick={handleAdicionarPessoa} >Adicionar pessoa</button>

      <hr style={{marginBottom: 30, marginTop: 30}} />

      <h4>TOTAL: {total}</h4>
      <div className="pessoa-lista">
        {pessoas.map((pessoa) => {
          return <PessoaCard
            key={pessoa.id}
            pessoa={pessoa}
            onRemove={() => handleRemoverPessoa(pessoa)}
          />
        })}
      </div>
    </div>
  )  
}