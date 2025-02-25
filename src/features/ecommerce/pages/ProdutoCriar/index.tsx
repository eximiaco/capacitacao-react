import { Controller, useForm } from "react-hook-form";
import { Produto } from "@/features/ecommerce/models/Produto";
import { TotalFavoritos } from "@/features/ecommerce/components/TotalFavoritos";
import { useProdutoContext } from "@/features/ecommerce/stores/ProdutoContext";
import { useNavigate } from "react-router";
import './style.css';
import { toast } from "react-toastify";
import { TextField } from "@mui/material";

type ProdutoForm = Omit<Produto, 'id'>

export const ProdutoCriarPage = () => {
  const navigate = useNavigate();

  const { formState, register, handleSubmit, reset } = useForm<ProdutoForm>();
  const { adicionarProduto } = useProdutoContext();

  const onSubmit = async (produto: ProdutoForm) => {
    const novoProduto: Produto = {
      id: Date.now(),
      ...produto
    }

    try {
      await adicionarProduto(novoProduto);
      reset();
      navigate('/produtos');
      toast.success('Produto adicionado com sucesso');
    } catch(error) {
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
            <input type="text"  {...register('title', { required })} />
            <small className="field-error">{formState.errors.title?.message}</small>
          </div>

          <div className="field">
            <label>URL Image</label>
            <input type="text"  {...register('thumbnail', { required })} />
            <small className="field-error">{formState.errors.thumbnail?.message}</small>
          </div>

          <div className="field">
            <label>Preço</label>
            <input  type="text" {...register('price', { required })} /> 
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

