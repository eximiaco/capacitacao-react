import { ProdutoCard } from "./ProdutoCard";
import { useNavigate } from "react-router";

import { TotalFavoritos } from "@/features/ecommerce/components/TotalFavoritos";
// import { useProdutoContext } from "@/features/ecommerce/stores/ProdutoContext";
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";
import { Grid2 as Grid, Stack } from "@mui/material";
// import { useProdutoLista } from "./useProdutoLista";
import { useConsultarProdutos } from "../../api/produtos.api";

export const ProdutoListaPage = () => {
  // const { isLoading, produtos, error } = useProdutoContext();
  // const { isLoading, produtos } = useProdutoLista();

  const { data: produtos, isLoading } = useConsultarProdutos();

  useLoadingState(isLoading);
  const navigate = useNavigate();

  const handleCriarProduto = () => {
    navigate('/produtos/criar');
  }

  if(!produtos) {
    return null;
  }

  return (
    <Stack gap={3}>
      <Stack direction={["column", "column", "row"]} gap={2} marginBottom={5}>
        <h1>Listar produtos</h1>

        <Stack marginLeft="auto" alignItems={["center"]} direction="row" gap={2}>
          <TotalFavoritos />
          <button onClick={handleCriarProduto}>Criar produto</button>
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        {produtos.map(produto => {
          return (
            <Grid key={produto.id} size={[12, 6, 3]}>
              <ProdutoCard produto={produto} />
            </Grid>
          )
        })}
      </Grid>
    </Stack>

  )
}