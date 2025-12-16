import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Home";
import PaymentSuccess from "./pages/Payment_Success/PaymentSuccess";
import Navbar from "./pages/Navbar/Navbar";
import AccountSettingsPage from "./pages/AccountSettings/AccountSettings";
import Controlpage from "./pages/Controlpage/Controlpage"

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <Stdiv className="main-container"> */}
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/paymentSuccess"} element= {<PaymentSuccess/>} />
          <Route path={"/navbar"} element= {<Navbar />} />
          <Route path={"/accountSetting"} element= {<AccountSettingsPage />} />
          <Route path={"/controlpage"} element= {<Controlpage/>} />
        </Routes>

      {/* </Stdiv> */}
    </ThemeProvider>
  );
}

export default App;
