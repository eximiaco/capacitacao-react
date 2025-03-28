import { Produto } from '@/features/ecommerce/models/Produto';
import { httpClient } from '@/core/http';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type ResponseProdutos = {
  products: Produto[],
  total: number,
  skip: number,
  limit: number
}

export const criarProdutoApi = async (produto: Produto) => {
  return await httpClient.post(
    'products/add', produto
  );
}

export const consultarProdutosApi = async () => {
  const select = 'id,title,price,description,category,thumbnail,images';
  const response = await httpClient.get<ResponseProdutos>(
    'products', {params: {select}}
  );
  
  return response.data.products;
}

export const useConsultarProdutos = () => {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: consultarProdutosApi,
  });
}

export const consultarProdutoApi = async (produtoId: string) => {
  return await httpClient.get<Produto>(`products/${produtoId}`).then(
    res => res.data
  );
}