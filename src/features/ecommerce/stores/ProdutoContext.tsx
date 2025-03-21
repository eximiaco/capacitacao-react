import { createContext, useContext, useEffect, useState } from "react";
import { Produto } from "@/features/ecommerce/models/Produto";
import { criarProdutoApi, consultarProdutosApi } from "@/features/ecommerce/api/produtos.api";
import axios from "axios";

// 
// Definição tipos
//
type ProdutoContext = ReturnType<typeof useStore>

type Props = {
  children: React.ReactNode
}

const useStore = () => {
  // estado componente
  const [favoritados, setFavoritados] = useState<Produto[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // estado servidor
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // gerenciar ciclo de vida do componente
  useEffect(() => {
    carregarProdutos();
  }, [])

  // métodos / comportamentos da função
  const carregarProdutos = async () => {
    setIsLoading(true);

    try {
      const responseData = await consultarProdutosApi();
      setProdutos(responseData);
    } catch (error) {
      if(!axios.isAxiosError(error)) {
        return;
      }
      
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const adicionarProduto = async (produto: Produto) => {
    try {
      await criarProdutoApi(produto);

      const novaLista = [produto, ...produtos];
      setProdutos(novaLista);
    } catch(error) {
      throw error;
    }
  }

  //
  // gerencia favoritados
  //
  const selecionarProduto = (produto: Produto) => {
    if (temProduto(produto)) {
      removerProduto(produto);
      return;
    }

    setFavoritados([produto, ...favoritados]);
  }

  const temProduto = (produto: Produto) => {
    return favoritados.some(item => item.id === produto.id)
  }

  const removerProduto = (produto: Produto) => {
    const novaLista = favoritados.filter(item => item.id !== produto.id);
    setFavoritados(novaLista);
  }

  return {
    favoritados,
    produtos,
    isLoading,
    error,
    selecionarProduto,
    temProduto,
    adicionarProduto
  }
}

//
// Criação dos contextos / providers
//
const ProdutoContext = createContext<ProdutoContext | null>(null);

export const ProdutoProvider = (props: Props) => {
  const contexto = useStore();

  return (
    <ProdutoContext.Provider value={contexto}>
      {props.children}
    </ProdutoContext.Provider>
  )
}

//
// Consumo do contexto
//
export const useProdutoContext = () => {
  const contexto = useContext(ProdutoContext);

  if (!contexto) {
    throw new Error('Contexto deve ser cosumido dentro de um provider');
  }

  return contexto;
}

