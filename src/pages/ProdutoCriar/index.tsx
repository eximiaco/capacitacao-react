import { useForm } from "react-hook-form";
import { Produto } from "../../models/Produto";
import { TotalFavoritos } from "../../components/TotalFavoritos";
import { useProdutoContext } from "../../providers/ProdutoContext";
import { useNavigate } from "react-router";
import './style.css';

type ProdutoForm = Omit<Produto, 'id'>

export const ProdutoCriarPage = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm<ProdutoForm>();
  const { adicionarProduto } = useProdutoContext();

  const onSubmit = (produto: ProdutoForm) => {
    const novoProduto: Produto = {
      id: Date.now(),
      ...produto
    }

    adicionarProduto(novoProduto);
    reset();
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
            <input type="text" {...register('title', { required })} />
            <small className="field-error">{formState.errors.title?.message}</small>
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
