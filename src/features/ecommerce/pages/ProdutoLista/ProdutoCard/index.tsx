import { useNavigate } from "react-router"
import { Produto } from "@/features/ecommerce/models/Produto"
import { useProdutoContext } from "@/features/ecommerce/stores/ProdutoContext"

import { Button, Stack } from "@mui/material";

import * as S from './styles';

type Props = {
  produto: Produto
}
export const ProdutoCard = ({ produto }: Props) => {
  const { selecionarProduto, temProduto } = useProdutoContext();
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

            {!temProduto(produto) && <Button onClick={() => selecionarProduto(produto)}>
              Favoritar
            </Button>}

            {temProduto(produto) && <Button color="error" onClick={() => selecionarProduto(produto)}>
              Remover
            </Button>}
          </Stack>
        </Stack>

      </S.ProdutoCard>

    </>
  )
}