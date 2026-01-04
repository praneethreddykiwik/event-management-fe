import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import useTheme from "./theme/useTheme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { bootstrapAuthAction } from "./redux/auth/auth.actions";
import Spinner from "./components/Spinner/Spinner.component";
import AppRoutes from "./routes";
import { ClipLoader } from "react-spinners";
import GlobalSpinner from "./components/Spinner/GlobalSpinner";
import { authSelector } from "./redux/auth/auth.slice";
// import GlobalSpinner from "./";

function App() {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { status } = useSelector(authSelector);
  console.log("status", status);

  useEffect(() => {
    // validate session cookie on app load
    dispatch(bootstrapAuthAction());
  }, [dispatch]);

  const isLoading = status === "loading";

  return (
    <ThemeProvider theme={theme}>
      <GlobalSpinner loading={isLoading}>
        <Header />
        <AppRoutes />
      </GlobalSpinner>
    </ThemeProvider>
  );
}

export default App;
