import { useNavigate } from "react-router";
import { Pessoa } from "@/features/usuarios/models/Pessoa";
import { Box, Button, Card, Stack } from "@mui/material";

type Props = {
  pessoa: Pessoa,
  onRemove: () => void
}

// componente puro
export const PessoaCard = ({ pessoa, onRemove }: Props) => {
  const navigate = useNavigate();

  const handleRemover = () => {
    onRemove()
  }

  const handlePessoaDetalhe = () => {
    navigate(`/pessoas/${pessoa.id}`);
  }

  return (
    <>
      <Stack component={Card} gap={2} height="100%">
        <Stack padding={2} height="100%">
          <h3>{pessoa.firstName} {pessoa.lastName}</h3>

          <Stack gap={1} marginTop={1} marginBottom={2}>
            <Box fontSize={14}><b>Email:</b> {pessoa.email}</Box>
            <Box fontSize={14}><b>Telefone:</b> {pessoa.phone}</Box>
          </Stack>

          <Stack gap={1} marginTop='auto'>
            <Button onClick={handlePessoaDetalhe} variant="outlined">
              Detalhes
            </Button>

            <Button onClick={handleRemover} color="error">Remover</Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}