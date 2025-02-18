import { useEffect, useState } from "react";
import { Produto } from "../../models/Produto";
import { fetchProdutosApi } from "../../api/produtos.api";
 

export const useProdutoLista = () => {
  // gerenciamento estado
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarProdutos();
  }, [])
  
  // métodos / comportamentos da função
  const carregarProdutos = async () => {
    setIsLoading(true);

    try {
      const responseData = await fetchProdutosApi();
      setProdutos(responseData);
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);  
    }    
  }

  return {
    produtos,
    isLoading
  }
}