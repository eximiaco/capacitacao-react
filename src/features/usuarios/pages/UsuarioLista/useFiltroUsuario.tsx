import { useState } from "react";
import { Usuario } from "@/features/usuarios/models/Usuario";

export const useFiltroUsuario = (usuarios: Usuario[]) => {
  const [filtro, setFiltro ] = useState('');

  const usuariosFiltrados = usuarios.filter(usuario => {
    return usuario.firstName.toLowerCase().includes(filtro.toLowerCase())
  });

  const aplicarFiltro = (filtro: string) => {
    setFiltro(filtro);
  }

  return {
    filtro,
    usuariosFiltrados,
    aplicarFiltro
  }
}