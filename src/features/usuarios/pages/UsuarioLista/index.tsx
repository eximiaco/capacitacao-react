import { Usuario } from "@/features/usuarios/models/Usuario";
import { UsuarioCard } from "./UsuarioCard";
import { useUsuarioLista } from "./useUsuarioLista";
import { ChangeEvent, lazy, Suspense, useState } from "react";
import { useFiltroUsuario } from "./useFiltroUsuario";

import { Dialog } from "@/shared/components/Dialog";

const UsuarioForm = lazy(() => import("./UsuarioForm").then(
  m => ({ default: m.UsuarioForm }))
)

import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";
import { Button, Grid2 as Grid, Stack } from "@mui/material";

export const UsuarioListaPage = () => {
  const { usuarios, isLoading, total, adicionarUsuario, removerUsuario } = useUsuarioLista();
  const { filtro, usuariosFiltrados, aplicarFiltro } = useFiltroUsuario(usuarios);
  const [exibeForm, setExibeForm] = useState(false);

  useLoadingState(isLoading);
  // comportamento / métodos
  const handleAdicionarUsuario = (usuario: Usuario) => {
    adicionarUsuario(usuario);
    setExibeForm(false);
  }

  const handleRemoverUsuario = (usuario: Usuario) => {
    removerUsuario(usuario);
  }

  const handleFiltro = (event: ChangeEvent<HTMLInputElement>) => {
    aplicarFiltro(event.target.value);
  }

  const handleExibirFormulario = () => {
    setExibeForm(!exibeForm);
  }

  return (
    <div>
      <Dialog isOpen={exibeForm}>
        <Suspense fallback="Carregando formulário...">
          <UsuarioForm onSubmit={handleAdicionarUsuario} onCancel={handleExibirFormulario} />
        </Suspense>
      </Dialog>

      <Stack direction="row" alignItems="center">
        <h1>Listar usuários</h1>

        {!exibeForm &&
          <Button
            onClick={handleExibirFormulario}
            sx={{ marginLeft: 'auto' }}>
            Adicionar usuário
          </Button>
        }
      </Stack>

      <Stack marginTop={3} marginBottom={3}>
        <input value={filtro} onChange={handleFiltro} type="text" placeholder="Filtro usuário..." />
      </Stack>

      {usuariosFiltrados.length > 0 && <>
        <h4>TOTAL: {total}</h4>
        <Grid spacing={2} marginTop={3} container>
          {usuariosFiltrados.map((usuario) => {
            return <Grid key={usuario.id} size={[12, 6, 3]}><UsuarioCard

              usuario={usuario}
              onRemove={() => handleRemoverUsuario(usuario)}
            /></Grid>
          })}
        </Grid>
      </>}

      {!usuariosFiltrados.length && <h4>Não há usuarios cadastradas para esse filtro</h4>}
    </div>
  )
}