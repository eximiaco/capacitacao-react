import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { consultarProdutoApi } from "@/features/ecommerce/api/produtos.api";
import { Produto } from "@/features/ecommerce/models/Produto";

export const useProdutoDetalhe = () => {
  const [loading, setLoading] = useState(false);
  const [produto, setProduto] = useState<Produto>();
  const params = useParams<{produtoId: string}>();
  
  useEffect(() => {
    if(!params.produtoId) {
      return;
    }

    carregarProduto(params.produtoId);
  }, [])

  const carregarProduto = async (produtoId: string) => {
    try {
      setLoading(true);
      const produtoRes = await consultarProdutoApi(produtoId);
      setProduto(produtoRes);
    } catch(error) {
      throw error;
    }

    setLoading(false);
  }

  return {
    loading,
    produto
  }
}