import { useForm } from "react-hook-form";
import { Pessoa } from "../../models/Pessoa";

type PessoaForm = Omit<Pessoa, 'id'>;

type Props = {
  onSubmit: (pessoa: Pessoa) => void,
  onCancel: () => void
}
export const PessoaForm = (props: Props) => {
  const { register, handleSubmit, reset, formState } = useForm<PessoaForm>();

  const onSubmit = (pessoa: PessoaForm) => {
    if (!props.onSubmit) return;

    const novaPessoa: Pessoa = {
      id: Date.now(),
      ...pessoa
    }

    props.onSubmit(novaPessoa);
    reset();
  }

  const onCancel = () => {
    if (!props.onCancel) return;
    props.onCancel();
    reset();
  }

  return (
    <>
      <h1>Criar pessoa</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Nome</label>
          <input type="text" {...register('nome', { required: 'Nome é obrigatório' })} />
          <small className="field-error">{formState.errors.nome?.message}</small>
        </div>

        <div className="field">
          <label>Cidade</label>
          <input type="text"  {...register('cidade', { required: 'Cidade é obrigatório' })} />
          <small className="field-error">{formState.errors.cidade?.message}</small>
        </div>

        <div className="form-actions">
          <button>Criar</button>
          <button onClick={onCancel} className="secondary">Cancelar</button>
        </div>
      </form>
    </>
  )
}