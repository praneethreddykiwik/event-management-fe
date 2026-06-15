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
import SamplePage from "./pages/sample/Sample.page.jsx";
import StakeholderDashboard from "./pages/StakeholderDashboard/StakeholderDashboard.jsx";
import Tasks from "./pages/Tasks/Tasks.page.jsx";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { authSelector } from "./redux/auth/auth.slice.js";
import Event from "./pages/Events/EventDetails/EventDetails.page.jsx";
import EventsDashboard from "./pages/Events/EventsDashboard/EventsDashboard.page.jsx";
import { MarketPlace } from "./pages/MarketPlace/MarketPlace.jsx";
import UserManagement from "./pages/UserManagement/UserManagement.jsx";
import CustomerDashboard from "./pages/Customers/CustomerDashboard.jsx";
import { RBACRoute } from "./RBAC/RBACRoute.jsx";
import TwoFactorAuthPage from "./pages/TwoFactorAuth/TwoFactorAuthPage.jsx";
import Venues from "./pages/Venues/Venues.page.jsx";
import CreateEdiEvent from "./pages/Events/CreateEvent/CreateEdiEvent.page.jsx";
import QAPage from "./pages/QA/QA.page.jsx";
import AboutUs from "./pages/AboutUs/AboutPage.jsx";
import { TaskDetails } from "./pages/Tasks/TaskDetails/TaskDetails.page.jsx";
import WhyChoose from "./pages/WhyChooseHelm/WhyChooseHelmPage.jsx";
import OurServices from "./pages/OurServicesProducts/OurServicePage.jsx";
import FAQ from "./pages/FAQ/FAQPage.jsx";
import { CreateAndEditTask } from "./pages/Tasks/CreateAndEditTask.page.jsx";

const AppRoutes = () => {
  const { authStatus } = useSelector(authSelector);

  const unAuthenticatedRoutes = (
    <>
      <Route path={paths.home} element={<Home />} />

      <Route path={paths.login} element={<Login />} />
      <Route path={paths.registration} element={<RegistrationPage />} />

      <Route path={paths.getInTouch} element={<GetInTouch />} />
      <Route path={paths.marketPlace} element={<MarketPlace />} />
      <Route path={paths.aboutUs} element={<AboutUs />} />
      <Route path={paths.whyChoose} element={<WhyChoose />} />
      <Route path={paths.ourServices} element={<OurServices />} />
      <Route path="/faq" element={<FAQ />} />

      <Route path="*" element={<Home />} />
    </>
  );

  const authenticatedRoutes = (
    <>
      {/* base */}
      <Route path={paths.home} element={<Home />} />

      <Route path={paths.registration} element={<RegistrationPage />} />
      <Route path="/Gateway" element={<GatewayPage />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
      <Route path="/paymentSuccess" element={<PaymentSuccess />} />
      <Route path="/controlpage" element={<Controlpage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/samplePage" element={<SamplePage />} />
      <Route path="/Subscriptions" element={<Subscriptions />} />
      <Route path="/player-card" element={<PlayerCard />} />
      <Route path={paths.marketPlace} element={<MarketPlace />} />
      <Route path={"/TwoFactorAuth"} element={<TwoFactorAuthPage />} />
      <Route path={paths.accountSettings} element={<AccountSettingsPage />} />
      <Route path={paths.accountSettings} element={<AccountSettings />} />
      <Route path={paths.newsFeed} element={<NewEvent />} />
      <Route path={paths.aboutUs} element={<AboutUs />} />
      <Route path={paths.whyChoose} element={<WhyChoose />} />
      <Route path={paths.ourServices} element={<OurServices />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Admin */}
      <Route
        path={paths.eventsDashboard}
        element={
          <RBACRoute perm="admin:panel">
            <EventsDashboard />
          </RBACRoute>
        }
      />

      {/* Events */}
      <Route path={paths.eventsDetails} element={<Event />} />
      <Route path={paths.createEvent} element={<CreateEdiEvent />} />
      <Route path={paths.editEvent} element={<CreateEdiEvent />} />

      {/* Tasks */}
      {/* <Route path="/tasks" element={<TasksLayout />}>
        <Route index element={<Tasks />} />
        <Route path="create" element={<CreateTask />} />
        <Route path=":taskUid" element={<TaskDetails />} />
        <Route path=":taskUid/edit" element={<CreateTask />} />
      </Route> */}
      <Route path={paths.tasks} element={<Tasks />} />
      <Route path={`${paths.tasks}/:taskUid`} element={<TaskDetails />} />
      <Route path={paths.createTask} element={<CreateAndEditTask />} />

      {/* Customer */}
      {/* <Route path={paths.customer} element={<CustomerDashboard />} /> */}

      {/* Vendor */}
      <Route path={paths.vendor} element={<Tasks />} />
      <Route path={paths.supervisor} element={<Tasks />} />

      {/* QA */}
      <Route path={paths.qa} element={<QAPage />} />

      <Route path={paths.venues} element={<Venues />} />
      <Route path={paths.aboutUs} element={<AboutUs />} />

      <Route
        path={paths.userManagement}
        element={
          <RBACRoute perm="admin:panel">
            <UserManagement />
          </RBACRoute>
        }
      />

      <Route path={paths.getInTouch} element={<GetInTouch />} />
      <Route path={paths.gateway} element={<GatewayPage />} />
      <Route path={paths.paymentSuccess} element={<PaymentSuccess />} />
      <Route path={paths.controlPage} element={<Controlpage />} />
      <Route path={paths.profile} element={<Profile />} />
      <Route path={paths.samplePage} element={<SamplePage />} />
      <Route path={paths.subscriptions} element={<Subscriptions />} />
      <Route path={paths.playerCard} element={<PlayerCard />} />
      <Route path={paths.marketPlace} element={<MarketPlace />} />
      <Route path={paths.twoFactorAuth} element={<TwoFactorAuthPage />} />
      <Route path={paths.accountSettings} element={<AccountSettingsPage />} />
      <Route path={paths.accountSettings} element={<AccountSettings />} />
      <Route path={paths.newsFeed} element={<NewEvent />} />

      <Route path="*" element={<Home />} />
    </>
  );

  const isLoggedIn = authStatus === "authenticated";

  return (
    <Routes>{isLoggedIn ? authenticatedRoutes : unAuthenticatedRoutes}</Routes>
  );
};

export default AppRoutes;
