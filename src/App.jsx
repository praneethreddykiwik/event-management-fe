import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Home";
import GetInTouch from "./pages/GetInTouch/GetInTouch.pages";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="main-container">
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path ={"/Getintouch"} element={<GetInTouch />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
