import { Pessoa } from "@/features/usuarios/models/Pessoa";
import { PessoaCard } from "./PessoaCard";
import { usePessoaLista } from "./usePessoaLista";
import { ChangeEvent, useState } from "react";
import { useFiltroPessoa } from "./useFiltroPessoa";
import { PessoaForm } from "./PessoaForm";
import { Dialog } from "@/shared/components/Dialog";

// import './style.css';
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";
import { Button, Divider, Grid2 as Grid, Stack } from "@mui/material";

export const PessoaListaPage = () => {
  const { pessoas, isLoading, total, adicionarPessoa, removerPessoa } = usePessoaLista();
  const { filtro, pessoasFiltradas, aplicarFiltro } = useFiltroPessoa(pessoas);
  const [exibeForm, setExibeForm] = useState(false);

  useLoadingState(isLoading);

  // comportamento / métodos
  const handleAdicionarPessoa = (pessoa: Pessoa) => {
    adicionarPessoa(pessoa);
    setExibeForm(false);
  }

  const handleRemoverPessoa = (pessoa: Pessoa) => {
    removerPessoa(pessoa);
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
        <PessoaForm onSubmit={handleAdicionarPessoa} onCancel={handleExibirFormulario} />
      </Dialog>

      <Stack direction="row" alignItems="center">
        <h1>Listar pessoas</h1>

        {!exibeForm &&
          <Button
            onClick={handleExibirFormulario}
            sx={{ marginLeft: 'auto' }}>
            Adicionar pessoa
          </Button>
        }
      </Stack>

      <Stack marginTop={3} marginBottom={3}>
        <input value={filtro} onChange={handleFiltro} type="text" placeholder="Filtro pessoa..." />
      </Stack>

      {pessoasFiltradas.length > 0 && <>
        <h4>TOTAL: {total}</h4>
        <Grid spacing={2} marginTop={3} container>
          {pessoasFiltradas.map((pessoa) => {
            return <Grid key={pessoa.id} size={[12, 6, 3]}><PessoaCard

              pessoa={pessoa}
              onRemove={() => handleRemoverPessoa(pessoa)}
            /></Grid>
          })}
        </Grid>
      </>}

      {!pessoasFiltradas.length && <h4>Não há pessoas cadastradas para esse filtro</h4>}
    </div>
  )
}