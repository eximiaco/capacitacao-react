import { useForm } from "react-hook-form";
import { Produto } from "../../models/Produto";


export const ProdutoCriar = () => {
  const { register, handleSubmit, reset } = useForm<Produto>();

  const onSubmit = (values: Produto) => {
    console.log('DADOS FORMULARIO', values);
    reset();
  }
 
  return (
    <div className="content">
      <h1>Criar produto</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Título</label>
          <input type="text" {...register('title')} />
        </div>

        <div className="field">
          <label>URL Image</label>
          <input type="text"  {...register('image')} />
        </div>

        <div className="field">
          <label>Preço</label>
          <input type="text" {...register('price')} />
        </div>

        <div className="field">
          <label>Categoria</label>
          <input type="text" {...register('category')} />
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
  )
}
