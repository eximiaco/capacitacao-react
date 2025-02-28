import { useEffect, useState } from "react";
import { Pessoa } from "@/features/usuarios/models/Pessoa";

import { consultarPessoasApi } from "@/features/ecommerce/api/pessoa.api";


export const usePessoaLista = () => {
  // gerenciamento estado
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const total = pessoas.length;

  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarPessoas();
  }, [])
  
  // métodos / comportamentos da função
  const carregarPessoas = async () => {
    setIsLoading(true);
    try {
      const responseData = await consultarPessoasApi();
      setPessoas(responseData);
    } catch(error) {
      console.error(error);
    } 
    setIsLoading(false);
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