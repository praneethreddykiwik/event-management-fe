import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Home";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import { paths } from "./constants/paths";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="main-container">
        <Header />

        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.accountSettings} element={<AccountSettings />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
