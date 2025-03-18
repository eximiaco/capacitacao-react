import { useNavigate } from "react-router"
import { Produto } from "@/features/ecommerce/models/Produto"

import { Button, Stack } from "@mui/material";

import * as S from './styles';
import { useProdutoStore } from "@/features/ecommerce/stores/produtos.store";

type Props = {
  produto: Produto
}
export const ProdutoCard = ({ produto }: Props) => {
  const isFavoritado = useProdutoStore(state => state.temFavoritado(produto));
  const favoritarProduto = useProdutoStore(state => state.favoritarProduto);

  const navigate = useNavigate();

  const handleDetalhe = () => {
    navigate(`/produtos/${produto.id}`);
  }

  return (
    <>
      <S.ProdutoCard>
        <S.ProdutoImg
          component="img"
          image={produto.thumbnail}
        />

        <Stack gap={1} padding={2} marginTop="auto">
          <h3>{produto.title}</h3>

          <S.ProdutoDescription>{produto.description.substring(0, 90)}...</S.ProdutoDescription>

          <Stack gap={1} marginTop="auto">
            <Button variant="outlined" onClick={handleDetalhe}>
              Detalhe
            </Button>

            {!isFavoritado && <Button onClick={() => favoritarProduto(produto)}>
              Favoritar
            </Button>}

            {isFavoritado && <Button color="error" onClick={() => favoritarProduto(produto)}>
              Remover
            </Button>}
          </Stack>
        </Stack>

      </S.ProdutoCard>

    </>
  )
}