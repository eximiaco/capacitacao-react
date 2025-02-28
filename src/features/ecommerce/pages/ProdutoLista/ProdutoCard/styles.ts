import { Card, CardMedia, styled } from "@mui/material";

export const ProdutoCard = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    fontSize: 12
  }
});

export const ProdutoImg = styled(CardMedia)<{ component: string }>(
  () => {
  return {
    height: 140,
    objectFit: 'contain',
  }
})

export const ProdutoDescription =  styled('p')(() => {
  return {
    marginTop: 0,
    fontSize: 13
  }
})
