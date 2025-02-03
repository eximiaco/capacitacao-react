import { Pessoa } from "../../models/Pessoa";
import { PessoaCard } from "./PessoaCard";
import { usePessoaLista } from "./usePessoaLista";
import './style.css';
import { ChangeEvent } from "react";
import { useFiltroPessoa } from "./useFiltroPessoa";

export const PessoaLista = () => {
  const { pessoas, total, isLoading, adicionarPessoa, removerPessoa } = usePessoaLista();
  const { filtro, pessoasFiltradas, aplicarFiltro } = useFiltroPessoa(pessoas);

  // comportamento / métodos
  const handleAdicionarPessoa = () => {
    adicionarPessoa();
  }

  const handleRemoverPessoa = (pessoa: Pessoa) => {
    removerPessoa(pessoa);
  }

  const handleFiltro = (event: ChangeEvent<HTMLInputElement>) => {
    aplicarFiltro(event.target.value);
  }

  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  return (
    <div>
      <h2>LISTAR PESSOAS</h2>
      <button onClick={handleAdicionarPessoa} >Adicionar pessoa</button>

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