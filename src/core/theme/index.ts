import { createTheme } from "@mui/material";
import { configButton } from "./components/button";

export const AppTheme =  createTheme({
  components: {
    ...configButton,
    MuiTextField: {
      defaultProps: {
        size: 'small'
      }
    }
  }
});