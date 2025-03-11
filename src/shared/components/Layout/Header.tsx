import { useAuthContext } from "@/core/providers/AuthContext"
import { Box, Stack } from "@mui/material";
import * as S from './styles';

export const Header = () => {
  const { user, logout } = useAuthContext();

  const handleSair = () => {
    logout();
  }

  return (
    <S.Header>
      <Stack direction={['column', 'row']} gap={3}>
        <Stack direction="row" gap={2}>
          <h2 id="logo">APP TESTE</h2>
          <S.Link to="produtos">PRODUTOS</S.Link>
          <S.Link to="usuarios">USUÁRIOS</S.Link>
        </Stack>


        <Box marginLeft={'auto'}>
          <b style={{ fontSize: 14 }}>Olá, {user?.username}</b>
          <button onClick={handleSair} style={{ marginLeft: 12 }}>Sair</button>
        </Box>
      </Stack>
    </S.Header>
  )
}