import { Button, Card, Dialog, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const FiltroProduto = () => {
  const [filtro, setFiltro] = useState('');

  return (
    <Dialog open={true}>
      <Card sx={{ width: '400px', padding: 4 }}>
        <Stack direction="row">
          <TextField defaultValue={filtro} onChange={e => setFiltro(e.target.value)} />
          <Button>Filtrar</Button>
        </Stack>
      </Card>
    </Dialog>
  )
}