import "./App.css";
//import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Home";
import GatewayPage from "./pages/GatewayPage/GatewayPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import GetInTouch from "./pages/GetInTouch/GetInTouch.pages";
import PaymentSuccess from "./pages/Payment_Success/PaymentSuccess";
import AccountSettingsPage from "./pages/AccountSettings/AccountSettings";
import Controlpage from "./pages/Controlpage/Controlpage";
import Profile from "./pages/Profile/Profile.jsx";
import DropdownComponent from "./components/Avatar/AvatarComponent.jsx";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import { paths } from "./constants/paths";
// import LandingPage from "./pages/LandingPage/LandingPage";
import NewEvent from "./pages/NewEvent/NewEvent";

import SampleInput from "./pages/sample/SampleInput";
import ExInput from "./pages/sample/ExInput";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <Stdiv className="main-container"> */}
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<RegistrationPage />} />
        <Route path={"/Gateway"} element={<GatewayPage />} />
        <Route path={"/Registration"} element={<RegistrationPage />} />
        <Route path={"/Gateway"} element={<GatewayPage />} />
        <Route path={"/Getintouch"} element={<GetInTouch />} />
        <Route path={"/paymentSuccess"} element={<PaymentSuccess />} />
        <Route path={"/accountSetting"} element={<AccountSettingsPage />} />
        <Route path={"/controlpage"} element={<Controlpage />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/dropdown"} element={<DropdownComponent />} />
        <Route path={paths.newsFeed} element={<NewEvent />} />
        <Route path={"/sampleinput"} element={<SampleInput />} />
        <Route path="/exinput" element={<ExInput />} />
        <Route path={paths.accountSettings} element={<AccountSettings />} />
      </Routes>

      {/* </Stdiv> */}
    </ThemeProvider>
  );
}

export default App;
