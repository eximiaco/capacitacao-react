import { Pessoa } from "@/features/usuarios/models/Pessoa";
import { PessoaCard } from "./PessoaCard";
import { usePessoaLista } from "./usePessoaLista";
import { ChangeEvent, useState } from "react";
import { useFiltroPessoa } from "./useFiltroPessoa";
import { PessoaForm } from "./PessoaForm";
import { Dialog } from "@/shared/components/Dialog";

import './style.css';
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";

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

      <div className="pessoa-content-top">
        <h1>Listar pessoas</h1>
        {!exibeForm && <button onClick={handleExibirFormulario} >Adicionar pessoa</button>}
      </div>

      <div className="divider" />

      <div className="filtro-pesquisa">
        <input value={filtro} onChange={handleFiltro} type="text" placeholder="Filtro pessoa..." />
      </div>

      {pessoasFiltradas.length > 0 && <>
        <h4>TOTAL: {total}</h4>
        <div className="pessoa-lista">
          {pessoasFiltradas.map((pessoa) => {
            return <PessoaCard
              key={pessoa.id}
              pessoa={pessoa}
              onRemove={() => handleRemoverPessoa(pessoa)}
            />
          })}
        </div>
      </>}

      {!pessoasFiltradas.length && <h4>Não há pessoas cadastradas para esse filtro</h4>}
    </div>
  )
}