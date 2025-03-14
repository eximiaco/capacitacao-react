import { useCallback, useEffect, useState } from "react";
import { consultarProdutosApi } from "@/features/ecommerce/api/produtos.api";
import { useProdutoStore } from "../../stores/produtos.store";
 

export const useProdutoLista = () => {
  // gerenciamento estado
  // const { produtos, setProdutos} = useProdutoStore();

  const produtos = useProdutoStore(state => state.produtos);
  const setProdutos = useProdutoStore(state => state.setProdutos);

  const [isLoading, setIsLoading] = useState(true);

  // métodos / comportamentos da função
  const carregarProdutos = useCallback(async () => {
    setIsLoading(true);

    try {
      const responseData = await consultarProdutosApi();
      setProdutos(responseData);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);  
    }    
  }, [setProdutos])


  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarProdutos();
  }, [carregarProdutos])
  

  return {
    produtos,
    isLoading
  }
}