import { Produto } from '../models/Produto';
import { httpClient } from '../http';

type ResponseProduto = {
  products: Produto[],
  total: number,
  skip: number,
  limit: number
}

export const fetchProdutos = async () => {
  const response = await httpClient.get<ResponseProduto>('products?select=id,title,price,description,category,thumbnail,images');
  return response.data.products;
}

export const fetchProduto = async (produtoId: number) => {
  const response = await httpClient.get<ResponseProduto>(
    `products/${produtoId}?select=id,title,price,description,category,thumbnail,images`,
  );
  return response.data.products
}