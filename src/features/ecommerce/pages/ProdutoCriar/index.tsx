import { Controller, useForm } from "react-hook-form";
import { Produto } from "@/features/ecommerce/models/Produto";
import { TotalFavoritos } from "@/features/ecommerce/components/TotalFavoritos";
import { useProdutoContext } from "@/features/ecommerce/stores/ProdutoContext";
import { useNavigate } from "react-router";
import './style.css';
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const FormSchema = z.object({
  title: z.string().min(1, "⚠ Campo obrigatório"),
  thumbnail: z.string().url(),
  price: z.string().min(1),
  category: z.string().min(1),
  description: z.string().min(1),
});

type FormSchema = z.infer<typeof FormSchema>

export const ProdutoCriarPage = () => {
  const navigate = useNavigate();

  const { formState, control, register, handleSubmit, reset } = useForm<FormSchema>({
    resolver: zodResolver(FormSchema)
  });
  const { adicionarProduto } = useProdutoContext();

  const onSubmit = async (produto: FormSchema) => {
    const novoProduto: Produto = {
      id: Date.now(),
      ...produto
    }

    console.log('prodito', produto);

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

  const required = '⚠ Campo obrigatório';

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
            <label>URL Image</label>
            <input type="text"  {...register('thumbnail', { required })} />
            <small className="field-error">{formState.errors.thumbnail?.message}</small>
          </div>

          <div className="field">
            <label>Preço</label>
            <input type="text" {...register('price', { required })} />
            <small className="field-error">{formState.errors.price?.message}</small>
          </div>

          <div className="field">
            <label>Categoria</label>
            <input type="text" {...register('category', { required })} />
            <small className="field-error">{formState.errors.category?.message}</small>
          </div>

          <div className="field">
            <label>Descrição</label>
            <textarea {...register('description')} rows={5} />
            <small className="field-error">{formState.errors.description?.message}</small>
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

