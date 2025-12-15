/** @format */

import { useMemo } from 'react';
import { theme } from './theme';

const useTheme = () => {
  const selectedTheme = 'light';

  // useMemo is cache
  const createTheme = useMemo(() => {
    return theme[selectedTheme];
  }, [selectedTheme]);

  // console.log('abdul createTheme', createTheme);

  return createTheme;
};

export default useTheme;
