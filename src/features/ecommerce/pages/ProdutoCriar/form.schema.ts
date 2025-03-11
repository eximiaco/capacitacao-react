import { z } from "zod";

const zStringRequired = () => z.string().min(1, "⚠ Campo obrigatório");

export const FormProdutoShema = z.object({
  title: zStringRequired(),
  thumbnail: zStringRequired().url("⚠ Campo deve ser uma URL"),
  price: zStringRequired(),
  category: zStringRequired(),
  description: zStringRequired(),
});

export type FormProduto = z.infer<typeof FormProdutoShema>