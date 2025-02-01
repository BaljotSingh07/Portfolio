import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "Funnel Sans, serif"
  },
  palette: {
    mode: "dark",
    primary: {
      main: 'rgb(104, 150, 147)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "rgb(15, 15, 15)"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(4, 7, 7)"

        }
      }
    }
  }
});

export default theme;
