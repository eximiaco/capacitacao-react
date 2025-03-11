import { createTheme } from "@mui/material";
import { configButton } from "./components/button";
import { configInput } from "./components/input";

export const AppTheme =  createTheme({
  components: {
    ...configButton,
    ...configInput,
  }
});