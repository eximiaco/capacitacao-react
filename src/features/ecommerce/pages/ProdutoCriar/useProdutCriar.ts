import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormProduto, FormProdutoShema } from "./form.schema";
import { useProdutoContext } from "../../stores/ProdutoContext";
import { useState } from "react";
import { Produto } from "../../models/Produto";

export const useProdutoCriar = () => {
  const [loading, setLoading] = useState(false);

  const { formState, control, handleSubmit, reset } = useForm<FormProduto>({
    resolver: zodResolver(FormProdutoShema)
  });

  const { adicionarProduto } = useProdutoContext();

  const onSubmit = async (produto: FormProduto) => {
    setLoading(true);

    const novoProduto: Produto = {
      id: Date.now(),
      ...produto
    }
  
    try {
      await adicionarProduto(novoProduto);

      console.log('SIM');
      reset();
    } catch(error) {
      console.error('Erro ao adicionar produto', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    onSubmit,
    handleSubmit,
    loading,
    formState, 
    control
  }
}