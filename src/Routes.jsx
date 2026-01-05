import { Route, Routes } from "react-router-dom";
import GatewayPage from "./pages/GatewayPage/GatewayPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import GetInTouch from "./pages/GetInTouch/GetInTouch.pages";
import PaymentSuccess from "./pages/Payment_Success/PaymentSuccess";
import AccountSettingsPage from "./pages/AccountSettings/AccountSettings";
import Controlpage from "./pages/Controlpage/Controlpage";
import Profile from "./pages/Profile/Profile.jsx";
import NewEvent from "./pages/NewEvent/NewEvent";
import { paths } from "./constants/paths";
import Home from "./pages/Home/Home";
import Subscriptions from "./pages/Subscriptions/Subscriptions";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import SamplePage from "./pages/SamplePages/Sample.page.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import StakeholderDashboard from "./pages/StakeholderDashboard/StakeholderDashboard.jsx";
import EventManagerDashboard from "./pages/EventManagerDashboard/EventManagerDashboard.jsx";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { authSelector } from "./redux/auth/auth.slice.js";
import Event from "./pages/Event/EventDetails.page.jsx";

const AppRoutes = () => {
  const { authStatus } = useSelector(authSelector);

  const unAuthenticatedRoutes = (
    <>
      <Route path={"/"} element={<Home />} />
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.registration} element={<RegistrationPage />} />
      <Route path="*" element={<Login />} />
    </>
  );

  const authenticatedRoutes = (
    <>
      <Route path={"/"} element={<Home />} />
      <Route path={paths.registration} element={<RegistrationPage />} />
      {/* //  */}
      <Route path={paths.adminDashboard} element={<AdminDashboard />} />
      <Route path={"/Gateway"} element={<GatewayPage />} />
      <Route path={"/Getintouch"} element={<GetInTouch />} />
      <Route path={"/paymentSuccess"} element={<PaymentSuccess />} />
      <Route path={"/accountSetting"} element={<AccountSettingsPage />} />
      <Route path={"/controlpage"} element={<Controlpage />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={paths.newsFeed} element={<NewEvent />} />
      <Route path={"/samplePage"} element={<SamplePage />} />
      <Route path={"/Subscriptions"} element={<Subscriptions />} />
      <Route path={"/PlayerCard"} element={<PlayerCard />} />
      <Route path={paths.accountSettings} element={<AccountSettings />} />
      <Route path={paths.events} element={<Event />} />

      {/*  */}
      <Route path={"/vendor"} element={<StakeholderDashboard />} />

      {/*  */}
      <Route path={paths.eventManager} element={<EventManagerDashboard />} />
      <Route path="*" element={<Home />} />
    </>
  );

  const isLoggedIn = authStatus === "authenticated";

  return (
    <Routes>{isLoggedIn ? authenticatedRoutes : unAuthenticatedRoutes}</Routes>
  );
};

export default AppRoutes;
