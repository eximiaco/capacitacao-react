import { useEffect, useState } from "react";
import { Pessoa } from "../../models/Pessoa";

import { fetchPessoas } from "../../api/pessoa.api";

export const usePessoaLista = () => {
  // gerenciamento estado
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const total = pessoas.length;

  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarPessoas();
  }, [])
  
  // métodos / comportamentos da função
  const carregarPessoas = async () => {
    setIsLoading(true);

    try {
      const responseData = await fetchPessoas();
      setPessoas(responseData);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);  
    }    
  }

  const adicionarPessoa = (pessoa: Pessoa) => {
    setPessoas([pessoa, ...pessoas]);
  }

  const removerPessoa = (pessoa: Pessoa) => {
    const novaLista = pessoas.filter(item => item.id !== pessoa.id);
    setPessoas(novaLista);
  }

  return {
    pessoas,
    total,
    isLoading,
    adicionarPessoa,
    removerPessoa
  }
}