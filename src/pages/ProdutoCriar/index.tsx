import { useForm } from "react-hook-form";
import { Produto } from "../../models/Produto";
import { TotalFavoritos } from "../../components/TotalFavoritos";
import { useProdutoContext } from "../../providers/ProdutoContext";

type ProdutoForm = Omit<Produto, 'id'>

export const ProdutoCriar = () => {
  const { register, handleSubmit, reset } = useForm<ProdutoForm>();
  const { adicionarProduto } = useProdutoContext();

  const onSubmit = (produto: ProdutoForm) => {
    const novoProduto = {
      id: Date.now(),
      ...produto
    }
   
    adicionarProduto(novoProduto);
    reset();
  }

  const required = true;

  return (
    <>
      <TotalFavoritos />

      <div className="content" style={{ marginTop: 28 }}>
        <h1>Criar produto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label>Título</label>
            <input type="text" {...register('title', {required})} />
          </div>

          <div className="field">
            <label>URL Image</label>
            <input type="text"  {...register('image', {required})} />
          </div>

          <div className="field">
            <label>Preço</label>
            <input type="text" {...register('price',{required} )} />
          </div>

          <div className="field">
            <label>Categoria</label>
            <input type="text" {...register('category', {required})} />
          </div>

          <div className="field">
            <label>Descrição</label>
            <textarea {...register('description')} rows={5} />
          </div>

          <div className="form-actions">
            <button type="submit">Criar produto</button>
            <button className="secondary">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  )
}
