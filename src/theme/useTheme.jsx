import { useMemo } from "react";
import { theme } from "./theme";

const useTheme = () => {
  const selectedTheme = "light";

  // useMemo is cache
  const createTheme = useMemo(() => {
    return theme[selectedTheme];
  }, [selectedTheme]);
  return createTheme;
};

export default useTheme;
