import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from '@/pages/components/Navbar'


const theme = createTheme({
  palette: {
    primary: {
      main: "#407C86",
      contrastText: "#FFFFFF",
      color: "#FFFFFF",
    },
    secondary: {
      main: "#A5DBDD",
      contrastText: "#333333",
    },
    info: {
      main: "#F9F9F9",
      contrastText: "#333333",
      color: "#333333"
    }
  },
  typography: {
    fontFamily: `"Raleway"`,
    fontWeightRegular: 400,
    fontSize: 16,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <h1>Hi</h1>
    </ThemeProvider>
  )
}
