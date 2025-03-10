import { Controller, useForm } from "react-hook-form";
import { Produto } from "@/features/ecommerce/models/Produto";
import { TotalFavoritos } from "@/features/ecommerce/components/TotalFavoritos";
import { useProdutoContext } from "@/features/ecommerce/stores/ProdutoContext";
import { useNavigate } from "react-router";
import './style.css';
import { toast } from "react-toastify";
import { TextField } from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FormProduto, FormProdutoShema } from "./form.schema";

export const ProdutoCriarPage = () => {
  const navigate = useNavigate();

  const { formState, control, handleSubmit, reset } = useForm<FormProduto>({
    resolver: zodResolver(FormProdutoShema)
  });
  const { adicionarProduto } = useProdutoContext();

  const onSubmit = async (produto: FormProduto) => {
    const novoProduto: Produto = {
      id: Date.now(),
      ...produto
    }

    try {
      await adicionarProduto(novoProduto);
      reset();
      navigate('/produtos');
      toast.success('Produto adicionado com sucesso');
    } catch (error) {
      toast.error('Não foi possível adicionar o produto');
    }

  }

  const onCancel = () => {
    navigate('/produtos');
  }

  return (
    <>
      <div className="criar-produto-top">
        <h1>Criar produto</h1>
        <TotalFavoritos />
      </div>

      <div className="content" style={{ marginTop: 28 }}>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label>Título</label>
            <Controller
              name="title"
              defaultValue=""
              control={control}
              render={({ field }) =>
                <TextField
                  error={!!formState.errors.title}
                  helperText={formState.errors.title?.message}
                  {...field}
                />}
            />
          </div>

          <div className="field">
            <label>URL imagem</label>
            <Controller
              name="thumbnail"
              defaultValue=""
              control={control}
              render={({ field }) =>
                <TextField
                  error={!!formState.errors.thumbnail}
                  helperText={formState.errors.thumbnail?.message}
                  {...field}
                />}
            />
          </div>

          <div className="field">
            <label>Preço</label>
            <Controller
              name="price"
              defaultValue=""
              control={control}
              render={({ field }) =>
                <TextField
                  error={!!formState.errors.price}
                  helperText={formState.errors.price?.message}
                  {...field}
                />}
            />
          </div>

          <div className="field">
            <label>Categoria</label>
            <Controller
              name="category"
              defaultValue=""
              control={control}
              render={({ field }) =>
                <TextField
                  error={!!formState.errors.category}
                  helperText={formState.errors.category?.message}
                  {...field}
                />}
            />
          </div>

          <div className="field">
            <label>Descrição</label>
            <Controller
              name="description"
              defaultValue=""
              control={control}
              render={({ field }) =>
                <TextField
                  multiline
                  rows={5}
                  error={!!formState.errors.description}
                  helperText={formState.errors.description?.message}
                  {...field}
                />}
            />
          </div>

          <div className="form-actions">
            <button type="submit">Criar produto</button>
            <button onClick={onCancel} className="secondary">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  )
}

