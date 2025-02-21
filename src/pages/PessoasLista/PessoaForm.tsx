import { useForm } from "react-hook-form";
import { Pessoa } from "@/models/Pessoa";

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
      <h1 style={{marginBottom: '1rem'}}>Criar pessoa</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Nome</label>
          <input type="text" {...register('firstName', { required: 'Nome é obrigatório' })} />
          <small className="field-error">{formState.errors.firstName?.message}</small>
        </div>

        <div className="field">
          <label>Sobrenome</label>
          <input type="text" {...register('lastName', { required: 'Sobrenome é obrigatório' })} />
          <small className="field-error">{formState.errors.lastName?.message}</small>
        </div>

        <div className="field">
          <label>Email</label>
          <input type="text"  {...register('email', { required: 'Telefone é obrigatório' })} />
          <small className="field-error">{formState.errors.email?.message}</small>
        </div>

        <div className="field">
          <label>Telefone</label>
          <input type="text"  {...register('phone', { required: 'Cidade é obrigatório' })} />
          <small className="field-error">{formState.errors.phone?.message}</small>
        </div>

        <div className="form-actions">
          <button>Criar</button>
          <button onClick={onCancel} className="secondary">Cancelar</button>
        </div>
      </form>
    </>
  )
}