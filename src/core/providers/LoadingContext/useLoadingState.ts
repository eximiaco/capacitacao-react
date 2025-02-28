import { useEffect } from "react";
import { useLoadingContext } from "./LoadingContext";

export const useLoadingState = (isLoading: boolean) => {
  const { abrir, fechar } = useLoadingContext();

  useEffect(() => {
    if(isLoading) {
      abrir();
    } else {
      fechar();
    }
  }, [isLoading]);
}