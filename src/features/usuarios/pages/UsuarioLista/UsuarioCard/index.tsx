import { useNavigate } from "react-router";
import { Usuario } from "@/features/usuarios/models/Usuario";
import { Box, Button, Card, Stack } from "@mui/material";

type Props = {
  usuario: Usuario,
  onRemove: () => void
}

// componente puro
export const UsuarioCard = ({ usuario, onRemove }: Props) => {
  const navigate = useNavigate();

  const handleRemover = () => {
    onRemove()
  }

  const handleUsuarioDetalhe = () => {
    navigate(`/usuarios/${usuario.id}`);
  }

  return (
    <>
      <Stack component={Card} gap={2} height="100%">
        <Stack padding={2} height="100%">
          <h3>{usuario.firstName} {usuario.lastName}</h3>

          <Stack gap={1} marginTop={1} marginBottom={2}>
            <Box fontSize={14}><b>Email:</b> {usuario.email}</Box>
            <Box fontSize={14}><b>Telefone:</b> {usuario.phone}</Box>
          </Stack>

          <Stack gap={1} marginTop='auto'>
            <Button onClick={handleUsuarioDetalhe} variant="outlined">
              Detalhes
            </Button>

            <Button onClick={handleRemover} color="error">Remover</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}