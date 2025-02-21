import { useState } from "react";
import { Pessoa } from "@/models/Pessoa";

export const useFiltroPessoa = (pessoas: Pessoa[]) => {
  const [filtro, setFiltro ] = useState('');

  const pessoasFiltradas = pessoas.filter(pessoa => {
    return pessoa.firstName.toLowerCase().includes(filtro.toLowerCase())
  });

  const aplicarFiltro = (filtro: string) => {
    setFiltro(filtro);
  }

  return {
    filtro,
    pessoasFiltradas,
    aplicarFiltro
  }
}