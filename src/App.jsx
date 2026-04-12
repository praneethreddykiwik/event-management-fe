import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { bootstrapAuthAction } from "./redux/auth/auth.actions";
import GlobalSpinner from "./components/Spinner/GlobalSpinner";
import { authSelector } from "./redux/auth/auth.slice";
import { TenantIdHOC } from "./HOC/TenantIdHOC";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./Routes";
import { toastGlobalProps } from "./utils/toast.utils";
import AppHeader from "./components/Headers/AppHeader";

function App() {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { authStatus } = useSelector(authSelector);

  useEffect(() => {
    // validate session cookie on app load
    dispatch(bootstrapAuthAction());
  }, [dispatch]);

  const isLoading = authStatus === "loading";

  return (
    <ThemeProvider theme={theme}>
      <TenantIdHOC>
        <GlobalSpinner loading={isLoading}>
          <AppHeader />
          <AppRoutes />
          <ToastContainer {...toastGlobalProps} />
          <Footer />
        </GlobalSpinner>
      </TenantIdHOC>
    </ThemeProvider>
  );
}

export default App;
