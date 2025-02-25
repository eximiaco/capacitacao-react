import { useForm } from "react-hook-form";
import { Navigate } from "react-router";
import { useLogin } from "./useLogin";
import { toast } from "react-toastify";

type FormLogin = {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const { formState, register, handleSubmit, reset } = useForm<FormLogin>();
  const { isLoggedIn, autenticar } = useLogin();

  if(isLoggedIn) {
    return <Navigate to="/produtos" />
  }

  const required = "Campo obrigatório";

  const onSubmit = async (form: FormLogin) => {
    try {
      await autenticar(form.username, form.password);
    } catch(error) {
      toast.error('Usuário ou senha inválido');
      reset()
    }
  }

  return (
    <>
      <div className="login-page" style={{ width: '400px', margin: 'auto', paddingTop: '20%' }}>
        <h1 style={{ marginBottom: 18, textAlign: 'center' }}>Autenticação</h1>

        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label>Usuário</label>
              <input type="text" {...register('username', { required })} />
              <small className="field-error">{formState.errors.username?.message}</small>
            </div>

            <div className="field">
              <label>Senha</label>
              <input type="password"  {...register('password', { required })} />
              <small className="field-error">{formState.errors.password?.message}</small>
            </div>

            <div className="form-actions">
              <button type="submit" style={{ width: '100%' }}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}