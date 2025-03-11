import { Controller } from "react-hook-form";
import { TotalFavoritos } from "@/features/ecommerce/components/TotalFavoritos";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Button, Card, Stack, TextField } from "@mui/material";
import { useProdutoCriar } from "./useProdutCriar";
import { useLoadingState } from "@/core/providers/LoadingContext/useLoadingState";
import { FormProduto } from "./form.schema";

export const ProdutoCriarPage = () => {
  const navigate = useNavigate();
  const { control, formState, loading, handleSubmit, onSubmit } = useProdutoCriar();

  useLoadingState(loading);

  const onSubmitHandler = async (produto: FormProduto) => {
    try {
      await onSubmit(produto);
      toast.success('Produto criado com sucesso2');
      navigate('/produtos');
    } catch (error) {
      toast.error('Erro ao criar produto');
    }
  }

  const onCancel = () => {
    navigate('/produtos');
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <h1>Criar produto</h1>
        <TotalFavoritos />
      </Stack>

      <Card sx={{padding: 4, marginTop: 2}}>
        <Stack>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="field">
              <label>Título</label>
              <Controller
                name="title"
                defaultValue=""
                control={control}
                render={({ field }) =>
                  <TextField
                    error={!!formState.errors.title}
                    helperText={formState.errors.title?.message}
                    {...field}
                  />}
              />
            </div>

            <div className="field">
              <label>URL imagem</label>
              <Controller
                name="thumbnail"
                defaultValue=""
                control={control}
                render={({ field }) =>
                  <TextField
                    error={!!formState.errors.thumbnail}
                    helperText={formState.errors.thumbnail?.message}
                    {...field}
                  />}
              />
            </div>

            <div className="field">
              <label>Preço</label>
              <Controller
                name="price"
                defaultValue=""
                control={control}
                render={({ field }) =>
                  <TextField
                    error={!!formState.errors.price}
                    helperText={formState.errors.price?.message}
                    {...field}
                  />}
              />
            </div>

            <div className="field">
              <label>Categoria</label>
              <Controller
                name="category"
                defaultValue=""
                control={control}
                render={({ field }) =>
                  <TextField
                    error={!!formState.errors.category}
                    helperText={formState.errors.category?.message}
                    {...field}
                  />}
              />
            </div>

            <div className="field">
              <label>Descrição</label>
              <Controller
                name="description"
                defaultValue=""
                control={control}
                render={({ field }) =>
                  <TextField
                    multiline
                    rows={5}
                    error={!!formState.errors.description}
                    helperText={formState.errors.description?.message}
                    {...field}
                  />}
              />
            </div>

            <Stack direction="row" justifyContent="space-between">
              <Button onClick={onCancel} variant="outlined">Cancelar</Button>
              <Button type="submit">Criar produto</Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </>
  )
}

