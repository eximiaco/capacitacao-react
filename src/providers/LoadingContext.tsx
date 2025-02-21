import { createContext, useContext, useEffect, useState } from "react";
import { Dialog } from "@/components/Dialog";
import { httpClient } from "@/http";

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
  const [isReady, setIsReady ] = useState(false);

  useEffect(() => { 
    const request = httpClient.interceptors.request.use((request) => {
      setLoading(true);
      return request;
    }, (error) => {
      setLoading(false);
      throw error;
    })
  
    const response = httpClient.interceptors.response.use((response) => {
      setLoading(false);
      return response;
    }, (error) => {
      setLoading(false);
      throw error;
    });

    setIsReady(true);

    // ciclo / destruição
    return () => {
      httpClient.interceptors.request.eject(request);
      httpClient.interceptors.response.eject(response);
    }
  }, [])

  const abrir = () => {
    setLoading(true);
  }

  const fechar = () => {
    setLoading(false);
  }

  return (
    <LoadingContext.Provider value={{loading, abrir, fechar}}>
      {isReady && props.children}

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