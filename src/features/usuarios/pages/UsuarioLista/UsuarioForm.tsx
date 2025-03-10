import { useForm } from "react-hook-form";
import { Usuario } from "@/features/usuarios/models/Usuario";

type UsuarioForm = Omit<Usuario, 'id'>;

type Props = {
  onSubmit: (usuario: Usuario) => void,
  onCancel: () => void
}
export const UsuarioForm = (props: Props) => {
  const { register, handleSubmit, reset, formState } = useForm<UsuarioForm>();

  const onSubmit = (usuario: UsuarioForm) => {
    if (!props.onSubmit) return;

    const novoUsuario: Usuario = {
      id: Date.now(),
      ...usuario
    }

    props.onSubmit(novoUsuario);
    reset();
  }

  const onCancel = () => {
    if (!props.onCancel) return;
    props.onCancel();
    reset();
  }

  return (
    <>
      <h1 style={{marginBottom: '1rem'}}>Criar usuário</h1>
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