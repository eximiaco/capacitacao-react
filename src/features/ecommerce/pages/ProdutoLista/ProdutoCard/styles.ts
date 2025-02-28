import { Card, CardMedia, styled } from "@mui/material";

export const ProdutoCard = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    fontSize: 12
  }
});

export const ProdutoImg = styled(CardMedia)<{ component: string }>(
  ({theme}) => {
  return {
    height: 140,
    objectFit: 'contain',
  }
})

export const ProdutoDescription =  styled('p')(() => {
  return {
    fontSize: 13
  }
})
