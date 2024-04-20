import { Outlet } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
import { theme } from "theme";
import Header from "components/header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="content-wrapper">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
