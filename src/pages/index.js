import { createTheme, ThemeProvider } from "@mui/material/styles";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Navbar from '@/pages/components/Navbar'
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";


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
  },
});

export default function Home() {
  const { t } = useTranslation()

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contacts/>
    </ThemeProvider>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});