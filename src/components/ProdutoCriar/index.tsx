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
      <h2>CRIAR PRODUTO</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Título</label>
          <input type="text" {...register('title')} />
        </div>

        <div className="field">
          <label>URL Image</label>
          <input type="text"  {...register('image')}/>
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
          <textarea {...register('description')}  rows={5} />
        </div>

        <button type="submit">Criar produto</button>
      </form>
    </div>
  )
}

// export const ProdutoCriar = () => {
//   const [formValues, setFormValues] = useState<Produto>(INITIAL_STATE);

//   // controlled
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log('Dados formulário =>', formValues);
//     setFormValues(INITIAL_STATE);
//   }

//   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
//     const { name, value } =  event.target;

//     setFormValues({...formValues, [name]: value});
//   }

//   return (
//     <div className="content">
//       <h2>CRIAR PRODUTO</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="field">
//           <label>Título</label>
//           <input value={formValues.title} onChange={handleOnChange} type="text" name="title" />
//         </div>

//         <div className="field">
//           <label>URL Image</label>
//           <input value={formValues.image} onChange={handleOnChange} type="text" name="image" />
//         </div>

//         <div className="field">
//           <label>Preço</label>
//           <input value={formValues.price} type="number" onChange={handleOnChange} name="price" />
//         </div>

//         <div className="field">
//           <label>Categoria</label>
//           <input value={formValues.category} type="text" onChange={handleOnChange} name="category" />
//         </div>

//         <div className="field">
//           <label>Descrição</label>
//           <textarea value={formValues.description} name="description" onChange={handleOnChange} rows={5} />
//         </div>

//         <button type="submit">Criar produto</button>
//       </form>
//     </div>
//   )
// }