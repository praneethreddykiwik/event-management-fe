/** @format */

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import GatewayPage from "./pages/GatewayPage/GatewayPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import GetInTouch from "./pages/GetInTouch/GetInTouch.pages";
import PaymentSuccess from "./pages/Payment_Success/PaymentSuccess";
// import Navbar from "./pages/Navbar/Navbar";
import AccountSettingsPage from "./pages/AccountSettings/AccountSettings";
import Controlpage from "./pages/Controlpage/Controlpage";
import Profile from "./pages/Profile/Profile.jsx";
import DropdownComponent from "./components/Avatar/AvatarComponent.jsx";
// import LandingPage from "./pages/LandingPage/LandingPage";
import NewEvent from "./pages/NewEvent/NewEvent";
import { paths } from "./constants/paths";
import Home from "./pages/Home/Home";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import ExInput from "./pages/sample/ExInput";
import ExButton from "./pages/sample/ExButton";
import SamplePage from "./pages/SamplePages/Sample.page.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import StakeholderDashboard from "./pages/StakeholderDashboard/StakeholderDashboard.jsx";
import EventManagerDashboard from "./pages/EventManagerDashboard/EventManagerDashboard.jsx";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <Stdiv className="main-container"> */}
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/admin"} element={<AdminDashboard />} />
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
        <Route path={'/samplePage'} element={<SamplePage />} />
        <Route path={'/Subscriptions'} element={<Subscriptions />} />
        <Route path={'/PlayerCard'} element={<PlayerCard />} />
        <Route path={paths.accountSettings} element={<AccountSettings />} />
        <Route path={"/stake-holder"} element={<StakeholderDashboard />}/>
        <Route path="/event-manager" element={<EventManagerDashboard />} />
      </Routes>

      {/* </Stdiv> */}
    </ThemeProvider>
  );
}

export default App;
