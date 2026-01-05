import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { bootstrapAuthAction } from "./redux/auth/auth.actions";
import AppRoutes from "./routes";
import GlobalSpinner from "./components/Spinner/GlobalSpinner";
import { authSelector } from "./redux/auth/auth.slice";
import { TenantIdHOC } from "./HOC/TenantIdHOC";

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
          <Header />
          <AppRoutes />
        </GlobalSpinner>
      </TenantIdHOC>
    </ThemeProvider>
  );
}

export default App;
