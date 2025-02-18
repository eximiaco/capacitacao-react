import { useEffect, useState } from "react";
import { Pessoa } from "../../models/Pessoa";

import { fetchPessoasApi } from "../../api/pessoa.api";


export const usePessoaLista = () => {
  // gerenciamento estado
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  const total = pessoas.length;

  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarPessoas();
  }, [])
  
  // métodos / comportamentos da função
  const carregarPessoas = async () => {
    try {
      const responseData = await fetchPessoasApi();
      setPessoas(responseData);
    } catch(error) {
      console.error(error);
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
    adicionarPessoa,
    removerPessoa
  }
}