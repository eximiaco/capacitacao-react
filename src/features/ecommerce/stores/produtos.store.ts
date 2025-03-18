import { create } from "zustand";
import { Produto } from "../models/Produto";
import { consultarProdutosApi } from "../api/produtos.api";

type State = {
  produtos: Produto[],
  favoritados: Produto[],
  isLoading: boolean
}

type Actions = {
  favoritarProduto: (produto: Produto) => void,
  setProdutos: (produto: Produto[]) => void,
  temFavoritado: (produto: Produto) => boolean,
  removerFavoritado: (produto: Produto) => void,
  carregarProduto: () => void
}

export const useProdutoStore = create<State & Actions>((set, get) => ({
  produtos: [],
  favoritados: [],
  isLoading: false,


  temFavoritado: (produto: Produto) => {
    return get().favoritados.some(item => item.id === produto.id)
  },

  removerFavoritado: (produto: Produto) => {
    const novaLista = get().favoritados.filter(item => item.id !== produto.id);

    set({
      favoritados: novaLista
    })
  },

  setProdutos: (produtos: Produto[]) => {
    set({ produtos })
  },

  favoritarProduto: (produto: Produto) => {
    if (get().temFavoritado(produto)) {
      get().removerFavoritado(produto);
      return;
    }

    set(state => ({
      favoritados: [produto, ...state.favoritados]
    }))
  },

  carregarProduto: async () => {
      set({isLoading: true});
      const produtos = await consultarProdutosApi();
      set({produtos, isLoading: false})
  }
}));