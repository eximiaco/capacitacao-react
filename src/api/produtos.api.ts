import { Produto } from '../models/Produto';
import { httpClient } from '../http';

type ResponseProduto = {
  products: Produto[],
  total: number,
  skip: number,
  limit: number
}

export const criarProdutoApi = (produto: Produto) => {
  return httpClient.post('produtos/add', produto);
}

export const fetchProdutosApi = async () => {
  const select = 'id,title,price,description,category,thumbnail,images';
  const response = await httpClient.get<ResponseProduto>(
    'products', {params: {select}}
  );
  
  return response.data.products;
}

export const fetchProdutoApi = async (produtoId: number) => {
  const select = 'id,title,price,description,category,thumbnail,images';
  const response = await httpClient.get<ResponseProduto>(
    `products/${produtoId}`, {params: {select}}
  );
  
  return response.data.products
}