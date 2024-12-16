import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log("success");
    setDarkMode((prevMode) => !prevMode);
    console.log(darkMode);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
