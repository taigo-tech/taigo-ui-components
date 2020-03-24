import React, { useMemo } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { taigoTheme } from './theme';

export default ({ children, darkMode = false }) => {
  // disable dark mode first
  const prefersDarkMode = false && useMediaQuery('(prefers-color-scheme: dark)');

  let theme = useMemo(
    () =>
      createMuiTheme({
        ...taigoTheme,
        palette: {
          ...taigoTheme.palette,
          type: prefersDarkMode || darkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}