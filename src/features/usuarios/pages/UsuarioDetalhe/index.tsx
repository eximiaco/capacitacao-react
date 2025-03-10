import { useUsuarioDetalhe } from "./useUsuarioDetalhe";

import { useNavigate } from "react-router";
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";
import { Card, Stack } from "@mui/material";

export const UsuarioDetalhePage = () => {
  const { usuario, loading } = useUsuarioDetalhe();
  const navigate = useNavigate();

  useLoadingState(loading)

  const handleVoltar = () => {
    navigate('/usuarios');
  }

  if (!usuario) {
    return null;
  }

  return (
    <Stack gap={4}>
      <h1>Detalhe usuário</h1>
      <Card sx={{ padding: 4 }} >
        <Stack direction="row" alignItems="start" gap={3}>
          <img src={usuario.image} width="60px" />

          <Stack gap={2}>
            <h2>{usuario.firstName} {usuario.lastName}</h2>

            <Stack>
              <h4>Empresa</h4>
              <div>{usuario.company.title}</div>
              <div>{usuario.company.department}</div>
            </Stack>

            <Stack>
              <h4>Contato</h4>
              <div>{usuario.email}</div>
              <div>{usuario.phone}</div>
            </Stack>

            <Stack>
              <h4>Endereço</h4>
              <div>{usuario.address.country}</div>
              <div>{usuario.address.state}</div>
              <div>{usuario.address.city}</div>
            </Stack>

            <br />
            <button onClick={handleVoltar} className="secondary">Voltar</button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}