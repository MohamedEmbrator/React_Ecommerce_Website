import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState } from "react";
import { getDesignTokens } from "./theme.jsx";
import { Outlet } from "react-router-dom";
import Header1 from "./components/header/Header1.jsx";
import Header2 from "./components/header/Header2.jsx";
import Header3 from "./components/header/Header3.jsx";
import Hero from "./components/hero/Hero.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollButton from "./components/scroll/scrollButton.jsx";

export default function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") !== null
      ? localStorage.getItem("mode")
      : "light"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header1 setMode={setMode} />
        <Header2 />
        <Header3 />
        <Box bgcolor={theme.palette.
// @ts-ignore
        bg.main}>
          <Hero />
          <Main />
        </Box>
      </Box>
      <Footer />
      <ScrollButton />
    </ThemeProvider>
  );
}
