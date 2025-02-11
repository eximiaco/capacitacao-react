import { Produto } from '../models/Produto';
import PRODUTOS_MOCK from './mock/fetch_produtos';

export const fetchProdutos = async (): Promise<Produto[]> => {
  await new Promise(resolve => setTimeout(() => {
    resolve(true);
  }, 1000));

  return PRODUTOS_MOCK;
}