import { useEffect, useState } from "react";

import { consultarPessoaApi } from "@/features/ecommerce/api/pessoa.api";
import { useParams } from "react-router";
import { PessoaDetalhe } from "@/features/usuarios/models/PessoaDetalhe";

export const usePessoaDetalhe = () => {
  const [loading, setLoading] = useState(true);
  const [pessoa, setPessoa] = useState<PessoaDetalhe>();
  const params = useParams<{pessoaId: string}>();


  useEffect(() => {
    if(!params.pessoaId) {
      return;
    }

    consultarPessoa(params.pessoaId);
  }, [])
  
  // métodos / comportamentos da função
  const consultarPessoa = async (pessoaId: string) => {
    setLoading(true);

    try {
      const responseData = await consultarPessoaApi(pessoaId);
      setPessoa(responseData);
    } catch(error) {
      console.error(error);
    }
    
    setLoading(false);
  }

  return {
    loading,
    pessoa,
  }
}