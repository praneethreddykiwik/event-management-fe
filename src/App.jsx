import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile.jsx";
import DropdownComponent from "./components/Avatar/AvatarComponent.jsx";
// import LandingPage from "./pages/LandingPage/LandingPage";
import NewEvent from "./pages/NewEvent/NewEvent";
import { paths } from "./constants/paths";

import SampleInput from "./pages/sample/SampleInput";
import ExInput from "./pages/sample/ExInput";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="main-container">
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/dropdown"} element={<DropdownComponent />} />
          <Route path={paths.newsFeed} element={<NewEvent />} />
          <Route path={"/sampleinput"} element={<SampleInput />} />
          <Route path="/exinput" element={<ExInput />} />
        </Routes>

        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
