import { createContext, useContext, useEffect, useState } from "react";
import { Dialog } from "@/shared/components/Dialog";
import { httpClient } from "@/core/http";

type LoadingContext = {
  loading: boolean,
  abrir: () => void;
  fechar: () => void;
}

const LoadingContext = createContext<LoadingContext|null>(null);

type Props = {
  children: React.ReactNode
} 
export const LoadingProvider = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const abrir = () => {
    setLoading(true);
  }

  const fechar = () => {
    setLoading(false);
  }

  return (
    <LoadingContext.Provider value={{loading, abrir, fechar}}>
      {props.children}

      <Dialog isOpen={loading}>
          <div style={{textAlign: 'center'}}>Carregando...</div>
      </Dialog>
    </LoadingContext.Provider>
  )
}

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);

  if(!context) {
    throw Error('Contexto deve ser consumido dentro de um Provider');
  }

  return context;
}